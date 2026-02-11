'use client';

import { motion } from "framer-motion";

interface FlowerProps {
  color: string;
  glowColor: string;
  size: number;
  x: number;
  y: number;
  delay: number;
  rotation?: number;
}

function Flower({ color, glowColor, size, x, y, delay, rotation = 0 }: FlowerProps) {
  const petalCount = 6;
  const petals = Array.from({ length: petalCount }, (_, i) => i);

  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      initial={{ scale: 0, opacity: 0, rotate: rotation - 45 }}
      animate={{ scale: 1, opacity: 1, rotate: rotation }}
      transition={{ delay, duration: 0.9, ease: "easeOut", type: "spring", stiffness: 100 }}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        animate={{ rotate: [0, 3, -3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      >
        {petals.map((i) => (
          <motion.ellipse
            key={i}
            cx="50"
            cy="50"
            rx="14"
            ry="30"
            fill={color}
            fillOpacity={0.6}
            stroke={glowColor}
            strokeWidth="1"
            style={{
              filter: `drop-shadow(0 0 6px ${glowColor})`,
            }}
            transform={`rotate(${(360 / petalCount) * i} 50 50) translate(0 -16)`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: delay + i * 0.08, duration: 0.5 }}
          />
        ))}
        <motion.circle
          cx="50"
          cy="50"
          r="8"
          fill={glowColor}
          style={{ filter: `drop-shadow(0 0 8px ${glowColor})` }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: delay + 0.5, duration: 0.4 }}
        />
      </motion.svg>
    </motion.div>
  );
}

interface SmallBudProps {
  x: number;
  y: number;
  color: string;
  delay: number;
  size?: number;
}

function SmallBud({ x, y, color, delay, size = 24 }: SmallBudProps) {
  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.8 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 50 50"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <ellipse
            key={i}
            cx="25"
            cy="25"
            rx="7"
            ry="14"
            fill={color}
            fillOpacity={0.5}
            stroke={color}
            strokeWidth="0.5"
            style={{ filter: `drop-shadow(0 0 3px ${color})` }}
            transform={`rotate(${angle} 25 25) translate(0 -8)`}
          />
        ))}
        <circle cx="25" cy="25" r="4" fill={color} style={{ filter: `drop-shadow(0 0 5px ${color})` }} />
      </motion.svg>
    </motion.div>
  );
}

export default function NeonFlowers() {
  const flowers: FlowerProps[] = [
    { color: "#ff2d87", glowColor: "#ff69b4", size: 80, x: -50, y: -30, delay: 0.3, rotation: 15 },
    { color: "#00b4ff", glowColor: "#66d4ff", size: 65, x: 260, y: -20, delay: 0.5, rotation: -10 },
    { color: "#ff0040", glowColor: "#ff6680", size: 70, x: -40, y: 350, delay: 0.7, rotation: 25 },
    { color: "#ff2d87", glowColor: "#ff69b4", size: 60, x: 270, y: 340, delay: 0.9, rotation: -20 },
    { color: "#00b4ff", glowColor: "#66d4ff", size: 55, x: -55, y: 160, delay: 0.4, rotation: 30 },
    { color: "#ff0040", glowColor: "#ff6680", size: 50, x: 280, y: 170, delay: 0.6, rotation: -15 },
  ];

  const buds: SmallBudProps[] = [
    { x: 10, y: 60, color: "#ff2d87", delay: 1.0 },
    { x: 250, y: 80, color: "#00b4ff", delay: 1.1 },
    { x: -20, y: 250, color: "#ff0040", delay: 1.2 },
    { x: 270, y: 260, color: "#ff69b4", delay: 1.3 },
    { x: 30, y: 380, color: "#00b4ff", delay: 1.4 },
    { x: 240, y: 400, color: "#ff2d87", delay: 1.5 },
    { x: -10, y: 100, color: "#ff0040", delay: 1.1, size: 18 },
    { x: 285, y: 120, color: "#ff69b4", delay: 1.2, size: 18 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {flowers.map((f, i) => (
        <Flower key={`flower-${i}`} {...f} />
      ))}
      {buds.map((b, i) => (
        <SmallBud key={`bud-${i}`} {...b} />
      ))}
    </div>
  );
}
