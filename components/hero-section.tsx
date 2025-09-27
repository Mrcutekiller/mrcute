"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield } from "lucide-react"

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const [showCamera, setShowCamera] = useState(false)
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
        // Show camera after typing is complete
        setTimeout(() => setShowCamera(true), 500)
      }
    }, typingSpeed)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(59,130,246,0.05)_49%,rgba(59,130,246,0.05)_51%,transparent_52%)] bg-[length:20px_20px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Typing Animation */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground">
              <span className="text-primary">{displayText}</span>
              <span className="animate-pulse text-accent">|</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Professional security camera installation, sales, and maintenance services in Addis Ababa
            </p>
          </div>

          {/* 3D Security Camera Animation */}
          {showCamera && (
            <div className="flex justify-center animate-drop-down">
              <div className="relative">
                <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-primary to-accent rounded-lg shadow-2xl animate-glow flex items-center justify-center">
                  <Shield className="w-16 h-16 sm:w-20 sm:h-20 text-primary-foreground" />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl scale-110 animate-pulse" />
              </div>
            </div>
          )}

          {/* CTA Button */}
          {showCamera && (
            <div className="animate-fade-in-up">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold group"
              >
                Get Protected Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          )}

          {/* Company Tagline */}
          {showCamera && (
            <div className="animate-fade-in-up">
              <p className="text-2xl sm:text-3xl font-bold text-accent mt-8">"Security is not an option."</p>
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
