"use client";

import { projects } from "@/constants";
import Project from "./Project";
import Title from "./Title";

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

  return (
    <div className="h-fit 2xl:px-80 xl:px-40 md:px-20 px-10 pb-20">
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        project={selectedProject}
      />

      <Title title="Portfólio" subTitle="Meus Projetos Mais Recentes" />

      {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-8 sm:mt-20 justify-center items-center pb-16">
        {projects.map((data) => (
          <Project key={data.name} project={data} />
        ))}
      </div> */}
      <div className="mt-8 sm:mt-20 pb-16">
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
    </div>
  );
};

export default Portifolio;
