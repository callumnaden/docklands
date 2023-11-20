import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Docklands Property Management',
  description: 'Elevate your property management experience with Docklands Property Management. Our dedicated team in Melbourne is committed to delivering unparalleled service, ensuring seamless management of residential and commercial properties. From tenant relations and maintenance to financial oversight, we provide comprehensive solutions tailored to your property needs. Discover the peace of mind that comes with professional property management at Docklands. Your property, our priority.',
  icons: {
    icon: '../images/DCLogo.svg',
    apple: '../images/DCLogo.svg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
