"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function CameraMovementDemo() {
  const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 0, rotation: 0 })
  const [isMoving, setIsMoving] = useState(false)
  const [activeMovement, setActiveMovement] = useState<string | null>(null)

  const moveCamera = (direction: string) => {
    setIsMoving(true)
    setActiveMovement(direction)

    setTimeout(() => {
      setIsMoving(false)
      setActiveMovement(null)
    }, 1000)

    switch (direction) {
      case "left":
        setCameraPosition((prev) => ({ ...prev, x: Math.max(prev.x - 20, -40) }))
        break
      case "right":
        setCameraPosition((prev) => ({ ...prev, x: Math.min(prev.x + 20, 40) }))
        break
      case "up":
        setCameraPosition((prev) => ({ ...prev, y: Math.max(prev.y - 15, -30) }))
        break
      case "down":
        setCameraPosition((prev) => ({ ...prev, y: Math.min(prev.y + 15, 30) }))
        break
      case "rotate-left":
        setCameraPosition((prev) => ({ ...prev, rotation: prev.rotation - 45 }))
        break
      case "rotate-right":
        setCameraPosition((prev) => ({ ...prev, rotation: prev.rotation + 45 }))
        break
      case "center":
        setCameraPosition({ x: 0, y: 0, rotation: 0 })
        break
    }
  }

  // Auto-demo movement
  useEffect(() => {
    const demo = setTimeout(() => {
      const movements = ["left", "right", "up", "down", "rotate-left", "rotate-right", "center"]
      let currentIndex = 0

      const interval = setInterval(() => {
        if (currentIndex < movements.length) {
          moveCamera(movements[currentIndex])
          currentIndex++
        } else {
          clearInterval(interval)
        }
      }, 2000)

      return () => clearInterval(interval)
    }, 3000)

    return () => clearTimeout(demo)
  }, [])

  return (
    <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-primary/20">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-foreground mb-2">Interactive Camera Movement</h3>
          <p className="text-muted-foreground">Experience 360° pan, tilt, and rotation capabilities</p>
        </div>

        {/* Camera Display Area */}
        <div className="relative bg-black rounded-lg p-8 mb-6 overflow-hidden" style={{ height: "300px" }}>
          {/* Movement indicators */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Grid lines */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-white"></div>
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white"></div>
            </div>

            {/* Movement arrows */}
            {activeMovement && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`text-primary text-4xl font-bold animate-pulse ${
                    activeMovement === "left"
                      ? "transform -translate-x-8"
                      : activeMovement === "right"
                        ? "transform translate-x-8"
                        : activeMovement === "up"
                          ? "transform -translate-y-8"
                          : activeMovement === "down"
                            ? "transform translate-y-8"
                            : activeMovement.includes("rotate")
                              ? "animate-spin"
                              : ""
                  }`}
                >
                  {activeMovement === "left"
                    ? "←"
                    : activeMovement === "right"
                      ? "→"
                      : activeMovement === "up"
                        ? "↑"
                        : activeMovement === "down"
                          ? "↓"
                          : activeMovement.includes("rotate")
                            ? "↻"
                            : "●"}
                </div>
              </div>
            )}
          </div>

          {/* Camera representation */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-in-out"
            style={{
              transform: `translate(-50%, -50%) translateX(${cameraPosition.x}px) translateY(${cameraPosition.y}px) rotate(${cameraPosition.rotation}deg)`,
            }}
          >
            {/* Camera body */}
            <div className="relative">
              <div className="w-16 h-12 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg shadow-lg border-2 border-gray-500">
                {/* Lens */}
                <div className="absolute top-1/2 left-2 transform -translate-y-1/2 w-6 h-6 bg-black rounded-full border-2 border-gray-600">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full opacity-80"></div>
                </div>
                {/* Status LED */}
                <div className="absolute top-1 right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>

              {/* Mount */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-600 rounded-full"></div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gray-700 rounded"></div>
            </div>

            {/* Field of view indicator */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 opacity-30">
              <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-16 border-b-yellow-400 transform rotate-90 origin-left"></div>
            </div>
          </div>

          {/* Corner position indicators */}
          <div className="absolute top-4 left-4 text-white text-xs opacity-50">Pan: {cameraPosition.x}°</div>
          <div className="absolute top-4 right-4 text-white text-xs opacity-50">Tilt: {cameraPosition.y}°</div>
          <div className="absolute bottom-4 left-4 text-white text-xs opacity-50">
            Rotation: {cameraPosition.rotation}°
          </div>
          <div className="absolute bottom-4 right-4 text-white text-xs opacity-50">
            {isMoving ? "Moving..." : "Ready"}
          </div>
        </div>

        {/* Control buttons */}
        <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
          <div></div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => moveCamera("up")}
            className="h-12 hover:bg-primary hover:text-primary-foreground"
          >
            ↑
          </Button>
          <div></div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => moveCamera("left")}
            className="h-12 hover:bg-primary hover:text-primary-foreground"
          >
            ←
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => moveCamera("center")}
            className="h-12 hover:bg-primary hover:text-primary-foreground text-xs"
          >
            CENTER
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => moveCamera("right")}
            className="h-12 hover:bg-primary hover:text-primary-foreground"
          >
            →
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => moveCamera("rotate-left")}
            className="h-12 hover:bg-primary hover:text-primary-foreground text-xs"
          >
            ↺
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => moveCamera("down")}
            className="h-12 hover:bg-primary hover:text-primary-foreground"
          >
            ↓
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => moveCamera("rotate-right")}
            className="h-12 hover:bg-primary hover:text-primary-foreground text-xs"
          >
            ↻
          </Button>
        </div>

        <div className="text-center mt-4 text-sm text-muted-foreground">
          Click controls to move camera or watch the auto-demo
        </div>
      </CardContent>
    </Card>
  )
}
