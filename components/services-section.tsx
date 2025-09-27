"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Wrench, ShoppingCart, Settings, CheckCircle, Shield, Users, Award, Phone } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "Professional Installation",
    description: "Expert installation of security cameras with optimal placement and professional wiring.",
    features: [
      "Site survey and consultation",
      "Professional mounting and wiring",
      "System configuration and testing",
      "User training and documentation",
    ],
    highlight: "Free Site Survey",
  },
  {
    icon: ShoppingCart,
    title: "Security Camera Sales",
    description: "Wide selection of indoor and outdoor security cameras from trusted brands.",
    features: [
      "Indoor and outdoor cameras",
      "Professional and consumer grade",
      "Latest technology and features",
      "Competitive pricing and warranties",
    ],
    highlight: "Best Prices",
  },
  {
    icon: Settings,
    title: "Maintenance & Support",
    description: "Ongoing maintenance and technical support to keep your system running perfectly.",
    features: [
      "Regular system maintenance",
      "Software updates and upgrades",
      "Technical support and troubleshooting",
      "Emergency repair services",
    ],
    highlight: "24/7 Support",
  },
]

const serviceProcess = [
  {
    step: 1,
    title: "Free Consultation",
    description: "We assess your security needs and provide expert recommendations.",
    icon: Users,
  },
  {
    step: 2,
    title: "Custom Quote",
    description: "Receive a detailed, no-obligation quote tailored to your requirements.",
    icon: Award,
  },
  {
    step: 3,
    title: "Professional Installation",
    description: "Our certified technicians install your system with precision and care.",
    icon: Wrench,
  },
  {
    step: 4,
    title: "Ongoing Support",
    description: "Enjoy peace of mind with our comprehensive maintenance and support services.",
    icon: Shield,
  },
]

const benefits = [
  "One-year warranty on all installations",
  "Insured and certified technicians",
  "Free system training and documentation",
  "24/7 emergency support available",
  "Regular maintenance and updates",
  "Competitive pricing with no hidden fees",
]

export function ServicesSection() {
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
    <section id="services" ref={sectionRef} className="py-20 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl font-bold text-foreground mb-6 transition-all duration-700 ${
              isVisible ? "animate-slide-in-left" : "opacity-0 -translate-x-20"
            }`}
          >
            Our Services
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-700 ${
              isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-20"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            Comprehensive security solutions from consultation to ongoing support
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`group hover:shadow-xl transition-all duration-300 bg-card border-border hover:border-primary/50 hover:shadow-primary/10 ${
                isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${400 + index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors group-hover:shadow-lg group-hover:shadow-primary/25">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <Badge className="bg-accent text-accent-foreground mb-2">{service.highlight}</Badge>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Process */}
        <div className="mb-20">
          <h3
            className={`text-2xl sm:text-3xl font-bold text-foreground text-center mb-12 transition-all duration-700 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
            style={{ animationDelay: "1000ms" }}
          >
            Our Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceProcess.map((step, index) => (
              <div
                key={step.step}
                className={`text-center transition-all duration-700 ${
                  isVisible ? "animate-slide-in-left" : "opacity-0 -translate-x-20"
                }`}
                style={{ animationDelay: `${1200 + index * 150}ms` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto shadow-lg shadow-primary/25">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{step.title}</h4>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Benefits */}
        <Card
          className={`bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 transition-all duration-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
          style={{ animationDelay: "1800ms" }}
        >
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Our Services?</h3>
              <p className="text-muted-foreground">
                We're committed to providing the highest quality security solutions with exceptional customer service
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button
                size="lg"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Your Free Quote
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
