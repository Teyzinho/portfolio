import Title from "./Title"

const Skills = () => {
  return (
    <div className="h-screen 2xl:px-80 xl:px-40 md:px-20 px-10 bg-gray-50">
        <Title title="Habilidades" subTitle="Minhas Habilidades Técnicas" />

        <div className="sm:flex mt-8 sm:mt-20 justify-between">

            <div>
                <h2 className="font-medium text-3xl">Front-End</h2>
            </div>

            <div>
                <h2 className="font-medium text-3xl">Back-End</h2>
            </div>
        </div>
    </div>
  )
}

export default Skills