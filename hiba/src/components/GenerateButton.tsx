'use client';

import { motion } from "framer-motion";

interface GenerateButtonProps {
  onClick: () => void;
}

export default function GenerateButton({ onClick }: GenerateButtonProps) {
  return (
    <motion.div
      className="flex flex-col items-center gap-8 z-20 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* Subtle hint text */}
      <motion.p
        className="text-sm tracking-widest uppercase"
        style={{ color: "#ff2d8799" }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {"Something special awaits"}
      </motion.p>

      {/* Main button */}
      <motion.button
        onClick={onClick}
        className="relative px-12 py-4 rounded-full font-semibold text-lg tracking-wide cursor-pointer border-0 outline-none"
        style={{
          background: "linear-gradient(135deg, #ff2d87, #ff0040)",
          color: "#ffffff",
          fontFamily: "'Inter', sans-serif",
        }}
        whileHover={{
          scale: 1.08,
          boxShadow: "0 0 20px #ff2d87, 0 0 40px #ff2d8766, 0 0 60px #ff2d8733",
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 0 10px #ff2d8744, 0 0 20px #ff2d8722",
            "0 0 20px #ff2d8788, 0 0 40px #ff2d8744, 0 0 60px #ff2d8722",
            "0 0 10px #ff2d8744, 0 0 20px #ff2d8722",
          ],
        }}
        transition={{
          boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        {/* Animated border glow */}
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{
            background: "linear-gradient(135deg, #ff2d87, #00b4ff, #ff0040, #ff2d87)",
            backgroundSize: "300% 300%",
            padding: "2px",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        {"Generar"}
      </motion.button>

      {/* Decorative hearts below */}
      <motion.div
        className="flex items-center gap-4"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <span style={{ color: "#ff2d87", filter: "drop-shadow(0 0 4px #ff2d87)", fontSize: 12 }}>{"\u2665"}</span>
        <span style={{ color: "#00b4ff", filter: "drop-shadow(0 0 4px #00b4ff)", fontSize: 8 }}>{"\u2665"}</span>
        <span style={{ color: "#ff0040", filter: "drop-shadow(0 0 4px #ff0040)", fontSize: 14 }}>{"\u2665"}</span>
        <span style={{ color: "#00b4ff", filter: "drop-shadow(0 0 4px #00b4ff)", fontSize: 8 }}>{"\u2665"}</span>
        <span style={{ color: "#ff2d87", filter: "drop-shadow(0 0 4px #ff2d87)", fontSize: 12 }}>{"\u2665"}</span>
      </motion.div>
    </motion.div>
  );
}
