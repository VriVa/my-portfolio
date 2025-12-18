"use client"

import { motion } from "framer-motion"

export default function CurtainBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Base background - solid color */}
        <div className="absolute inset-0 bg-pink-100" />

        {/* Large bold color blocks - Layer 1 */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                90deg,
                rgba(255, 182, 193, 0.4) 0%,
                rgba(255, 182, 193, 0.4) 30%,
                transparent 30%,
                transparent 60%,
                rgba(255, 192, 203, 0.3) 60%,
                rgba(255, 192, 203, 0.3) 100%
              )
            `,
            animation: "blockSlide1 25s linear infinite alternate",
          }}
        />

        {/* Large bold color blocks - Layer 2 */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                90deg,
                transparent 0%,
                transparent 25%,
                rgba(255, 105, 180, 0.25) 25%,
                rgba(255, 105, 180, 0.25) 55%,
                transparent 55%,
                transparent 80%,
                rgba(244, 63, 94, 0.2) 80%,
                rgba(244, 63, 94, 0.2) 100%
              )
            `,
            animation: "blockSlide2 30s linear infinite alternate-reverse",
          }}
        />

        {/* Vertical color blocks */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                180deg,
                rgba(255, 192, 203, 0.3) 0%,
                rgba(255, 192, 203, 0.3) 40%,
                transparent 40%,
                transparent 70%,
                rgba(255, 182, 193, 0.25) 70%,
                rgba(255, 182, 193, 0.25) 100%
              )
            `,
            animation: "blockSlide3 20s linear infinite alternate",
          }}
        />

        {/* Floating shapes overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 30% 40%, rgba(255, 105, 180, 0.2) 0%, transparent 40%),
              radial-gradient(ellipse at 70% 60%, rgba(244, 63, 94, 0.15) 0%, transparent 40%),
              radial-gradient(ellipse at 50% 80%, rgba(255, 182, 193, 0.2) 0%, transparent 35%)
            `,
            animation: "float 18s ease-in-out infinite",
          }}
        />
      </motion.div>

      <style jsx>{`
        @keyframes blockSlide1 {
          0% {
            transform: translateX(-10%);
          }
          100% {
            transform: translateX(10%);
          }
        }
        @keyframes blockSlide2 {
          0% {
            transform: translateX(-15%);
          }
          100% {
            transform: translateX(15%);
          }
        }
        @keyframes blockSlide3 {
          0% {
            transform: translateY(-8%);
          }
          100% {
            transform: translateY(8%);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(5%, -5%) scale(1.05);
          }
          66% {
            transform: translate(-5%, 5%) scale(0.95);
          }
        }
      `}</style>
    </div>
  )
}