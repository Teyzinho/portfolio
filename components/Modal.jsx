"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import External from "@/public/external.svg";

const Modal = ({ isOpen, setIsOpen, project }) => {
  if (!isOpen) {
    return null;
  }

  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center h-screen w-screen bg-gray-900/20 z-10 rounded-2xl shadow-2xl"
        variants={backdrop}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="lg:w-[1320px] w-11/12 block h-[626px] bg-white rounded-2xl relative lg:flex">
          <button onClick={handleClose} className="absolute right-6 top-4 z-10">
            <Image
                src="/close.svg"
                width={25}
                height={25}
                alt="closebtn"
            />
          </button>

          <Link href={project.liveSite} className="lg:w-3/5 lg:h-full w-full h-72 relative rounded-2xl shadow-md group overflow-hidden flex items-center justify-center">
            <Image
              src={project.imagePath}
              fill
              alt="banner Img"
              className="object-cover rounded-2xl group-hover:scale-105 transition-all group-hover:blur-sm"
            />
            <div className="absolute opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-300">
                <External className="w-8 h-8 text-white"/>
            </div>
          </Link>

          <div className="px-3 relative w-full">
            <h1 className="font-semibold text-4xl pt-8">{project.name}</h1>

            <div className="lg:absolute lg:h-72 lg:w-full bg-gray-100 rounded-2xl shadow-xl lg:-left-16 mt-8 px-8 pt-4 text-lg">
              {project.description}
            </div>

            <div className="lg:mt-[332px] mt-4">
              <p className="font-semibold">Tecnologias Utilizadas</p>
              <div className="flex gap-4 pt-2">
                {project.tech.map((item) => (
                  <div className="flex gap-2">
                    <Image
                      src={item.icon}
                      width={20}
                      height={20}
                      alt={item.name}
                    />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:absolute right-6 bottom-4 flex justify-end pt-4 gap-4 ml-auto">
              <Link href={project.github} className="flex gap-2">
                <p>Repositório</p>
                <Image
                  src="/icons/github.svg"
                  width={25}
                  height={25}
                  alt="externalIcon"
                />
              </Link>
              <Link href={project.liveSite} className="flex gap-2">
                <p>Ir para o Site</p>
                <Image
                  src="/external.svg"
                  width={25}
                  height={25}
                  alt="externalIcon"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
