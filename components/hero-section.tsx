"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

// Simple SVG arrow icon
const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
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
      }
    }, typingSpeed)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(251,191,36,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(34,197,94,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(251,191,36,0.05)_49%,rgba(251,191,36,0.05)_51%,transparent_52%)] bg-[length:30px_30px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white">
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-green-400 bg-clip-text text-transparent">
                {displayText}
              </span>
              {!textComplete && <span className="animate-pulse text-yellow-400">|</span>}
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up">
              Professional security camera installation, sales, and maintenance services in Addis Ababa
            </p>

            <div className="animate-fade-in-up space-y-6" style={{ animationDelay: "0.5s" }}>
              <Button
                size="lg"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gradient-to-r from-yellow-500 to-green-500 hover:from-yellow-600 hover:to-green-600 text-white px-8 py-4 text-lg font-semibold group hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 border-0"
              >
                Get Protected Now
                <ArrowRightIcon />
              </Button>

              <p className="text-2xl sm:text-3xl font-bold text-yellow-400">"Security is not an option."</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
