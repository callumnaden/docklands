import React from 'react'
import Navigation from '../components/Navigation'
import Image from 'next/image'
import heroImage from "../../public/HeroImage.jpg"

const Hero = () => {
  return (
    <div id="Hero" className="relative w-full isolate pt-14 bg-gray-900">
        <Navigation/>

        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className=" max-w-5xl">
              <h1 className="text-4xl font-[600] tracking-tight text-white sm:text-6xl">
              Redefining property management to make your investments not only profitable but also stress-free
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-400 max-w-2xl">
              — We provide comprehensive property management solutions that prioritise comfort and minimize investment risk.
              </p>
              <div className="mt-10 flex items-center gap-x-3">
                <a href="#ContactUs" className="rounded-md bg-yellow-600 px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600">
                    Get in touch
                </a>
                <a href="#AboutUs" className="leading-6 px-6 py-4 text-sm font-semibold text-white">
                    Learn more <span aria-hidden="true" className='animate-bounce'>↓</span>
                </a>
              </div>
            </div>
            <div className="mt-16 flow-root sm:mt-24">
              <div className="lg:-m-4">
                <Image
                  src={heroImage}
                  alt="App screenshot"
                  width={2432}
                  height={500}
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
  )
}

export default Hero