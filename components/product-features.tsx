"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Smartphone, Cloud, Wrench, Phone, ArrowRight } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Professional Grade Quality",
    description:
      "All our cameras meet professional security standards with high-resolution imaging and reliable performance.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Control",
    description: "Monitor your property from anywhere with user-friendly mobile apps for iOS and Android devices.",
  },
  {
    icon: Cloud,
    title: "Cloud & Local Storage",
    description: "Flexible storage options including cloud backup and local NVR systems for your security footage.",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description: "Expert installation service ensuring optimal camera placement and system configuration.",
  },
]

export function ProductFeatures() {
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
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Why Choose Our Products?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every camera we offer comes with comprehensive support and professional-grade features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className={`group hover:shadow-lg transition-all duration-300 bg-card border-border hover:border-primary/50 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-lg p-8 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "600ms" }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Ready to Secure Your Property?</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact us for a free consultation and custom quote. Our experts will help you choose the perfect security
            solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold group"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold bg-transparent"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
