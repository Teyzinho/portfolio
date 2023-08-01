import Title from "./Title";
import SkillComponent from "./SkillComponent";
import { skills } from "@/constants";

const Skills = () => {
  return (
    <div className="h-fit 2xl:px-80 xl:px-40 md:px-20 px-10 bg-gray-50 pb-24">
      <Title title="Habilidades" subTitle="Minhas Habilidades Técnicas" />

      <div className="sm:flex mt-8 sm:mt-20 justify-between gap-8 text-center">
        <div className="mt-12 sm:mt-0">
          <h2 className="font-medium text-2xl sm:text-3xl">Front-End</h2>

          <div className="grid grid-cols-4 gap-8  pt-4 sm:pt-8">
            {skills
              .filter((item) => item.category === "frontEnd") 
              .map((item) => (
                <SkillComponent key={item.name} skill={item} />
              ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-0">
          <h2 className="font-medium text-2xl sm:text-3xl">Back-End</h2>

          <div className="grid grid-cols-4 gap-8  pt-4 sm:pt-8">
          {skills
              .filter((item) => item.category === "backEnd") 
              .map((item) => (
                <SkillComponent key={item.name} skill={item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
