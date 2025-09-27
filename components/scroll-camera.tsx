"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function ScrollCamera() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

      // Hide camera when reaching products section (around 80% of viewport height)
      const productsSection = document.getElementById("products")
      if (productsSection) {
        const productsTop = productsSection.offsetTop
        const threshold = productsTop - window.innerHeight * 0.3
        setIsVisible(currentScrollY < threshold)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate camera position based on scroll
  const cameraTransform = `translateY(${scrollY * 0.5}px) translateX(${Math.sin(scrollY * 0.01) * 20}px)`
  const cameraRotation = `rotate(${scrollY * 0.1}deg)`

  if (!isVisible) return null

  return (
    <div
      className="fixed top-20 right-8 z-50 pointer-events-none"
      style={{
        transform: cameraTransform,
        transition: "opacity 0.5s ease-out",
      }}
    >
      <div className="relative w-32 h-32 sm:w-40 sm:h-40" style={{ transform: cameraRotation }}>
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-green-500/20 rounded-full blur-xl animate-pulse" />

        {/* Camera image */}
        <Image
          src="/security-camera-professional.png"
          alt="Security Camera"
          fill
          className="object-contain drop-shadow-2xl"
          priority
        />

        {/* Movement indicators inspired by sketch */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping" />
        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
      </div>
    </div>
  )
}
