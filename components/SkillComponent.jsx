import Image from 'next/image'

const SkillComponent = ({skill}) => {
  return (
    <div className="flex flex-col justify-center items-center">
        <div className='
            flex 
            items-center 
            justify-center 
            w-[76px]
            h-[76px]
            lg:w-24 
            lg:h-24 
            rounded-full
            bg-white 
            shadow-md 
            cursor-pointer 
            group 
            relative
         '>
            <div className='relative w-8 h-8 lg:w-12 lg:h-12'>
                <Image
                    src={skill.icon}
                    fill
                    alt={skill.name}
                    className='group-hover:blur transition-all'
                />
            </div>

            <div className='opacity-0 absolute group-hover:opacity-100 transition-all font-medium'>
                    <p>
                        Nível:
                    </p>
                    <p>
                        {skill.level}
                    </p>
            </div>
        </div>

        {skill.name}
    </div>
  )
}

export default SkillComponent