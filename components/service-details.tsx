"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Settings, ShoppingCart, Wrench, CheckCircle, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Settings,
    title: "Professional Installation",
    description:
      "Expert installation services ensuring optimal camera placement, proper wiring, and seamless system integration.",
    features: [
      "Site survey and security assessment",
      "Professional camera mounting and positioning",
      "Network configuration and setup",
      "System testing and optimization",
      "User training and documentation",
    ],
    color: "primary",
  },
  {
    icon: ShoppingCart,
    title: "Security Camera Sales",
    description:
      "Wide selection of high-quality indoor and outdoor security cameras from trusted brands at competitive prices.",
    features: [
      "Hikvision professional cameras",
      "IMOU smart security solutions",
      "Xiaomi and EZVIZ consumer cameras",
      "V380 wireless camera systems",
      "Custom system recommendations",
    ],
    color: "accent",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Comprehensive maintenance services to keep your security system running at peak performance year-round.",
    features: [
      "Regular system health checks",
      "Software updates and patches",
      "Hardware cleaning and calibration",
      "24/7 technical support",
      "One-year insured service warranty",
    ],
    color: "primary",
  },
]

export function ServiceDetails() {
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
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Complete Security Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial consultation to ongoing support, we provide comprehensive services tailored to your security
            needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-border hover:border-${service.color}/50 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div
                    className={`w-16 h-16 bg-${service.color}/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-${service.color}/20 transition-colors`}
                  >
                    <service.icon className={`w-8 h-8 text-${service.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className={`w-5 h-5 text-${service.color} mr-3 mt-0.5 flex-shrink-0`} />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full bg-${service.color} hover:bg-${service.color}/90 text-${service.color}-foreground group`}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
