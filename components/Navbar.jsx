import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-40 py-4'>
        <p className="font-medium text-3xl tracking-tight">
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