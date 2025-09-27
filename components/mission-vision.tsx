"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye } from "lucide-react"

export function MissionVision() {
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
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Mission & Vision</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driving our commitment to excellence in security solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card
            className={`group hover:shadow-xl transition-all duration-300 bg-card border-border hover:border-primary/50 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <CardContent className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Target className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To provide comprehensive, reliable, and innovative security solutions that protect our clients' most
                valuable assets while delivering exceptional customer service and peace of mind. We are committed to
                staying at the forefront of security technology and maintaining the highest standards of professional
                excellence.
              </p>
            </CardContent>
          </Card>

          <Card
            className={`group hover:shadow-xl transition-all duration-300 bg-card border-border hover:border-accent/50 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            <CardContent className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To be the leading security and automation solutions provider in Ethiopia, recognized for our innovation,
                reliability, and customer-centric approach. We envision a future where advanced security technology is
                accessible to all, creating safer communities and empowering businesses to thrive with confidence.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
