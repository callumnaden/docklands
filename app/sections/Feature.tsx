import { HomeIcon, UserGroupIcon, WrenchScrewdriverIcon, CurrencyDollarIcon, ClipboardDocumentListIcon, PhoneIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Property Marketing',
    description:
      'Creating attractive property listings, marketing your property, and finding qualified tenants quickly.',
    icon: HomeIcon,
  },
  {
    name: 'Tenant Screening and Selection',
    description:
      'Thorough background checks, credit checks, and reference verification to ensure the best tenants for your property.',
    icon: UserGroupIcon,
  },
  {
    name: 'Maintenance and Repairs',
    description:
      'Regular property inspections, maintenance, and prompt repair services to keep your property in top condition.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Financial Management',
    description:
      'Detailed financial reporting, including income and expense statements, to help you track your investment\'s performance.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Lease Agreement Management',
    description:
      'Preparing and managing lease agreements, including renewals and terminations.',
    icon: ClipboardDocumentListIcon,
  },
  {
    name: 'Emergency Response',
    description:
      '24/7 availability for handling property emergencies and addressing tenant concerns.',
    icon: PhoneIcon,
  },  
]

export default function Feature() {
  return (
    <div id='Services' className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-base font-semibold leading-7 text-yellow-600">What we do</h2>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Making your property investments comfortable, hassle-free, and less risky
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide a wide range of services, including property marketing, rigorous tenant screening, proactive maintenance, and transparent financial management.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
