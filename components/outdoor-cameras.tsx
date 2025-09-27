"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TreePine, Shield } from "lucide-react"

const outdoorCameras = [
  {
    name: "Hikvision Bullet",
    image: "/hikvision-bullet-outdoor-security-camera-white-wea.jpg",
    features: ["4K Ultra HD", "IP67 Weatherproof", "Smart IR 30m", "H.265+ Compression"],
    description: "Professional bullet camera with superior night vision and weather resistance.",
    price: "Contact for Price",
  },
  {
    name: "Hikvision TandemVu",
    image: "/hikvision-tandemvu-outdoor-security-camera-dual-le.jpg",
    features: ["Dual Lens Design", "ColorVu Technology", "Audio Recording", "Smart Detection"],
    description: "Revolutionary dual-lens camera providing both overview and detailed monitoring.",
    price: "Contact for Price",
  },
  {
    name: "IMOU Cruiser SE+",
    image: "/imou-cruiser-se--outdoor-security-camera-pan-tilt.jpg",
    features: ["360° Pan & Tilt", "Auto Tracking", "Siren & Spotlight", "Two-Way Talk"],
    description: "Advanced PTZ camera with active deterrent features and intelligent tracking.",
    price: "Contact for Price",
  },
  {
    name: "V380 4G Smart",
    image: "/v380-4g-smart-outdoor-security-camera-solar-panel.jpg",
    features: ["4G Connectivity", "Solar Powered", "PIR Detection", "Cloud Storage"],
    description: "Wireless 4G camera with solar power for remote locations without WiFi.",
    price: "Contact for Price",
  },
  {
    name: "IMOU Cell 3C",
    image: "/imou-cell-3c-outdoor-security-camera-battery-power.jpg",
    features: ["Battery Powered", "Wire-Free Setup", "PIR Detection", "Weatherproof"],
    description: "Completely wireless outdoor camera with long-lasting battery performance.",
    price: "Contact for Price",
  },
]

export function OutdoorCameras() {
  const [isVisible, setIsVisible] = useState(false)
  const [showScrollCamera, setShowScrollCamera] = useState(false)
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

    const handleScroll = () => {
      const hikvisionBullet = document.querySelector('[data-camera="hikvision-bullet"]')
      if (hikvisionBullet) {
        const rect = hikvisionBullet.getBoundingClientRect()
        const isInView = rect.top <= window.innerHeight && rect.bottom >= 0
        setShowScrollCamera(isInView && window.scrollY > 1000)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section ref={sectionRef} data-section="outdoor-cameras" className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <TreePine className="w-8 h-8 text-accent mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Outdoor Security Cameras</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Secure your perimeter with weatherproof cameras designed to withstand harsh outdoor conditions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outdoorCameras.map((camera, index) => (
            <Card
              key={camera.name}
              data-camera={camera.name === "Hikvision Bullet" ? "hikvision-bullet" : undefined}
              className={`group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-border hover:border-accent/50 ${
                camera.name === "Hikvision Bullet" ? "ring-2 ring-yellow-400/50 shadow-lg shadow-yellow-400/20" : ""
              } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  {camera.name === "Hikvision Bullet" && showScrollCamera && (
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-green-500/20 animate-pulse z-10 rounded-t-lg" />
                  )}
                  <img
                    src={camera.image || "/placeholder.svg"}
                    alt={camera.name}
                    className={`w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 ${
                      camera.name === "Hikvision Bullet" && showScrollCamera ? "animate-bounce" : ""
                    }`}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-accent-foreground">Outdoor</Badge>
                    {camera.name === "Hikvision Bullet" && (
                      <Badge
                        className={`ml-2 ${showScrollCamera ? "bg-green-500 text-white animate-pulse" : "bg-yellow-400 text-yellow-900"}`}
                      >
                        {showScrollCamera ? "Active" : "Featured"}
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{camera.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{camera.description}</p>
                  <div className="space-y-2 mb-4">
                    {camera.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <Shield className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-accent">{camera.price}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                    >
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
