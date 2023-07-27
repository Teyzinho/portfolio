import Image from "next/image";

const Intro = () => {
  return (
    <div className="h-screen xl:px-80 md:px-20 px-10 bg-gray-50">
      {/* Intro */}
      <div className="pt-16 md:pt-40 items-center gap-8 md:flex">
        <div className="flex-1 text-center sm:text-justify">
          <h1 className="md:text-6xl text-4xl font-semibold tracking-tight">
            Thiago Silva
          </h1>
          <div className="flex items-center pt-4 gap-4 justify-center sm:justify-normal">
            <div className="md:w-36 hidden sm:block w-16 border h-fit border-gray-500" />
            <h2 className="md:text-4xl text-2xl">Desenvolvedor</h2>
          </div>
          <p className="pt-4 md:text-2xl text-lg max:w-3/4">
            Sou um desenvolvedor de Web Apps dedicado e Criativo!
          </p>
        </div>

        <div className="flex-1 justify-center flex pt-4">
          <div className="md:w-[350px] md:h-[350px] w-64 h-64 relative rounded-full overflow-hidden border-8 border-gray-800">
            <Image
              src="/profile.jpeg"
              fill
              alt="profile Img"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Scroll down */}
      <div className="pt-12 hidden sm:flex">
        <Image src="/mouse.svg" width={30} height={30} alt="mouse" />
        Scroll Down
        <Image src="/arrow-down.svg" width={30} height={30} alt="arrow" />
      </div>
    </div>
  );
};

export default Intro;
