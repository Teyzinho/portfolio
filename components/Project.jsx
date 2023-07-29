"use client";

import Image from "next/image";

import External from "@/public/external.svg";

const Project = ({ project, setIsOpen, setSelectedProject }) => {

  const handleClick = () => {
    setSelectedProject(project)
    setIsOpen(true)
  }

  return (
    <div
      onClick={handleClick}
      className="
      overflow-hidden 
      rounded-2xl 

      2xl:w-[384px] 
      2xl:h-[216px] 

      xl:w-[320px] 
      xl:h-[180px] 

      sm:w-[274px] 
      sm:h-[154px] 

      w-full
      h-[216px]

      relative 
      shadow-xl
      cursor-pointer

      group
    "
    >
      <Image
        src={project.imagePath}
        fill
        alt={`${project.name}Img`}
        className="object-cover group-hover:scale-105 transition-all"
      />
      <div
        className="
        absolute 
        opacity-0 
        group-hover:opacity-100 
        text-2xl 
        font-medium 
        transition-all
        bg-gradient-to-br from-violet-700/40 via-violet-700/70 to-violet-700/40
        w-full
        h-full
        flex
        items-center
        justify-center
        text-white
      "
      >
        {/* Gradient e texto */}
        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
          <div className="flex items-center gap-2 tracking-tight">
            <p className="delay-100">Ver</p>
            <p className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
              Mais
            </p>
            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
              <External className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
