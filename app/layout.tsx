import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Do Work',
  description: 'Do Work AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body  suppressHydrationWarning={true} className='bg-[#F5F6F8]'>{children}</body>
    </html>
  )
}
