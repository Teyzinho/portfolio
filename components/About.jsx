import React from "react";
import Title from "./Title";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const About = () => {
  return (
    <div className="h-fit 2xl:px-80 xl:px-40 md:px-20 px-10 pb-20">
      <Title title="Sobre Mim" subTitle="Minha Introdução" />

      <div className="sm:flex mt-8 sm:mt-20 items-center gap-8">
        <div >
          <div className="2xl:w-[564px] 2xl:h-[405px] xl:w-[500px] xl:h-[341px] sm:w-[400px] h-[241px] rounded-2xl overflow-hidden relative flex justify-center w-full">
            <Image 
                src="/img2.png" 
                fill alt="imagem" 
                className="object-cover" 
            />
          </div>
        </div>

        <div >
          <ul className=" flex flex-col gap-4 pt-8 sm:pt-0">
            <li>
              Desenvolvedor Full Stack, proporcionando soluções completas e inovadoras tanto no Front End quanto no Back End.
            </li>
            <li>Sou Formado em Tec. Desenvolvimento de sistemas.</li>
            <li>
              Minha verdadeira paixão está na criação de Apps, sites e Jogos,
              nos quais busco constantemente aprimorar minhas habilidades.
            </li>

            <li>
              Ansioso para enfrentar novos desafios e colaborar em projetos
              inovadores.
            </li>
          </ul>
          <Link href="mailto:contatotey@outlook.com" >
            <Button className={"mt-8"} title={"Entrar em Contato"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
