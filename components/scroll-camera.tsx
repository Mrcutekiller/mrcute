"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function ScrollCamera() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [currentStage, setCurrentStage] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

      const servicesSection = document.getElementById("services")
      const productsSection = document.getElementById("products")

      if (servicesSection && productsSection) {
        const servicesTop = servicesSection.offsetTop
        const productsTop = productsSection.offsetTop
        const productsBottom = productsTop + productsSection.offsetHeight

        // Define scroll stages
        if (currentScrollY < servicesTop - 200) {
          setCurrentStage("home")
        } else if (currentScrollY < productsTop - 200) {
          setCurrentStage("services")
        } else if (currentScrollY < productsBottom - 400) {
          setCurrentStage("products")
        } else {
          // Camera reaches outdoor cameras section and lands on Hikvision Bullet
          setCurrentStage("landing")
          setIsVisible(false)

          // Trigger highlight on Hikvision Bullet camera
          const event = new CustomEvent("cameraLanding", { detail: { target: "hikvision-bullet" } })
          window.dispatchEvent(event)
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getCameraPosition = () => {
    const baseY = scrollY * 0.6
    const baseX = Math.sin(scrollY * 0.008) * 30

    switch (currentStage) {
      case "home":
        return {
          x: baseX,
          y: baseY,
          rotation: scrollY * 0.05,
          scale: 1,
        }
      case "services":
        return {
          x: baseX - 20,
          y: baseY + 50,
          rotation: scrollY * 0.08,
          scale: 1.1,
        }
      case "products":
        return {
          x: baseX + 10,
          y: baseY + 100,
          rotation: scrollY * 0.12,
          scale: 1.2,
        }
      default:
        return {
          x: baseX,
          y: baseY,
          rotation: scrollY * 0.05,
          scale: 1,
        }
    }
  }

  const position = getCameraPosition()
  const cameraTransform = `translateY(${position.y}px) translateX(${position.x}px) scale(${position.scale})`
  const cameraRotation = `rotate(${position.rotation}deg)`

  if (!isVisible) return null

  return (
    <div
      className="fixed top-20 right-8 z-50 pointer-events-none"
      style={{
        transform: cameraTransform,
        transition: "opacity 0.8s ease-out, transform 0.3s ease-out",
      }}
    >
      <div className="relative w-32 h-32 sm:w-40 sm:h-40" style={{ transform: cameraRotation }}>
        <div
          className={`absolute inset-0 rounded-full blur-xl animate-pulse ${
            currentStage === "home"
              ? "bg-gradient-to-br from-yellow-400/20 to-green-500/20"
              : currentStage === "services"
                ? "bg-gradient-to-br from-green-400/30 to-yellow-500/30"
                : currentStage === "products"
                  ? "bg-gradient-to-br from-yellow-500/40 to-green-600/40"
                  : "bg-gradient-to-br from-yellow-400/20 to-green-500/20"
          }`}
        />

        {/* Camera image */}
        <Image
          src="/security-camera-professional.png"
          alt="Security Camera"
          fill
          className="object-contain drop-shadow-2xl"
          priority
        />

        <div
          className={`absolute -top-2 -right-2 w-4 h-4 rounded-full animate-ping ${
            currentStage === "products" ? "bg-yellow-500" : "bg-yellow-400"
          }`}
        />
        <div
          className={`absolute -bottom-2 -left-2 w-3 h-3 rounded-full animate-pulse ${
            currentStage === "services" ? "bg-green-600" : "bg-green-500"
          }`}
        />

        {/* Direction indicator for landing stage */}
        {currentStage === "products" && (
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="w-2 h-8 bg-gradient-to-b from-yellow-400 to-transparent animate-bounce" />
          </div>
        )}
      </div>
    </div>
  )
}
