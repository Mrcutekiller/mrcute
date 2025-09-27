import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
    </div>
  )
}
