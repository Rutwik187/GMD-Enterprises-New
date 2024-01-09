import Navbar from '@/components/Navbar/Navbar'
import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'
import './globals.css'


export const metadata = {
  title: 'GMD Enterprises',
  description: 'Best in quality products',
}
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='h-full'>
    <body
      className={cn(
        'relative h-full font-sans antialiased',
        inter.className
      )}>
      <main className='relative flex flex-col min-h-screen'>
        
          <Navbar />
          <div className='flex-grow flex-1'>
            {children}
          </div>
          {/* <Footer /> */}
      </main>

    </body>
  </html>
  )
}
