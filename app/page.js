import About from '@/components/About'
import Intro from '@/components/Intro'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <main >
      {/* className='xl:px-80 md:px-20 px-10' */}
      <Intro />

      <About />

      <Skills />

    </main>
  )
}
