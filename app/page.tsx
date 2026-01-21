import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import LiveProof from '@/components/LiveProof'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <LiveProof />
      <Process />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
