import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Banner = () => {
  return (
    <div className=" mt-20 sm:mt-24 w-full max-w-7xl px-6 lg:px-8">
    <div className="bg-gray-200 rounded-2xl mx-auto max-w-7xl px-8 py-8 md:py-16 md:px-16 lg:flex lg:items-center lg:justify-between flex-col text-center">
      <div className=" max-w-2xl">
        <div className="mb-6 flex h-10 w-10 mx-auto items-center justify-center rounded-lg bg-yellow-600">
            <QuestionMarkCircleIcon className="h-6 w-6 text-white" aria-hidden="true" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-grey-900 ">
        Still have questions?
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-400">
        Can’t find the answer you’re looking for? Please chat to our friendly team.
        </p>
       </div>
      <div className="mt-6 flex items-center">
      <a
            href="#ContactUs"
            className="text-center rounded-md w-full bg-yellow-600 px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          >
            Get in touch
          </a>
      </div>
    </div>
  </div>
  )
}

export default Banner