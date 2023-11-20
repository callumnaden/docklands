'use client'

import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What types of properties do you manage?",
    answer:
      "We manage a wide range of properties, including single-family homes, condos, commercial properties, and multi-unit complexes.",
  },
  {
    question: "How do you market my property to attract tenants?",
    answer:
      "We use a combination of online and traditional marketing methods to reach a wide audience, including property listing websites, social media, and local advertising.",
  },
  {
    question: "How do you screen and select tenants?",
    answer:
      "We conduct thorough background and credit checks, verify references, and assess tenant suitability to find the best tenants for your property.",
  },
  {
    question: "What is your approach to property maintenance and repairs?",
    answer:
      "We perform regular property inspections and address maintenance and repair needs promptly to keep your property in excellent condition.",
  },
  {
    question: "How do you handle tenant-related issues and disputes?",
    answer:
      "We handle tenant inquiries, concerns, and disputes professionally, aiming for efficient resolutions while following legal requirements.",
  },
  {
    question: "What are your fees for property management services?",
    answer:
      "Our fees vary depending on the specific services you require. Contact us for a customised quote.",
  },
  // More questions...
]

export default function FAQs() {
  return (
    <div id="FAQs" className="w-full">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl ">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 text-center">Frequently asked questions</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
            Everything you need to know about the product and billing.
          </p>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
