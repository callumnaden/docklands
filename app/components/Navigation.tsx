


import Image from 'next/image'
import DClogo from '../../public/images/DCLogoWhite.svg'

const navigation = [
  { name: 'About', href: '#AboutUs' },
  { name: 'Services', href: '#Services' },
  { name: 'Co-Living', href: '#CoLiving' },
  { name: 'FAQs', href: '#FAQs' },
]

export default function Navigation() {


  return (
      <header className="absolute mx-auto max-w-7xl inset-x-0 top-0 z-50 w-full">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Docklands</span>
              <Image
                className="h-16 w-auto"
                src={DClogo}
                alt=""
              />
            </a>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="#ContactUs" className="rounded-md bg-yellow-600 px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600">
                    Get in touch
                </a>
          </div>
        </nav>
      </header>
  )
}
