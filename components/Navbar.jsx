import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-4 md:px-40 py-4 w-full bg-white shadow'>
        <p className="font-medium md:text-3xl  text-xl tracking-tight">
            Thiago
        </p>

        <div className='flex gap-2'>
            <Link href="/">
                <Image
                    src="/github.svg"
                    width={25}
                    height={25}
                    alt="github Icon"
                />
            </Link>
            <Link href="/">
                <Image
                    src="/linkedin.svg"
                    width={25}
                    height={25}
                    alt="linkedin Icon"
                />
            </Link>
            <Link href="/">
                <Image
                    src="/instagram.svg"
                    width={25}
                    height={25}
                    alt="Instagram Icon"
                />
            </Link>

        </div>
    </nav>
  )
}

export default Navbar