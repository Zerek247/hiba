'use client';

import { motion } from "framer-motion";
import NeonFlowers from "./NeonFlowers";


const IMAGE_URL =
  "images/hiba.webp";

export default function ValentineReveal() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-6 relative z-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Title */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-center"
        style={{ fontFamily: "'Dancing Script', cursive", color: "#ff2d87" }}
        initial={{ opacity: 0, y: -40, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.9, type: "spring", stiffness: 80 }}
      >
        <span className="neon-pink block">{"Happy Valentine's Day"}</span>
        <span className="neon-red block">{"Hiba"}</span>
      </motion.h1>

      {/* Arabic subtitle */}
      <motion.p
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center"
        style={{ fontFamily: "'Noto Sans Arabic', sans-serif", color: "#00b4ff" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
      >
        <span className="neon-blue">{"\u0623\u0646\u062A\u0650 \u0631\u0627\u0626\u0639\u0629"}</span>
      </motion.p>

      {/* Image container with flowers */}
      <motion.div
        className="relative mt-2"
        initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 1.0, duration: 1, type: "spring", stiffness: 60, damping: 12 }}
      >
        {/* Glow behind image */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: "radial-gradient(circle, #ff2d8733 0%, #00b4ff22 50%, transparent 70%)",
            filter: "blur(30px)",
            transform: "scale(1.3)",
          }}
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Neon border frame */}
        <motion.div
          className="relative rounded-2xl p-1"
          style={{
            background: "linear-gradient(135deg, #ff2d87, #00b4ff, #ff0040, #ff2d87)",
            backgroundSize: "300% 300%",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="rounded-xl overflow-hidden bg-valentine-black">
            <motion.img
              src={IMAGE_URL}
              alt="Valentine's Day"
              className="w-56 sm:w-64 md:w-72 h-auto rounded-xl relative z-10"
              initial={{ filter: "brightness(0)" }}
              animate={{ filter: "brightness(1)" }}
              transition={{ delay: 1.3, duration: 1.2 }}
            />
          </div>
        </motion.div>

        {/* Floating flowers around the image */}
        <NeonFlowers />
      </motion.div>

      {/* Bottom decorative hearts */}
      <motion.div
        className="flex items-center gap-3 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.8 }}
      >
        {[
          { color: "#ff2d87", delay: 0 },
          { color: "#00b4ff", delay: 0.2 },
          { color: "#ff0040", delay: 0.4 },
          { color: "#00b4ff", delay: 0.6 },
          { color: "#ff2d87", delay: 0.8 },
        ].map((h, i) => (
          <motion.span
            key={i}
            className="text-lg"
            style={{ color: h.color, filter: `drop-shadow(0 0 6px ${h.color})` }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: 2.0 + h.delay,
              ease: "easeInOut",
            }}
          >
            {"\u2665"}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
