import About from '@/components/About'
import Contato from '@/components/Contato'
import Intro from '@/components/Intro'
import Portifolio from '@/components/Portifolio'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <main >
      {/* className='xl:px-80 md:px-20 px-10' */}

      <Intro />

      <About />

      <Skills />

      <Portifolio />

      <Contato />

    </main>
  )
}
