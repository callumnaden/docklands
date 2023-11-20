import React from 'react'
import CoLivingImage from "../../public/co-working.jpg";
import Image from 'next/image';

const CoLiving = () => {
  return (
    
          <div id="CoLiving" className="mx-auto max-w-7xl py-24 sm:py-32 overflow-hidden">
          <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8 items-center px-6 lg:px-8">
            <div className="lg:col-end-1 lg:w-full md:max-w-xl lg:pb-8">
            <h1 className="mt-8 text-5xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                Co_Living Housing&apos;s Trusted Partner
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Docklands Property Management has partnered with Co Living Housing Australia to enhance your property investment experience. Together, we bring expertise      and innovation, delivering efficient and profitable management services.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#ContactUs"
                  className="rounded-md bg-yellow-600 px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                >
                  Get in touch
                </a>
              </div>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <Image
                  src={CoLivingImage}
                  alt=""
                  className="aspect-[7/5] h-[340px] lg:h-[640px] w-full lg:w-[37rem] rounded-tr-[64px] rounded-bl-[64px] bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
          </div>
    
  )
}

export default CoLiving