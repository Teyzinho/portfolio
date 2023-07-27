import Image from "next/image"

const Sidebar = () => {
  return (
    <div className='
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

        bg-gray-200 
        rounded-full 
        px-5 
        py-6 
        gap-10 
     '>
        <Image
            src="/house.svg"
            width={25}
            height={25}
            alt="house Icon"
        />

        <Image
            src="/user.svg"
            width={25}
            height={25}
            alt="user Icon"
        />

        <Image
            src="/star.svg"
            width={25}
            height={25}
            alt="star Icon"
        />

        <Image
            src="/projects.svg"
            width={25}
            height={25}
            alt="projects Icon"
        />

        <Image
            src="/mail.svg"
            width={25}
            height={25}
            alt="mail Icon"
        />
    </div>
  )
}

export default Sidebar