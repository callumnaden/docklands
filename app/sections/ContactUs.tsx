export default function ContactUs() {
    return (
      <div id="ContactUs" className=" py-24 sm:py-32  w-full">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-yellow-600">Contact us</h2>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our friendly team would love to hear from you
            </p>
          </div>
          <div className="mx-auto mt-16 grid grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <div>
              <h3 className="border-l border-yellow-600 pl-6 font-semibold text-gray-900">Schedule a meeting</h3>
              <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                <p>Speak to our friendly team.</p>
                <p className="text-yellow-600">Book a meeting</p>
              </address>
            </div>
            <div>
              <h3 className="border-l border-yellow-600 pl-6 font-semibold text-gray-900">Chat to support</h3>
              <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                <p>We’re here to help.</p>
                <p className="text-yellow-600">rod@docklandscommercial.com.au</p>
              </address>
            </div>
            <div>
              <h3 className="border-l border-yellow-600 pl-6 font-semibold text-gray-900">Visit us</h3>
              <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                <p>Visit our office HQ.</p>
                <p className="text-yellow-600">Docklands, VIC 3008 AU</p>
              </address>
            </div>
            <div>
              <h3 className="border-l border-yellow-600 pl-6 font-semibold text-gray-900">Call us</h3>
              <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                <p>Mon-Fri from 8am to 5pm.</p>
                <p className="text-yellow-600">0409446055</p>
              </address>
            </div>
          </div>
        </div>
      </div>
    )
  }
  