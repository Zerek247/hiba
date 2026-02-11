import { motion } from "framer-motion"

const colors = [
  "text-pink-500",
  "text-cyan-400",
  "text-red-500"
]

export default function FloatingFlowers() {
  return (
    <>
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute text-2xl ${colors[i % 3]}`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 50
          }}
          animate={{
            y: -100
          }}
          transition={{
            duration: Math.random() * 6 + 6,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          🌸
        </motion.div>
      ))}
    </>
  )
}
