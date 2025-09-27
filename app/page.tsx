import { HeroSection } from "@/components/hero-section"
import { ServicesPreview } from "@/components/services-preview"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CallToAction } from "@/components/call-to-action"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesPreview />
      <WhyChooseUs />
      <CallToAction />
    </div>
  )
}
