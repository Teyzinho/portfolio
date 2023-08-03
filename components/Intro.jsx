
import Image from "next/image";

import SocialMedia from "./SocialMedia";

const Intro = () => {
  return (
    <div className="sm:h-[100vh] pb-24 flex flex-col justify-center sm:pb-0 xl:px-80 md:px-20 px-10 bg-gray-50">

      {/* Intro */}
      <div className="pt-10 sm:pt-0 items-center gap-8 md:flex">
        <div className="flex-1 text-center sm:text-justify">
          <h1 className="md:text-6xl text-4xl font-semibold tracking-tight">
            Thiago Silva
          </h1>
          <div className="flex items-center pt-6 gap-4 justify-center sm:justify-normal">
            <div className="md:w-36 hidden sm:block w-16 border h-fit border-gray-500" />
            <h2 className="md:text-4xl text-2xl">Desenvolvedor</h2>
          </div>
          <p className="pt-8 md:text-2xl text-lg sm:max-w-[400px]">
            Sou um desenvolvedor de Web Apps dedicado e Criativo!
          </p>
        <SocialMedia className={"pt-6 hidden sm:flex"}/>
        </div>

        <div className="flex-1 justify-center items-center flex flex-col pt-4">
          <div className="md:w-[350px] md:h-[350px] w-64 h-64 relative rounded-full overflow-hidden border-8 border-gray-800">
            <Image
              src="/profile.jpeg"
              fill
              alt="profile Img"
              className="object-cover"
            />
          </div>
          <SocialMedia className={"mt-8 justify-center sm:hidden"}/>
        </div>
      </div>

      

      {/* Scroll down */}
      <div className="pt-12 hidden sm:flex">
        <Image src="/mouse.svg" width={30} height={30} alt="mouse" />
        Scroll Down
        <Image
          src="/arrow-down.svg"
          width={30}
          height={30}
          alt="arrow"
          className="animate-bounce"
        />
      </div>
    </div>
  );
};

export default Intro;
