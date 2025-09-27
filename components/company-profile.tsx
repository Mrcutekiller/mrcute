"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Award, Clock } from "lucide-react"

const profileFeatures = [
  {
    icon: Shield,
    title: "Peace of Mind",
    description:
      "We understand that security is about more than just cameras and alarms. It's about the confidence that comes from knowing your property, family, and business are protected 24/7.",
  },
  {
    icon: Users,
    title: "Expert Installation",
    description:
      "Our certified technicians bring years of experience to every installation. We ensure optimal camera placement, proper wiring, and seamless integration with your existing systems.",
  },
  {
    icon: Award,
    title: "One-Year Insured Service",
    description:
      "Every installation comes with comprehensive warranty coverage and insurance protection. We stand behind our work and provide ongoing support to keep your system running perfectly.",
  },
  {
    icon: Clock,
    title: "Updates & Training",
    description:
      "Technology evolves, and so do we. We provide regular system updates, maintenance, and customer training to ensure you get the most from your security investment.",
  },
]

export function CompanyProfile() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Company Profile</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Pin Trading - Security & Automation Solutions has been at the forefront of security technology in Ethiopia,
            providing comprehensive solutions that combine advanced technology with personalized service. Our commitment
            to excellence has made us the trusted choice for businesses and homeowners throughout Addis Ababa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {profileFeatures.map((feature, index) => (
            <Card
              key={feature.title}
              className={`group hover:shadow-xl transition-all duration-300 bg-card border-border hover:border-primary/50 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
