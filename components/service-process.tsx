"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Settings, CheckCircle } from "lucide-react"

const processSteps = [
  {
    icon: Phone,
    title: "Free Consultation",
    description: "Contact us for a free consultation to discuss your security needs and requirements.",
    step: "01",
  },
  {
    icon: MapPin,
    title: "Site Survey",
    description:
      "Our experts conduct a comprehensive site survey to assess your property and security vulnerabilities.",
    step: "02",
  },
  {
    icon: Settings,
    title: "Custom Quote",
    description: "Receive a detailed, customized quote based on your specific needs and site requirements.",
    step: "03",
  },
  {
    icon: CheckCircle,
    title: "Professional Installation",
    description: "Our certified technicians install your security system with precision and attention to detail.",
    step: "04",
  },
]

export function ServiceProcess() {
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
    <section ref={sectionRef} className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Service Process</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple, transparent process from initial consultation to complete installation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <Card
              key={step.title}
              className={`group hover:shadow-lg transition-all duration-300 bg-card border-border hover:border-primary/50 relative ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <div className="mt-4 mb-4 flex justify-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Free Site Survey Highlight */}
        <div
          className={`mt-16 text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-lg p-8 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "600ms" }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Free Site Survey & Custom Quote</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            Take advantage of our complimentary site survey service. Our security experts will assess your property,
            identify vulnerabilities, and provide a detailed custom quote tailored to your specific needs—all at no cost
            to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center text-primary font-semibold">
              <CheckCircle className="w-5 h-5 mr-2" />
              No Obligation Assessment
            </div>
            <div className="flex items-center justify-center text-primary font-semibold">
              <CheckCircle className="w-5 h-5 mr-2" />
              Professional Recommendations
            </div>
            <div className="flex items-center justify-center text-primary font-semibold">
              <CheckCircle className="w-5 h-5 mr-2" />
              Detailed Cost Breakdown
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
