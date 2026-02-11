"use client"

import { useState } from "react"
import Image from "next/image"
import { FloralFrame } from "@/components/neon-flowers"
import { FallingPetals } from "@/components/falling-petals"
import { Sparkles } from "@/components/sparkles"
import { Heart } from "lucide-react"

export function ValentineReveal() {
  const [revealed, setRevealed] = useState(false)
  const [animStage, setAnimStage] = useState(0)

  const handleGenerate = () => {
    setRevealed(true)
    setAnimStage(1)
    setTimeout(() => setAnimStage(2), 600)
    setTimeout(() => setAnimStage(3), 1200)
    setTimeout(() => setAnimStage(4), 1800)
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: revealed
            ? "radial-gradient(ellipse at center, rgba(255,45,138,0.08) 0%, rgba(0,162,255,0.04) 40%, transparent 70%)"
            : "none",
          transition: "background 1.5s ease-in-out",
        }}
      />

      <FallingPetals active={revealed} />
      <Sparkles active={animStage >= 2} />
      <FloralFrame visible={animStage >= 3} />

      {/* Generate Button */}
      <div
        className="absolute z-30 flex flex-col items-center gap-4 transition-all duration-700"
        style={{
          opacity: revealed ? 0 : 1,
          transform: revealed ? "scale(0.8)" : "scale(1)",
          pointerEvents: revealed ? "none" : "auto",
        }}
      >
        <div className="mb-4 flex items-center gap-3">
          <Heart
            className="animate-heartbeat"
            size={28}
            fill="#ff2d8a"
            color="#ff2d8a"
            style={{ filter: "drop-shadow(0 0 8px #ff2d8a)" }}
          />
          <Heart
            className="animate-heartbeat"
            size={20}
            fill="#00a2ff"
            color="#00a2ff"
            style={{ filter: "drop-shadow(0 0 8px #00a2ff)", animationDelay: "0.3s" }}
          />
          <Heart
            className="animate-heartbeat"
            size={24}
            fill="#ff1744"
            color="#ff1744"
            style={{ filter: "drop-shadow(0 0 8px #ff1744)", animationDelay: "0.6s" }}
          />
        </div>

        <button
          type="button"
          onClick={handleGenerate}
          className="group relative cursor-pointer rounded-full border-2 border-[#ff2d8a] px-10 py-4 text-lg font-semibold tracking-wider text-[#ff2d8a] transition-all duration-300 hover:scale-105 hover:bg-[#ff2d8a]/10 active:scale-95"
          style={{
            boxShadow: "0 0 15px rgba(255,45,138,0.3), 0 0 30px rgba(255,45,138,0.15), inset 0 0 15px rgba(255,45,138,0.05)",
          }}
        >
          <span className="relative z-10 flex items-center gap-2">
            <Heart size={18} fill="currentColor" />
            Generar
          </span>
          <div
            className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: "radial-gradient(circle, rgba(255,45,138,0.15) 0%, transparent 70%)",
            }}
          />
        </button>

        <p className="mt-2 text-sm text-[#ff6b9d]/50">
          Toca para revelar tu sorpresa
        </p>
      </div>

      {/* Revealed Content */}
      <div
        className="relative z-20 flex flex-col items-center gap-6 px-4"
        style={{
          opacity: revealed ? 1 : 0,
          pointerEvents: revealed ? "auto" : "none",
        }}
      >
        {/* Title: Happy Valentine's Day */}
        <h1
          className="text-balance text-center text-4xl font-bold tracking-wide text-[#ff2d8a] sm:text-5xl md:text-6xl"
          style={{
            fontFamily: "var(--font-great-vibes), cursive",
            opacity: animStage >= 1 ? 1 : 0,
            transform: animStage >= 1 ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
            textShadow: "0 0 10px #ff2d8a, 0 0 20px #ff2d8a, 0 0 40px #ff2d8a, 0 0 60px rgba(255,45,138,0.4)",
          }}
        >
          Happy Valentine&apos;s Day
        </h1>

        {/* Arabic text */}
        <p
          className="text-center text-2xl font-semibold text-[#00a2ff] sm:text-3xl"
          dir="rtl"
          style={{
            opacity: animStage >= 2 ? 1 : 0,
            transform: animStage >= 2 ? "translateY(0) scale(1)" : "translateY(20px) scale(0.9)",
            transition: "opacity 0.8s ease-out 0.1s, transform 0.8s ease-out 0.1s",
            textShadow: "0 0 10px #00a2ff, 0 0 20px #00a2ff, 0 0 40px rgba(0,162,255,0.4)",
          }}
        >
          {"\u0623\u0646\u062A\u0650 \u0631\u0627\u0626\u0639\u0629"}
        </p>

        {/* Image Container */}
        <div
          className="relative"
          style={{
            opacity: animStage >= 3 ? 1 : 0,
            transform: animStage >= 3 ? "translateY(0) scale(1)" : "translateY(40px) scale(0.8)",
            transition: "opacity 1s ease-out, transform 1s ease-out",
          }}
        >
          {/* Glow ring behind image */}
          <div
            className="absolute -inset-4 rounded-full"
            style={{
              background: "conic-gradient(from 0deg, #ff2d8a, #00a2ff, #ff1744, #ff6b9d, #ff2d8a)",
              opacity: animStage >= 4 ? 0.6 : 0,
              filter: "blur(20px)",
              transition: "opacity 1.5s ease-out",
            }}
          />

          {/* Image frame */}
          <div
            className="relative overflow-hidden rounded-3xl border-2 border-[#ff2d8a]/40 p-1"
            style={{
              boxShadow: animStage >= 4
                ? "0 0 20px rgba(255,45,138,0.4), 0 0 40px rgba(0,162,255,0.2), 0 0 60px rgba(255,23,68,0.15)"
                : "none",
              transition: "box-shadow 1s ease-out",
            }}
          >
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/image.png"
                alt="Valentine's Day surprise"
                width={320}
                height={400}
                className="h-auto w-[260px] sm:w-[300px] md:w-[320px]"
                priority
              />
            </div>
          </div>

          {/* Decorative hearts around image */}
          {animStage >= 4 && (
            <>
              <Heart
                className="animate-float absolute -left-8 -top-4"
                size={22}
                fill="#ff2d8a"
                color="#ff2d8a"
                style={{ filter: "drop-shadow(0 0 6px #ff2d8a)", animationDelay: "0s" }}
              />
              <Heart
                className="animate-float-reverse absolute -right-6 top-8"
                size={18}
                fill="#00a2ff"
                color="#00a2ff"
                style={{ filter: "drop-shadow(0 0 6px #00a2ff)", animationDelay: "0.4s" }}
              />
              <Heart
                className="animate-float absolute -bottom-4 -left-6"
                size={20}
                fill="#ff1744"
                color="#ff1744"
                style={{ filter: "drop-shadow(0 0 6px #ff1744)", animationDelay: "0.8s" }}
              />
              <Heart
                className="animate-float-reverse absolute -bottom-2 -right-8"
                size={24}
                fill="#ff6b9d"
                color="#ff6b9d"
                style={{ filter: "drop-shadow(0 0 6px #ff6b9d)", animationDelay: "1.2s" }}
              />
              <Heart
                className="animate-float absolute -right-4 top-1/2"
                size={16}
                fill="#ff2d8a"
                color="#ff2d8a"
                style={{ filter: "drop-shadow(0 0 6px #ff2d8a)", animationDelay: "0.6s" }}
              />
              <Heart
                className="animate-float-reverse absolute -left-10 top-1/3"
                size={20}
                fill="#00a2ff"
                color="#00a2ff"
                style={{ filter: "drop-shadow(0 0 6px #00a2ff)", animationDelay: "1s" }}
              />
            </>
          )}
        </div>

        {/* Bottom decorative line */}
        <div
          className="mt-2 flex items-center gap-3"
          style={{
            opacity: animStage >= 4 ? 1 : 0,
            transition: "opacity 1s ease-out 0.5s",
          }}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#ff2d8a]/60" />
          <Heart
            size={14}
            fill="#ff2d8a"
            color="#ff2d8a"
            className="animate-heartbeat"
            style={{ filter: "drop-shadow(0 0 4px #ff2d8a)" }}
          />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#ff2d8a]/60" />
        </div>
      </div>
    </main>
  )
}
