"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HomeIcon, BuildingIcon, ShieldIcon } from "lucide-react"
import Image from "next/image"

const indoorCameras = [
  {
    name: "Xiaomi C300",
    image: "/xiaomi-c300-indoor-security-camera-white-modern-de.jpg",
    features: ["1080p HD Video", "Night Vision", "Two-Way Audio", "Motion Detection"],
    description: "Compact and reliable indoor monitoring with crystal-clear video quality.",
  },
  {
    name: "EZVIZ TY2",
    image: "/ezviz-ty2-indoor-security-camera-pan-tilt-white.jpg",
    features: ["360° Pan & Tilt", "Smart Tracking", "Cloud Storage", "Mobile App"],
    description: "Advanced pan-tilt camera with intelligent tracking capabilities.",
  },
  {
    name: "IMOU Ranger 2",
    image: "/imou-ranger-2-indoor-security-camera-white-dome.jpg",
    features: ["2MP Resolution", "PIR Detection", "Privacy Mode", "Easy Setup"],
    description: "Professional-grade indoor camera with privacy protection features.",
  },
  {
    name: "V380 Battery",
    image: "/v380-battery-indoor-security-camera-wireless-white.jpg",
    features: ["Battery Powered", "Wireless Setup", "Long Battery Life", "Weather Resistant"],
    description: "Wireless battery-powered camera for flexible installation anywhere.",
  },
  {
    name: "Hikvision Dome",
    image: "/hikvision-dome-indoor-security-camera-professional.jpg",
    features: ["4MP Ultra HD", "Smart IR", "WDR Technology", "Vandal Resistant"],
    description: "Professional dome camera with advanced imaging technology.",
  },
]

const outdoorCameras = [
  {
    name: "Hikvision Bullet",
    image: "/hikvision-bullet-outdoor-security-camera-professional.jpg",
    features: ["4K Ultra HD", "Smart IR", "IP67 Weatherproof", "Smart Detection"],
    description: "Professional bullet camera with superior outdoor performance.",
  },
  {
    name: "Hikvision TandemVu",
    image: "/hikvision-tandemvu-outdoor-security-camera-dual-lens.jpg",
    features: ["Dual Lens", "ColorVu Technology", "Smart Hybrid Light", "Perimeter Protection"],
    description: "Revolutionary dual-lens camera with advanced detection capabilities.",
  },
  {
    name: "IMOU Cruiser SE+",
    image: "/imou-cruiser-se-plus-outdoor-security-camera-ptz.jpg",
    features: ["360° Pan/Tilt", "Auto Tracking", "Spotlight", "Two-Way Audio"],
    description: "Advanced PTZ camera with intelligent tracking and deterrent features.",
  },
  {
    name: "V380 4G Smart",
    image: "/v380-4g-smart-outdoor-security-camera-solar.jpg",
    features: ["4G Connectivity", "Solar Powered", "PIR Detection", "Cloud Storage"],
    description: "Solar-powered 4G camera for remote locations without WiFi.",
  },
  {
    name: "IMOU Cell 3C",
    image: "/imou-cell-3c-outdoor-security-camera-battery.jpg",
    features: ["Battery Powered", "PIR Detection", "Spotlight", "Weather Resistant"],
    description: "Wireless battery camera with intelligent detection and deterrent lighting.",
  },
]

export function ProductsSection() {
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

  const CameraGrid = ({ cameras, type }: { cameras: typeof indoorCameras; type: "indoor" | "outdoor" }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cameras.map((camera, index) => (
        <Card
          key={camera.name}
          className={`group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-border hover:border-primary/50 hover:shadow-primary/10 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <CardContent className="p-0">
            <div className="relative overflow-hidden rounded-t-lg">
              <Image
                src={camera.image || "/placeholder.svg"}
                alt={camera.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <Badge className={`${type === "indoor" ? "bg-primary" : "bg-accent"} text-white`}>
                  {type === "indoor" ? "Indoor" : "Outdoor"}
                </Badge>
              </div>
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 group-hover:shadow-inner group-hover:shadow-primary/25" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">{camera.name}</h3>
              <p className="text-muted-foreground mb-4 text-sm">{camera.description}</p>
              <div className="space-y-2 mb-4">
                {camera.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <ShieldIcon className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-primary">Contact for Price</span>
                <Button
                  size="sm"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  return (
    <section id="products" ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl font-bold text-foreground mb-6 transition-all duration-700 ${
              isVisible ? "animate-slide-in-left" : "opacity-0 -translate-x-20"
            }`}
          >
            Security Camera Products
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-700 ${
              isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-20"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            Discover our comprehensive range of indoor and outdoor security cameras designed to meet all your
            surveillance needs
          </p>
        </div>

        <Tabs defaultValue="indoor" className="w-full">
          <TabsList
            className={`grid w-full grid-cols-2 mb-12 transition-all duration-700 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
            style={{ animationDelay: "400ms" }}
          >
            <TabsTrigger value="indoor" className="flex items-center space-x-2">
              <HomeIcon className="w-4 h-4" />
              <span>Indoor Cameras</span>
            </TabsTrigger>
            <TabsTrigger value="outdoor" className="flex items-center space-x-2">
              <BuildingIcon className="w-4 h-4" />
              <span>Outdoor Cameras</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="indoor">
            <CameraGrid cameras={indoorCameras} type="indoor" />
          </TabsContent>

          <TabsContent value="outdoor">
            <CameraGrid cameras={outdoorCameras} type="outdoor" />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
