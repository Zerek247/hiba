'use client';

import { useEffect, useState } from "react";

interface Sparkle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
  type: "heart" | "star" | "dot";
}

const COLORS = ["#ff2d87", "#00b4ff", "#ff0040", "#ff69b4"];

export default function Sparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const items: Sparkle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      size: 6 + Math.random() * 14,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      type: (["heart", "star", "dot"] as const)[
        Math.floor(Math.random() * 3)
      ],
    }));
    setSparkles(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="absolute animate-sparkle-fall"
          style={{
            left: `${s.left}%`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            fontSize: `${s.size}px`,
            color: s.color,
            filter: `drop-shadow(0 0 4px ${s.color})`,
          }}
        >
          {s.type === "heart" ? "\u2665" : s.type === "star" ? "\u2726" : "\u2022"}
        </span>
      ))}
    </div>
  );
}
