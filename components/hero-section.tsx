"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// Simple SVG arrow icon
const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const [showCamera, setShowCamera] = useState(false)
  const [textComplete, setTextComplete] = useState(false)
  const fullText = "Your Safety, Our Mission"
  const typingSpeed = 100

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
        setTextComplete(true)
        setTimeout(() => {
          setShowCamera(true)
        }, 1000)
      }
    }, typingSpeed)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(59,130,246,0.05)_49%,rgba(59,130,246,0.05)_51%,transparent_52%)] bg-[length:20px_20px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Typing Animation with Morphing Effect */}
          <div className="space-y-4">
            <h1
              className={`text-4xl sm:text-6xl lg:text-7xl font-bold transition-all duration-1000 ${
                showCamera ? "opacity-0 -translate-y-20 scale-75" : "opacity-100 translate-y-0 scale-100"
              }`}
            >
              <span className="text-primary">{displayText}</span>
              {!textComplete && <span className="animate-pulse text-accent">|</span>}
            </h1>

            {!showCamera && (
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
                Professional security camera installation, sales, and maintenance services in Addis Ababa
              </p>
            )}
          </div>

          {showCamera && (
            <div className="flex flex-col items-center space-y-8">
              <div className="animate-drop-down-bounce">
                <div className="relative group">
                  <div className="w-64 h-64 sm:w-80 sm:h-80 relative">
                    {/* Camera sketch with continuous downward movement */}
                    <div className="animate-float-down">
                      <Image
                        src="/camera-sketch.png"
                        alt="Security Camera Movement Sketch"
                        fill
                        className="object-contain drop-shadow-2xl"
                        priority
                      />
                    </div>
                    {/* Glowing effect */}
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-75 animate-pulse-glow" />
                    <div
                      className="absolute inset-0 bg-accent/10 rounded-full blur-2xl scale-90 animate-pulse-glow"
                      style={{ animationDelay: "0.5s" }}
                    />
                  </div>
                </div>
              </div>

              {/* Enhanced content after camera appears */}
              <div className="animate-fade-in-up space-y-6" style={{ animationDelay: "0.5s" }}>
                <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
                  Professional security camera installation, sales, and maintenance services in Addis Ababa
                </p>

                <Button
                  size="lg"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold group hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                >
                  Get Protected Now
                  <ArrowRightIcon />
                </Button>

                <p className="text-2xl sm:text-3xl font-bold text-accent">"Security is not an option."</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      {showCamera && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      )}
    </section>
  )
}
