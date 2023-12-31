"use client";

import House from "@/public/house.svg";
import User from "@/public/user.svg";
import Star from "@/public/star.svg";
import Projects from "@/public/projects.svg";
import Mail from "@/public/mail.svg";

const IconComponent = ({ icon, className, onClick }) => {
  const iconComponents = {
    House,
    User,
    Star,
    Projects,
    Mail
  };

  const SelectedIcon = iconComponents[icon];

  if (!SelectedIcon) {
    return null;
  }

  return <SelectedIcon className={className} onClick={onClick} />;
};

const Sidebar = ({
  active,
  scrollTo,
  aboutRef,
  skillsRef,
  portfolioRef,
  contactRef,
  introRef,
}) => {
  const handleCLick = (value) => {
    scrollTo(value);
  };

  const icons = [
    {
      name: "Inicio",
      icon: "House",
      ref: introRef,
    },
    {
      name: "Sobre",
      icon: "User",
      ref: aboutRef,
    },
    {
      name: "Habilidades",
      icon: "Star",
      ref: skillsRef,
    },
    {
      name: "Portifolio",
      icon: "Projects",
      ref: portfolioRef,
    },
    {
      name: "Contato",
      icon: "Mail",
      ref: contactRef,
    },
  ];

  return (
    <div
      className="
        z-10
        fixed 
        flex
        justify-center 
        items-center
        sm:flex-col

        sm:right-16 
        sm:top-1/2 
        sm:translate-y-[-50%]
        sm:w-fit
        

        top-[90%]
        right-1/2
        translate-x-[50%]
        w-4/5

        bg-gray-200/70
        rounded-full 
        px-5 
        py-6 
        gap-10 
        backdrop-blur-sm
     "
    >
      {icons.map((item) => (
        <div 
            className="cursor-pointer group relative flex items-center"
            key={item.name}
        >
          <IconComponent
            icon={item.icon}
            className={`w-[25px] h-[25px] transition-all  ${
              active === item.name ? "text-blue-500 scale-125" : "text-black"
            }`}
            onClick={() => handleCLick(item.ref)}
          />
          <div className="sm:block hidden absolute px-3 py-1 bg-slate-100 rounded-2xl opacity-0 invisible group-hover:visible group-hover:-translate-x-[110%] sm:group-hover:-translate-x-[135%] -translate-x-[50%] group-hover:opacity-100 transition-all  ">
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
