"use client"

import { useEffect, useState } from "react"

interface Petal {
  id: number
  left: number
  size: number
  color: string
  duration: number
  delay: number
  opacity: number
}

const petalColors = ["#ff2d8a", "#ff1744", "#ff6b9d", "#00a2ff", "#ff2d8a"]

export function FallingPetals({ active }: { active: boolean }) {
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    if (!active) {
      setPetals([])
      return
    }

    const generated: Petal[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 10 + 6,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
      duration: Math.random() * 6 + 6,
      delay: Math.random() * 8,
      opacity: Math.random() * 0.5 + 0.3,
    }))
    setPetals(generated)
  }, [active])

  if (!active) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="animate-fall-petal absolute"
          style={{
            left: `${petal.left}%`,
            width: petal.size,
            height: petal.size,
            backgroundColor: petal.color,
            borderRadius: "50% 0 50% 50%",
            opacity: petal.opacity,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            filter: `drop-shadow(0 0 4px ${petal.color})`,
            transform: "rotate(45deg)",
          }}
        />
      ))}
    </div>
  )
}
