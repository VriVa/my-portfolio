"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add event listeners for hover elements
    const hoverElements = document.querySelectorAll('a, button, [role="button"], input, textarea')

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-multiply"
        animate={{
          x: mousePosition.x - 16, 
          y: mousePosition.y - 16, 
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      >
        
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="10" fill="url(#gradient1)" stroke="#ec4899" strokeWidth="1.5" />
          
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fce7f3" />
              <stop offset="50%" stopColor="#f9a8d4" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>

        
        <motion.div
          className="absolute inset-0 -m-2 bg-pink-300/20 rounded-full blur-sm"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40 mix-blend-multiply"
        animate={{
          x: mousePosition.x - 20, 
          y: mousePosition.y - 20, 
          scale: isHovering ? 1.8 : 1.2, 
        }}
        transition={{
          type: "spring",
          stiffness: 300, 
          damping: 30,
        }}
      >
        <div className="w-10 h-10 rounded-full bg-rose-400/30 blur-md" />
      </motion.div>
    </>
  )
}
