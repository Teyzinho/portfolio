import Image from 'next/image'

const SkillComponent = ({skill}) => {
  return (
    <div className="flex flex-col justify-center items-center">
        <div className='
            flex 
            items-center 
            justify-center 
            w-24 
            h-24 
            rounded-full
            bg-white 
            shadow-md 
            cursor-pointer 
            group 
            relative
         '>
            <Image
                src={skill.icon}
                width={48}
                height={48}
                alt={skill.name}
                className='group-hover:blur transition-all'
            />
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