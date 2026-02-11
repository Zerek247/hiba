'use client';

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GenerateButton from "./components/GenerateButton";
import ValentineReveal from "./components/ValentineReveal";
import Sparkles from "./components/Sparkles";
import HeartParticles from "./components/HeartParticles";
import ParticlesBackground from "./components/ParticlesBackground";
import FloatingFlowers from "./components/FloatingFlowers";
import { useIsMobile } from "../hooks/useIsMobile";

export default function App() {
  const [revealed, setRevealed] = useState(false);
  const isMobile = useIsMobile();

  return (
    <main
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, #ff2d870a 0%, #00b4ff05 40%, transparent 70%)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#ff2d8710 1px, transparent 1px), linear-gradient(90deg, #ff2d8710 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ⭐ SOLO PC — partículas pesadas */}
      {!isMobile && <ParticlesBackground />}

      {/* ⭐ Corazones optimizados */}
      <HeartParticles count={isMobile ? 8 : 20} />

      {/* ⭐ Flores optimizadas */}
      <FloatingFlowers count={isMobile ? 4 : 10} />

      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.div
            key="button-screen"
            exit={{
              opacity: 0,
              scale: 0.8,
              filter: isMobile ? "none" : "blur(10px)"
            }}
            transition={{ duration: isMobile ? 0.3 : 0.5 }}
          >
            <GenerateButton onClick={() => setRevealed(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="reveal-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: isMobile ? 0 : 0.3 }}
            className="flex items-center justify-center w-full"
          >
            <Sparkles count={isMobile ? 10 : 30} />
            <ValentineReveal />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
