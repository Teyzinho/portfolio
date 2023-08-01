import Image from "next/image";
import Link from "next/link";
import External from "@/public/external.svg";

const CardListLeft = ({ project }) => {
  return (
    <div className="lg:flex w-full lg:h-96 ">
      <h1 className="font-semibold text-2xl pb-4 tracking-tight lg:hidden">
        {project.name}
      </h1>

      <Link
        href={project.liveSite}
        target="_blank"
        className="lg:w-3/5 lg:h-full w-full h-72 relative rounded-2xl shadow-md group overflow-hidden flex items-center justify-center"
      >
        <Image
          src={project.imagePath}
          fill
          alt="banner Img"
          className="object-cover rounded-2xl group-hover:scale-105 transition-all group-hover:blur-sm"
        />
        <div className="absolute opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-300">
          <External className="w-8 h-8 text-white" />
        </div>
      </Link>

      <div className="px-3 relative w-full">
        <h1 className="font-semibold text-4xl pt-4 tracking-tight lg:block hidden">
          {project.name}
        </h1>

        <div className="lg:absolute lg:h-48 lg:w-full bg-gray-100 rounded-2xl shadow-xl lg:-left-16 mt-4 px-8 py-4 text-lg flex items-center font-light">
          <div dangerouslySetInnerHTML={{ __html: project.shortDesc }} />
        </div>

        <div className="lg:mt-[220px] mt-4">
          <div className="flex gap-4 pt-2 flex-wrap">
            {project.tech.map((item) => (
              <div className="flex gap-1 text-sm font-semibold">
                <Image src={item.icon} width={20} height={20} alt={item.name} />
                {item.name}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:absolute right-16 bottom-0 flex justify-end pt-4 gap-4 ml-auto flex-wrap">
          <Link href={project.github} target="_blank" className="flex gap-2">
            <p>Código</p>
            <Image
              src="/icons/github.svg"
              width={25}
              height={25}
              alt="externalIcon"
            />
          </Link>
          <Link href={project.liveSite} target="_blank" className="flex gap-2">
            <p>Site</p>
            <Image
              src="/external.svg"
              width={25}
              height={25}
              alt="externalIcon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardListLeft;
