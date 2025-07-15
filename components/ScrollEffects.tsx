"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function ScrollEffects() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8])

  return (
    <div ref={ref} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Parallax floating elements */}
      <motion.div
        style={{ y: y1, rotate, scale }}
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-pink-200/20 to-rose-200/20 rounded-full blur-xl"
      />

      <motion.div
        style={{ y: y2, rotate: rotate }}
        className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-rose-300/20 to-pink-300/20 rounded-full blur-lg"
      />

      {/* Floating shapes */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/2 left-1/6 text-4xl opacity-30"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        🌸
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/3 right-1/6 text-3xl opacity-40"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -360],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        💖
      </motion.div>

      <motion.div
        style={{ y: y1, scale }}
        className="absolute bottom-1/4 left-1/3 text-2xl opacity-30"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        ✨
      </motion.div>

      {/* Geometric shapes */}
      <motion.div
        style={{ y: y2, rotate }}
        className="absolute top-1/6 right-1/3 w-16 h-16 border-2 border-pink-300/30 rotate-45"
      />

      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-1/3 right-1/5 w-12 h-12 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
