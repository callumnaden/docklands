import Hero from './sections/Hero'
import AboutUs from './sections/AboutUs'
import Feature from './sections/Feature'
import CoLiving from './sections/CoLiving'
import Testamonial from './sections/Testamonial'
import ContactUs from './sections/ContactUs'
import FAQs from './sections/FAQs'
import Banner from './sections/Banner'
import Footer from './sections/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Hero/>
      <AboutUs/>
      <Feature/>
      <CoLiving/>
      <ContactUs/>
      <FAQs/>
      <Banner/>
      <Footer/>
    </main>
  )
}
