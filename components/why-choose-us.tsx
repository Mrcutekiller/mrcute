"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Users, Zap } from "lucide-react"

const features = [
  {
    icon: CheckCircle,
    title: "Peace of Mind",
    description: "24/7 monitoring and reliable security systems that give you complete confidence in your safety.",
  },
  {
    icon: Award,
    title: "Expert Installation",
    description: "Professional technicians with years of experience ensuring perfect setup and optimal performance.",
  },
  {
    icon: Users,
    title: "One-Year Insured Service",
    description: "Comprehensive warranty and insurance coverage for all installations and maintenance services.",
  },
  {
    icon: Zap,
    title: "Updates & Training",
    description:
      "Regular system updates and customer training to keep your security system running at peak efficiency.",
  },
]

export function WhyChooseUs() {
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
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Pin Trading?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver exceptional security solutions with unmatched expertise and customer commitment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className={`group hover:shadow-lg transition-all duration-300 bg-card border-border hover:border-accent/50 ${
                isVisible ? (index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right") : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
