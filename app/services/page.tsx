import { ServicesHero } from "@/components/services-hero"
import { ServiceDetails } from "@/components/service-details"
import { ServiceProcess } from "@/components/service-process"
import { ServiceBenefits } from "@/components/service-benefits"

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-16">
      <ServicesHero />
      <ServiceDetails />
      <ServiceProcess />
      <ServiceBenefits />
    </div>
  )
}
