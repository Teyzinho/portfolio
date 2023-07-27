import Image from 'next/image'
import React from 'react'

const SkillComponent = ({skill}) => {
  return (
    <div className="flex flex-col justify-center items-center">
        <div className='flex items-center justify-center w-24 h-24 rounded-full bg-gray-200 cursor-pointer group relative'>
            <Image
                src={skill.icon}
                width={48}
                height={48}
                alt={skill.name}
            />
            <div className='opacity-0 absolute group-hover:opacity-100 transition-all'>
                    testse
            </div>
        </div>

        {skill.name}
    </div>
  )
}

export default SkillComponent