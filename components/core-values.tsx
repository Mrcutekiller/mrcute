"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lightbulb, Heart, Zap, CheckCircle } from "lucide-react"

const coreValues = [
  {
    icon: Shield,
    title: "Reliability",
    description:
      "We deliver consistent, dependable security solutions that our clients can trust. Every system we install is built to perform flawlessly, day after day.",
    color: "primary",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace cutting-edge technology and continuously evolve our offerings to stay ahead of emerging security challenges and opportunities.",
    color: "accent",
  },
  {
    icon: Heart,
    title: "Customer Commitment",
    description:
      "Our clients are at the heart of everything we do. We listen, understand, and deliver solutions that exceed expectations while building lasting relationships.",
    color: "primary",
  },
  {
    icon: Zap,
    title: "Efficiency",
    description:
      "We optimize every aspect of our service delivery, from initial consultation to installation and ongoing support, ensuring maximum value and minimal disruption.",
    color: "accent",
  },
  {
    icon: CheckCircle,
    title: "Integrity",
    description:
      "We conduct business with honesty, transparency, and ethical practices. Our word is our bond, and we take full responsibility for our commitments.",
    color: "primary",
  },
]

export function CoreValues() {
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
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Core Values</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            These fundamental principles guide every decision we make and every service we provide, ensuring that we
            consistently deliver excellence in security solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, index) => (
            <Card
              key={value.title}
              className={`group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-border hover:border-${value.color}/50 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div
                    className={`w-14 h-14 bg-${value.color}/10 rounded-full flex items-center justify-center group-hover:bg-${value.color}/20 transition-colors`}
                  >
                    <value.icon className={`w-7 h-7 text-${value.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Tagline */}
        <div
          className={`text-center mt-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "800ms" }}
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-lg p-8">
            <p className="text-2xl sm:text-3xl font-bold text-primary mb-4">"Security is not an option."</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              This isn't just our tagline—it's our commitment to you. In today's world, security is essential, and we're
              here to make it accessible, reliable, and effective for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
