"use client"

import { motion } from "framer-motion"

export default function FloatingAnimations() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {/* Floating Hearts - More visible and frequent */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          animate={{
            y: [0, -200, -400],
            opacity: [0, 0.8, 0],
            x: [0, Math.random() * 100 - 50, 0], // Random horizontal movement
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 10 + Math.random() * 5, // Vary duration
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
            delay: i * 2, // Staggered delay
          }}
          className={`absolute bottom-0 text-pink-400/80 text-${2 + Math.floor(Math.random() * 3)}xl`} // Larger and more opaque
          style={{ left: `${10 + i * 15}%` }} // Spread them out
        >
          💖
        </motion.div>
      ))}

      {/* Floating Sparkles - More visible and frequent */}
      {[...Array(7)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          animate={{
            y: [0, -180, -360],
            opacity: [0, 0.7, 0],
            x: [0, Math.random() * 80 - 40, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
            delay: i * 1.5,
          }}
          className={`absolute bottom-0 text-pink-300/70 text-${1 + Math.floor(Math.random() * 2)}xl`}
          style={{ left: `${5 + i * 12}%` }}
        >
          ✨
        </motion.div>
      ))}

      {/* Floating Cherry Blossoms (🌸) - More visible and frequent */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`blossom-${i}`}
          animate={{
            y: [0, -250, -500],
            opacity: [0, 0.6, 0],
            x: [0, Math.random() * 120 - 60, 0],
            rotate: [0, 720],
          }}
          transition={{
            duration: 12 + Math.random() * 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
            delay: i * 2.5,
          }}
          className={`absolute bottom-0 text-pink-500/60 text-${1 + Math.floor(Math.random() * 2)}xl`}
          style={{ left: `${15 + i * 10}%` }}
        >
          🌸
        </motion.div>
      ))}

      {/* Floating Bubbles - More visible and frequent */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`bubble-${i}`}
          animate={{
            y: [0, -350],
            opacity: [0, 0.5, 0],
            scale: [0.5, 1.5, 0.5],
            x: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
            delay: i * 1.8,
          }}
          className={`absolute bottom-0 w-${3 + Math.floor(Math.random() * 3)} h-${
            3 + Math.floor(Math.random() * 3)
          } bg-pink-200/50 rounded-full`}
          style={{ left: `${5 + i * 10}%` }}
        />
      ))}

      {/* Gentle Floating Shapes (Circles & Squares) - More visible */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`shape-circle-${i}`}
          animate={{
            y: [20, -20, 20],
            x: [0, Math.random() * 30 - 15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20 + Math.random() * 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 4,
          }}
          className={`absolute top-${20 + i * 10}% left-${10 + i * 15}% w-${6 + Math.floor(Math.random() * 4)} h-${
            6 + Math.floor(Math.random() * 4)
          } border border-pink-300/50 rounded-full`}
        />
      ))}

      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`shape-square-${i}`}
          animate={{
            y: [-10, 30, -10],
            x: [0, Math.random() * 40 - 20, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25 + Math.random() * 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 5,
          }}
          className={`absolute top-${30 + i * 15}% right-${10 + i * 15}% w-${5 + Math.floor(Math.random() * 3)} h-${
            5 + Math.floor(Math.random() * 3)
          } bg-rose-200/40 rotate-45`}
        />
      ))}

      {/* Subtle Paper Pieces - More visible */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`paper-${i}`}
          animate={{
            y: [0, -200, -400],
            opacity: [0, 0.5, 0],
            rotate: [0, Math.random() * 90 - 45, Math.random() * 180 - 90],
            x: [0, Math.random() * 80 - 40, 0],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
            delay: i * 4,
          }}
          className={`absolute bottom-0 w-${6 + Math.floor(Math.random() * 4)} h-${
            8 + Math.floor(Math.random() * 6)
          } bg-pink-100/50 rounded-sm`}
          style={{ left: `${20 + i * 15}%` }}
        />
      ))}
    </div>
  )
}
