import { CompanyProfile } from "@/components/company-profile"
import { MissionVision } from "@/components/mission-vision"
import { CoreValues } from "@/components/core-values"
import { AboutHero } from "@/components/about-hero"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      <AboutHero />
      <CompanyProfile />
      <MissionVision />
      <CoreValues />
    </div>
  )
}
