import Title from "./Title";
import SkillComponent from "./SkillComponent";
import { skills } from "@/constants";

const Skills = () => {
  return (
    <div className="h-screen 2xl:px-80 xl:px-40 md:px-20 px-10 bg-gray-50">
      <Title title="Habilidades" subTitle="Minhas Habilidades Técnicas" />

      <div className="sm:flex mt-8 sm:mt-20 justify-between text-center">
        <div>
          <h2 className="font-medium text-3xl">Front-End</h2>

          <div className="grid grid-cols-4 gap-8 pt-8">
            {skills
              .filter((item) => item.category === "frontEnd") // Filtrar por categoria 'frontEnd'
              .map((item) => (
                <SkillComponent key={item.name} skill={item} />
              ))}
          </div>
        </div>

        <div>
          <h2 className="font-medium text-3xl">Back-End</h2>

          <div className="grid grid-cols-4 gap-8 pt-8">
          {skills
              .filter((item) => item.category === "backEnd") // Filtrar por categoria 'frontEnd'
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
