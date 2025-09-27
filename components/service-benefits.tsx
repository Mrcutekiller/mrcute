"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Clock, Award, Users, Phone, ArrowRight } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Guaranteed Security",
    description: "Professional-grade security systems with proven reliability and performance.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock technical support and emergency response services.",
  },
  {
    icon: Award,
    title: "Certified Technicians",
    description: "All installations performed by certified and experienced security professionals.",
  },
  {
    icon: Users,
    title: "Customer Satisfaction",
    description: "Dedicated to exceeding customer expectations with personalized service.",
  },
]

export function ServiceBenefits() {
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
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Why Choose Our Services?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the difference of working with Ethiopia's leading security solutions provider
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={benefit.title}
              className={`group hover:shadow-lg transition-all duration-300 bg-card border-border hover:border-accent/50 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Guarantee */}
        <div
          className={`bg-card border border-border rounded-lg p-8 text-center ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "600ms" }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">Our Service Guarantee</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            We stand behind every installation with our comprehensive one-year insured service warranty. Your
            satisfaction and security are our top priorities, and we're committed to delivering exceptional results
            every time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold group"
            >
              Schedule Free Survey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold bg-transparent"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call +251 985 66 66 99
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
