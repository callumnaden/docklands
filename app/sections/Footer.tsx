import Image from 'next/image'
import DClogoText from '../../public/DCLogoText.svg'
  
  export default function Footer() {
    return (
        <div className="mx-auto max-w-7xl w-full pt-24 pb-12 md:flex md:items-center md:justify-between  px-6 lg:px-8">
        <div className="flex justify-center space-x-6 md:order-1">
        <Image
          priority
          src={DClogoText}
          width={140}
          alt=""
          />
        </div>
        <div className="mt-8 md:order-2 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; 2027 Docklands Property Management. All rights reserved.
          </p>
        </div>
      </div>
    )
  }
  