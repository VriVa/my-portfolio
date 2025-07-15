"use client"

import { motion } from "framer-motion"

export default function EnhancedFloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Original floating circles with enhanced animations */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-pink-200/40 to-rose-200/40 rounded-full blur-sm"
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
          rotate: [360, 180, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-rose-200/40 to-pink-200/40 rounded-full blur-sm"
      />

      {/* New floating elements */}
      <motion.div
        animate={{
          y: [0, -50, 0],
          x: [0, 25, 0],
          rotate: [0, -360],
        }}
        transition={{
          duration: 35,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-60 left-1/3 w-28 h-28 bg-gradient-to-br from-pink-100/30 to-rose-100/30 rounded-full blur-lg"
      />

      <motion.div
        animate={{
          y: [0, 35, 0],
          x: [0, -30, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-60 right-1/4 w-22 h-22 bg-gradient-to-br from-rose-300/30 to-pink-300/30 rounded-full blur-md"
      />

      {/* Floating hearts with different animations */}
      <motion.div
        animate={{
          y: [0, -150, -300],
          opacity: [0, 1, 0],
          scale: [0.5, 1, 0.5],
          rotate: [0, 360],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeOut",
        }}
        className="absolute bottom-0 left-1/2 text-pink-300/60 text-3xl"
      >
        💖
      </motion.div>

      <motion.div
        animate={{
          y: [0, -180, -360],
          opacity: [0, 1, 0],
          x: [0, 50, 100],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeOut",
          delay: 3,
        }}
        className="absolute bottom-0 left-1/4 text-rose-300/60 text-2xl"
      >
        ✨
      </motion.div>

      <motion.div
        animate={{
          y: [0, -120, -240],
          opacity: [0, 1, 0],
          x: [0, -30, -60],
          rotate: [0, -180],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeOut",
          delay: 6,
        }}
        className="absolute bottom-0 right-1/4 text-pink-300/60 text-xl"
      >
        🌸
      </motion.div>

      <motion.div
        animate={{
          y: [0, -200, -400],
          opacity: [0, 1, 0],
          scale: [0.3, 1.2, 0.3],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeOut",
          delay: 9,
        }}
        className="absolute bottom-0 right-1/3 text-rose-400/50 text-lg"
      >
        🦋
      </motion.div>

      {/* Geometric floating shapes */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 22,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-1/5 w-8 h-8 border-2 border-pink-300/40 rotate-45"
      />

      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 0.7, 1],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 28,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/3 left-1/6 w-6 h-6 bg-gradient-to-br from-rose-400/30 to-pink-400/30 rounded-full"
      />

      {/* Star trails */}
      <motion.div
        animate={{
          y: [100, -100],
          opacity: [0, 1, 0],
          scale: [0, 1, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/2 left-1/8 text-yellow-300/60 text-sm"
      >
        ⭐
      </motion.div>

      <motion.div
        animate={{
          y: [100, -100],
          opacity: [0, 1, 0],
          scale: [0, 1, 0],
          x: [0, 20, 40],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute top-2/3 right-1/8 text-yellow-300/60 text-sm"
      >
        ⭐
      </motion.div>
    </div>
  )
}
