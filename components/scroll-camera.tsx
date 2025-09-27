"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function ScrollCamera() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [currentSection, setCurrentSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

      const servicesSection = document.getElementById("services")
      const productsSection = document.getElementById("products")
      const outdoorSection = document.querySelector('[data-section="outdoor-cameras"]')

      if (servicesSection && productsSection && outdoorSection) {
        const servicesTop = servicesSection.offsetTop
        const productsTop = productsSection.offsetTop
        const outdoorTop = outdoorSection.getBoundingClientRect().top + currentScrollY
        const hikvisionBullet = document.querySelector('[data-camera="hikvision-bullet"]')

        if (currentScrollY < servicesTop - 200) {
          setCurrentSection("home")
          setIsVisible(true)
        } else if (currentScrollY < productsTop - 200) {
          setCurrentSection("services")
          setIsVisible(true)
        } else if (currentScrollY < outdoorTop - 100) {
          setCurrentSection("products")
          setIsVisible(true)
        } else if (hikvisionBullet) {
          // Hide scroll camera when reaching Hikvision Bullet position
          setCurrentSection("hikvision")
          setIsVisible(false)
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial call
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getCameraPosition = () => {
    const baseSpeed = 0.3
    const horizontalMovement = Math.sin(scrollY * 0.008) * 30

    switch (currentSection) {
      case "home":
        return {
          x: 20 + horizontalMovement,
          y: 80 + scrollY * baseSpeed,
          rotation: scrollY * 0.05,
          scale: 1,
        }
      case "services":
        return {
          x: 40 + horizontalMovement,
          y: 80 + scrollY * baseSpeed,
          rotation: scrollY * 0.08,
          scale: 1.1,
        }
      case "products":
        return {
          x: 60 + horizontalMovement,
          y: 80 + scrollY * baseSpeed,
          rotation: scrollY * 0.1,
          scale: 1.2,
        }
      default:
        return {
          x: 80 + horizontalMovement,
          y: 80 + scrollY * baseSpeed,
          rotation: scrollY * 0.12,
          scale: 1.3,
        }
    }
  }

  const position = getCameraPosition()

  if (!isVisible) return null

  return (
    <div
      className="fixed z-50 pointer-events-none transition-all duration-500 ease-out"
      style={{
        top: `${position.y}px`,
        right: `${position.x}px`,
        transform: `rotate(${position.rotation}deg) scale(${position.scale})`,
      }}
    >
      <div className="relative w-28 h-28 sm:w-36 sm:h-36">
        <div
          className={`absolute inset-0 rounded-full blur-xl animate-pulse transition-colors duration-500 ${
            currentSection === "home"
              ? "bg-gradient-to-br from-yellow-400/30 to-green-500/20"
              : currentSection === "services"
                ? "bg-gradient-to-br from-green-500/30 to-yellow-400/20"
                : currentSection === "products"
                  ? "bg-gradient-to-br from-yellow-500/40 to-green-600/30"
                  : "bg-gradient-to-br from-green-600/50 to-yellow-500/40"
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
          className={`absolute -top-2 -right-2 w-4 h-4 rounded-full animate-ping transition-colors duration-500 ${
            currentSection === "home"
              ? "bg-yellow-400"
              : currentSection === "services"
                ? "bg-green-500"
                : currentSection === "products"
                  ? "bg-yellow-500"
                  : "bg-green-600"
          }`}
        />

        <div
          className={`absolute -bottom-2 -left-2 w-3 h-3 rounded-full animate-pulse transition-colors duration-500 ${
            currentSection === "home"
              ? "bg-green-500"
              : currentSection === "services"
                ? "bg-yellow-400"
                : currentSection === "products"
                  ? "bg-green-600"
                  : "bg-yellow-500"
          }`}
        />

        {/* Direction indicator arrow */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent border-t-yellow-400 animate-bounce" />
        </div>
      </div>
    </div>
  )
}
