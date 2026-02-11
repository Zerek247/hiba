"use client"

import { useEffect, useState } from "react"

interface Sparkle {
  id: number
  left: number
  top: number
  size: number
  color: string
  delay: number
  duration: number
}

const sparkleColors = ["#ff2d8a", "#00a2ff", "#ff1744", "#ff6b9d", "#ffffff"]

export function Sparkles({ active }: { active: boolean }) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    if (!active) {
      setSparkles([])
      return
    }

    const generated: Sparkle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 6 + 3,
      color: sparkleColors[Math.floor(Math.random() * sparkleColors.length)],
      delay: Math.random() * 4,
      duration: Math.random() * 2 + 1.5,
    }))
    setSparkles(generated)
  }, [active])

  if (!active) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="animate-sparkle absolute"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            backgroundColor: s.color,
            borderRadius: "50%",
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            boxShadow: `0 0 ${s.size * 2}px ${s.color}`,
          }}
        />
      ))}
    </div>
  )
}
