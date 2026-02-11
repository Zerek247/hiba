'use client';

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GenerateButton from "./components/GenerateButton";
import ValentineReveal from "./components/ValentineReveal";
import Sparkles from "./components/Sparkles";
import HeartParticles from "./components/HeartParticles";
import ParticlesBackground from "./components/ParticlesBackground"
import FloatingFlowers from "./components/FloatingFlowers"


export default function App() {
  const [revealed, setRevealed] = useState(false);

  return (
    <main
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Background ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, #ff2d870a 0%, #00b4ff05 40%, transparent 70%)",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#ff2d8710 1px, transparent 1px), linear-gradient(90deg, #ff2d8710 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Heart particles background (always visible) */}
      <HeartParticles />

      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.div
            key="button-screen"
            exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
          >
            <GenerateButton onClick={() => setRevealed(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="reveal-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center w-full"
          >
            {/* Sparkles falling */}
            <Sparkles />
            <ValentineReveal />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
