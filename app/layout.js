import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Thiago Portifolio',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Navbar />
        {/* <Sidebar /> */}
        {children}
        </body>
    </html>
  )
}
