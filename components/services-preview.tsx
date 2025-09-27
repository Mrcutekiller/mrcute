"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Settings, ShoppingCart, Wrench } from "lucide-react"

const services = [
  {
    icon: Settings,
    title: "Installation",
    description: "Professional security camera installation with expert setup and configuration for optimal coverage.",
  },
  {
    icon: ShoppingCart,
    title: "Sales",
    description: "Wide range of indoor and outdoor security cameras from trusted brands like Hikvision and IMOU.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Comprehensive maintenance services with one-year insured service and regular system updates.",
  },
]

export function ServicesPreview() {
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
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive security solutions tailored to protect what matters most to you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-border hover:border-primary/50 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
