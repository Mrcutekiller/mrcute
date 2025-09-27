"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

// Simple SVG icons
const ShieldIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
)

const UsersIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
    />
  </svg>
)

const AwardIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>
)

const ClockIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const TargetIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const EyeIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
)

const HeartIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
)

const profileFeatures = [
  {
    icon: ShieldIcon,
    title: "Peace of Mind",
    description:
      "We understand that security is about more than just cameras and alarms. It's about the confidence that comes from knowing your property, family, and business are protected 24/7.",
  },
  {
    icon: UsersIcon,
    title: "Expert Installation",
    description:
      "Our certified technicians bring years of experience to every installation. We ensure optimal camera placement, proper wiring, and seamless integration with your existing systems.",
  },
  {
    icon: AwardIcon,
    title: "One-Year Insured Service",
    description:
      "Every installation comes with comprehensive warranty coverage and insurance protection. We stand behind our work and provide ongoing support to keep your system running perfectly.",
  },
  {
    icon: ClockIcon,
    title: "Updates & Training",
    description:
      "Technology evolves, and so do we. We provide regular system updates, maintenance, and customer training to ensure you get the most from your security investment.",
  },
]

const coreValues = [
  {
    icon: ShieldIcon,
    title: "Reliability",
    description: "Dependable security solutions you can trust, backed by proven technology and expert support.",
  },
  {
    icon: TargetIcon,
    title: "Innovation",
    description: "Cutting-edge security technology that stays ahead of emerging threats and challenges.",
  },
  {
    icon: HeartIcon,
    title: "Customer Commitment",
    description: "Your security needs are our priority. We're dedicated to exceeding your expectations.",
  },
  {
    icon: ClockIcon,
    title: "Efficiency",
    description: "Streamlined processes and quick response times that minimize disruption to your daily operations.",
  },
  {
    icon: AwardIcon,
    title: "Integrity",
    description: "Honest, transparent business practices built on trust and professional excellence.",
  },
]

export function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-20 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl font-bold text-foreground mb-6 transition-all duration-700 ${
              isVisible ? "animate-slide-in-left" : "opacity-0 -translate-x-20"
            }`}
          >
            About Pin Trading
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed transition-all duration-700 ${
              isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-20"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            Pin Trading - Security & Automation Solutions has been at the forefront of security technology in Ethiopia,
            providing comprehensive solutions that combine advanced technology with personalized service.
          </p>
        </div>

        {/* Company Profile */}
        <div className="mb-20">
          <h3
            className={`text-2xl sm:text-3xl font-bold text-foreground text-center mb-12 transition-all duration-700 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
            style={{ animationDelay: "400ms" }}
          >
            Why Choose Us
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {profileFeatures.map((feature, index) => (
              <Card
                key={feature.title}
                className={`group hover:shadow-xl transition-all duration-300 bg-card border-border hover:border-primary/50 hover:shadow-primary/10 ${
                  isVisible ? "animate-slide-in-left" : "opacity-0 -translate-x-20"
                }`}
                style={{ animationDelay: `${600 + index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:shadow-lg group-hover:shadow-primary/25">
                        <feature.icon />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <Card
            className={`bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 transition-all duration-700 ${
              isVisible ? "animate-slide-in-left" : "opacity-0 -translate-x-20"
            }`}
            style={{ animationDelay: "1000ms" }}
          >
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <TargetIcon />
                <h3 className="text-2xl font-bold text-foreground ml-3">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To provide comprehensive, reliable, and innovative security solutions that protect what matters most to
                our clients. We are committed to delivering exceptional service, cutting-edge technology, and peace of
                mind through professional installation, maintenance, and support services.
              </p>
            </CardContent>
          </Card>

          <Card
            className={`bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20 transition-all duration-700 ${
              isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-20"
            }`}
            style={{ animationDelay: "1200ms" }}
          >
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <EyeIcon />
                <h3 className="text-2xl font-bold text-foreground ml-3">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be Ethiopia's leading security solutions provider, recognized for our innovation, reliability, and
                customer-centric approach. We envision a safer future where advanced security technology is accessible,
                affordable, and seamlessly integrated into every home and business.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div>
          <h3
            className={`text-2xl sm:text-3xl font-bold text-foreground text-center mb-12 transition-all duration-700 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
            style={{ animationDelay: "1400ms" }}
          >
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <Card
                key={value.title}
                className={`group hover:shadow-xl transition-all duration-300 bg-card border-border hover:border-primary/50 hover:shadow-primary/10 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${1600 + index * 150}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors group-hover:shadow-lg group-hover:shadow-primary/25">
                    <value.icon />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
