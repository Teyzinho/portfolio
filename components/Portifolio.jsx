"use client";

import { projects } from "@/constants";
import Project from "./Project";
import Title from "./Title";
import CardListLeft from "./CardListLeft";
import CardListRight  from "./CardListRight";

import DragLeft from "@/public/drag-left.svg";
import ListType from "@/public/list.svg";
import GridType from "@/public/grid.svg";

//Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";

import { Navigation, Pagination, A11y, Grid } from "swiper/modules";
import Modal from "./Modal";
import { useState } from "react";

const Portifolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const [selectedType, setSelectedType] = useState("list");

  const getComponentByIndex = (index) => {
    return index % 2 === 0 ? <CardListLeft project={projects[index]} /> : <CardListRight project={projects[index]} />;
  };

  return (
    <div className="h-fit min-h-[500px] 2xl:px-80 xl:px-40 md:px-20 px-10 pb-24">
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} project={selectedProject} />

      <Title title="Portfólio" subTitle="Meus Projetos Mais Recentes" />

      <div className="flex mt-4 justify-between">
        <div className="flex lg:opacity-0">
          {selectedType === "list" && (
            <>
              <p>Arraste para o lado</p>
              <DragLeft
                width="25"
                height="25"
                alt="dragLeft"
                className="animate-[dragLeft_3s_ease-in-out_infinite]"
              />
            </>
          )}
        </div>

        <div className="flex gap-3">
          <ListType
            width="30"
            height="30"
            alt="list"
            className={`${
              selectedType === "list" && "text-blue-500 scale-110"
            } cursor-pointer transition-all`}
            onClick={() => setSelectedType("list")}
          />

          <GridType
            width="30"
            height="30"
            alt="grid"
            className={`${
              selectedType === "grid" && "text-blue-500 scale-110"
            } cursor-pointer transition-all`}
            onClick={() => setSelectedType("grid")}
          />
        </div>
      </div>

      {selectedType === "list" ? (
        <div className="mt-4 sm:mt-20 lg:pb-16">
          <Swiper
            modules={[Navigation, Pagination, A11y, Grid]}
            spaceBetween={16}
            pagination={{ clickable: true }}
            grid={{
              fill: "row",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
                grid: { rows: 1 },
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 15,
                grid: { rows: 2 },
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 15,
                grid: { rows: 3 },
              },
            }}
            loop={false}
          >
            {projects.map((data) => (
              <SwiperSlide key={data.name}>
                <Project
                  project={data}
                  setIsOpen={setIsOpen}
                  setSelectedProject={setSelectedProject}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="flex flex-col gap-24">
          {projects.map((index) => (
            // <CardList project={data} />
            <div key={index}>
              {getComponentByIndex(index)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Portifolio;
