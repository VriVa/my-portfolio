"use client"

import { motion } from "framer-motion"

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Just a few subtle floating hearts */}
      <motion.div
        animate={{
          y: [0, -100, -200],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeOut",
        }}
        className="absolute bottom-0 left-1/2 text-pink-300/30 text-xl"
      >
        💖
      </motion.div>

      <motion.div
        animate={{
          y: [0, -120, -240],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeOut",
          delay: 4,
        }}
        className="absolute bottom-0 right-1/3 text-pink-300/30 text-lg"
      >
        ✨
      </motion.div>
    </div>
  )
}
