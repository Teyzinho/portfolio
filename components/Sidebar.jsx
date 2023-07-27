import Image from "next/image"

const Sidebar = () => {
  return (
    <div className='fixed flex-col right-16 flex justify-center items-center top-1/2 translate-y-[-50%] bg-gray-200 rounded-full px-5 py-6 gap-8'>

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