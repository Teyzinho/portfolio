"use client"

import { useRef, useState, useEffect } from 'react';
import About from '@/components/About';
import Contato from '@/components/Contato';
import Intro from '@/components/Intro';
import Portifolio from '@/components/Portifolio';
import Sidebar from '@/components/Sidebar';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const introRef = useRef(null);

  const [currentComponent, setCurrentComponent] = useState('Intro');

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          // Verifica qual componente está visível e atualiza o estado
          setCurrentComponent(entry.target.dataset.component);
        }
      });
    };

    // Configuração do Intersection Observer para cada componente
    const aboutObserver = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });
    const skillsObserver = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });
    const portfolioObserver = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });
    const contactObserver = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });
    const introObserver = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (aboutRef.current) {
      aboutObserver.observe(aboutRef.current);
    }
    if (skillsRef.current) {
      skillsObserver.observe(skillsRef.current);
    }
    if (portfolioRef.current) {
      portfolioObserver.observe(portfolioRef.current);
    }
    if (contactRef.current) {
      contactObserver.observe(contactRef.current);
    }
    if (introRef.current) {
      introObserver.observe(introRef.current);
    }

    // Limpa os observadores quando o componente é desmontado
    return () => {
      aboutObserver.disconnect();
      skillsObserver.disconnect();
      portfolioObserver.disconnect();
      contactObserver.disconnect();
      introObserver.disconnect();
    };
  }, []);

  console.log(currentComponent)

  return (
    <>
      <Navbar />

      <Sidebar
        active={currentComponent}
        scrollTo={scrollTo}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
        introRef={introRef}
      />
      <main>

        <div ref={introRef} data-component="Inicio">
          <Intro />
        </div>

        <div ref={aboutRef} data-component="Sobre">
          <About />
        </div>

        <div ref={skillsRef} data-component="Habilidades">
          <Skills />
        </div>

        <div ref={portfolioRef} data-component="Portifolio">
          <Portifolio />
        </div>

        <div ref={contactRef} data-component="Contato">
          <Contato />
        </div>

        <Footer />

      </main>
    </>
  );
}