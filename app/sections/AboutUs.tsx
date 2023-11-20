import Image from "next/image"
import { FadeIn, FadeInStagger } from "../components/FadeIn"
import featureImageBig from "../../public/images/feature-big-image.jpg"

  export default function AboutUs() {
    return (
      <FadeInStagger id="AboutUs" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-base font-semibold leading-7 text-yellow-600">Who we are</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900  sm:text-4xl">Docklands Property Management</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                Elevate Your Property Investment Experience.
            </p>
          </FadeIn>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 leading-7 text-gray-600 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
            <FadeIn className="relative text-lg">
                We are a company with a vision to bring comfort and peace of mind to property owners and investors nationwide. We offer a suite of services designed to cater to the unique needs of the Australian property market.
            </FadeIn>
            <FadeIn className="relative text-base">
            Our team consists of seasoned professionals who are passionate about making your property ownership journey comfortable and hassle-free. Whether you own a single-family home, a condominium, a commercial property, or a multi-unit complex, our expertise ensures that your investments are managed to the highest standards.
            </FadeIn>
          </div>
          <FadeIn className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl">
            <Image
              src={featureImageBig}
              alt="App screenshot"
              className="rounded-2xl w-full h-[500px] object-cover object-center"
            />
          </div>
        </FadeIn>
        </div>
      </FadeInStagger>
    )
  }
  