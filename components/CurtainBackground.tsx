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
        {/* Base background color */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white" />

        {/* Curtain Layer 1: Wider, slower moving */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              repeating-linear-gradient(
                to right,
                rgba(255, 192, 203, 0.2) 0%,
                rgba(255, 105, 180, 0.2) 10%,
                transparent 20%
              )
            `,
            backgroundSize: "200% 100%",
            animation: "curtainMove1 30s linear infinite alternate",
          }}
        />

        {/* Curtain Layer 2: Thinner, faster moving, slightly different shades */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              repeating-linear-gradient(
                to right,
                rgba(255, 220, 230, 0.25) 0%,
                rgba(255, 190, 200, 0.25) 5%,
                transparent 15%
              )
            `,
            backgroundSize: "180% 100%",
            animation: "curtainMove2 25s linear infinite alternate-reverse",
          }}
        />

        {/* Curtain Layer 3: Subtle, very light, fastest moving */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              repeating-linear-gradient(
                to right,
                rgba(255, 240, 245, 0.3) 0%,
                rgba(255, 230, 235, 0.3) 2%,
                transparent 10%
              )
            `,
            backgroundSize: "150% 100%",
            animation: "curtainMove3 20s linear infinite alternate",
          }}
        />
      </motion.div>

      <style jsx>{`
        @keyframes curtainMove1 {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 0%;
          }
        }
        @keyframes curtainMove2 {
          0% {
            background-position: 100% 0%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
        @keyframes curtainMove3 {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 0%;
          }
        }
      `}</style>
    </div>
  )
}
