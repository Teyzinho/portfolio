import Intro from '@/components/Intro'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='xl:px-80 md:px-20 px-10'>
      <Intro />
      <div className='pt-12 hidden sm:flex'>
        <Image
          src="/mouse.svg"
          width={30}
          height={30}
          alt='mouse'
        />
        Scroll Down
        <Image
          src="/arrow-down.svg"
          width={30}
          height={30}
          alt='arrow'
        />
      </div>
    </main>
  )
}
