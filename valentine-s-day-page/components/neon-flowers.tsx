"use client"

import React from "react"

interface FlowerProps {
  color: string
  glowColor: string
  size: number
  style?: React.CSSProperties
  className?: string
}

function NeonFlower({ color, glowColor, size, style, className }: FlowerProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={{
        filter: `drop-shadow(0 0 6px ${glowColor}) drop-shadow(0 0 12px ${glowColor})`,
        ...style,
      }}
    >
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <ellipse
          key={angle}
          cx="50"
          cy="30"
          rx="14"
          ry="22"
          fill={color}
          fillOpacity={0.85}
          transform={`rotate(${angle} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="10" fill="#fff" fillOpacity={0.9} />
      <circle cx="50" cy="50" r="6" fill={color} fillOpacity={0.6} />
    </svg>
  )
}

function NeonRose({ color, glowColor, size, style, className }: FlowerProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={{
        filter: `drop-shadow(0 0 8px ${glowColor}) drop-shadow(0 0 16px ${glowColor})`,
        ...style,
      }}
    >
      <path
        d="M50 20 C55 30, 70 35, 75 45 C80 55, 70 70, 50 75 C30 70, 20 55, 25 45 C30 35, 45 30, 50 20Z"
        fill={color}
        fillOpacity={0.7}
      />
      <path
        d="M50 28 C53 35, 63 38, 66 45 C69 52, 63 62, 50 65 C37 62, 31 52, 34 45 C37 38, 47 35, 50 28Z"
        fill={color}
        fillOpacity={0.85}
      />
      <path
        d="M50 36 C52 40, 58 42, 60 46 C62 50, 58 56, 50 58 C42 56, 38 50, 40 46 C42 42, 48 40, 50 36Z"
        fill={color}
        fillOpacity={1}
      />
      <ellipse cx="50" cy="47" rx="4" ry="5" fill="#fff" fillOpacity={0.4} />
    </svg>
  )
}

function NeonHeart({ color, glowColor, size, style, className }: FlowerProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={{
        filter: `drop-shadow(0 0 8px ${glowColor}) drop-shadow(0 0 14px ${glowColor})`,
        ...style,
      }}
    >
      <path
        d="M50 85 L20 55 C5 40, 5 20, 25 15 C35 12, 45 20, 50 30 C55 20, 65 12, 75 15 C95 20, 95 40, 80 55 Z"
        fill={color}
        fillOpacity={0.8}
      />
    </svg>
  )
}

const flowerConfigs = [
  { type: "flower", color: "#ff2d8a", glow: "#ff2d8a", size: 55, top: "5%", left: "3%", delay: "0s", anim: "animate-float" },
  { type: "rose", color: "#ff1744", glow: "#ff1744", size: 50, top: "12%", right: "5%", delay: "0.5s", anim: "animate-float-reverse" },
  { type: "heart", color: "#ff6b9d", glow: "#ff6b9d", size: 35, top: "25%", left: "6%", delay: "1s", anim: "animate-float" },
  { type: "flower", color: "#00a2ff", glow: "#00a2ff", size: 45, top: "35%", right: "3%", delay: "0.8s", anim: "animate-float-reverse" },
  { type: "rose", color: "#ff2d8a", glow: "#ff2d8a", size: 48, bottom: "25%", left: "4%", delay: "0.3s", anim: "animate-float" },
  { type: "heart", color: "#ff1744", glow: "#ff1744", size: 30, bottom: "35%", right: "6%", delay: "1.2s", anim: "animate-float-reverse" },
  { type: "flower", color: "#ff6b9d", glow: "#ff6b9d", size: 40, bottom: "12%", left: "8%", delay: "0.6s", anim: "animate-float" },
  { type: "rose", color: "#00a2ff", glow: "#00a2ff", size: 42, bottom: "8%", right: "8%", delay: "1s", anim: "animate-float-reverse" },
  { type: "heart", color: "#ff2d8a", glow: "#ff2d8a", size: 28, top: "50%", left: "2%", delay: "0.4s", anim: "animate-float" },
  { type: "flower", color: "#ff1744", glow: "#ff1744", size: 38, top: "60%", right: "2%", delay: "0.9s", anim: "animate-float-reverse" },
  { type: "rose", color: "#ff6b9d", glow: "#ff6b9d", size: 44, top: "8%", left: "40%", delay: "0.7s", anim: "animate-float" },
  { type: "heart", color: "#00a2ff", glow: "#00a2ff", size: 32, bottom: "5%", left: "35%", delay: "1.1s", anim: "animate-float-reverse" },
]

export function FloralFrame({ visible }: { visible: boolean }) {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-1000"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {flowerConfigs.map((config, i) => {
        const posStyle: React.CSSProperties = {
          position: "absolute",
          top: config.top,
          left: config.left,
          right: config.right,
          bottom: config.bottom,
          animationDelay: config.delay,
        }

        const Component =
          config.type === "flower"
            ? NeonFlower
            : config.type === "rose"
              ? NeonRose
              : NeonHeart

        return (
          <Component
            key={i}
            color={config.color}
            glowColor={config.glow}
            size={config.size}
            style={posStyle}
            className={config.anim}
          />
        )
      })}
    </div>
  )
}
