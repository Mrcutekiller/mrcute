"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CameraMovementDemo } from "./camera-movement-demo"

const HomeIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
)

const ShieldIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16V18H8V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V11H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z" />
  </svg>
)

const indoorCameras = [
  {
    name: "Xiaomi C300",
    image: "/xiaomi-indoor-security-camera-white-modern.jpg",
    features: ["1080p HD Video", "Night Vision", "Two-Way Audio", "Motion Detection"],
    description: "Compact and reliable indoor monitoring with crystal-clear video quality.",
    price: "Contact for Price",
  },
  {
    name: "EZVIZ TY2",
    image: "/ezviz-indoor-security-camera-pan-tilt-white.jpg",
    features: ["360° Pan & Tilt", "Smart Tracking", "Cloud Storage", "Mobile App"],
    description: "Advanced pan-tilt camera with intelligent tracking capabilities.",
    price: "Contact for Price",
    hasMovement: true, // Added flag to show which camera has movement capabilities
  },
  {
    name: "IMOU Ranger 2",
    image: "/imou-indoor-security-camera-white-dome.jpg",
    features: ["2MP Resolution", "PIR Detection", "Privacy Mode", "Easy Setup"],
    description: "Professional-grade indoor camera with privacy protection features.",
    price: "Contact for Price",
  },
  {
    name: "V380 Battery",
    image: "/v380-battery-indoor-security-camera-wireless-white.jpg",
    features: ["Battery Powered", "Wireless Setup", "Long Battery Life", "Weather Resistant"],
    description: "Wireless battery-powered camera for flexible installation anywhere.",
    price: "Contact for Price",
  },
  {
    name: "Hikvision Dome",
    image: "/hikvision-dome-indoor-security-camera-professional.jpg",
    features: ["4MP Ultra HD", "Smart IR", "WDR Technology", "Vandal Resistant"],
    description: "Professional dome camera with advanced imaging technology.",
    price: "Contact for Price",
  },
]

export function IndoorCameras() {
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
          <div className="flex items-center justify-center mb-4">
            <HomeIcon />
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground ml-3">Indoor Security Cameras</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Protect your indoor spaces with our range of high-quality security cameras designed for homes and offices
          </p>
        </div>

        <div className="mb-16">
          <CameraMovementDemo />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {indoorCameras.map((camera, index) => (
            <Card
              key={camera.name}
              className={`group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-border hover:border-primary/50 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              } ${camera.hasMovement ? "ring-2 ring-primary/20" : ""}`} // Added special styling for movement-capable camera
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={camera.image || "/placeholder.svg"}
                    alt={camera.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">Indoor</Badge>
                  </div>
                  {camera.hasMovement && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-accent text-accent-foreground animate-pulse">360° Movement</Badge>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{camera.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{camera.description}</p>
                  <div className="space-y-2 mb-4">
                    {camera.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <ShieldIcon />
                        <span className="text-muted-foreground ml-2">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">{camera.price}</span>
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
