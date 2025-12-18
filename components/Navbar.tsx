"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white border-b-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" : "bg-white/95 border-b-4 border-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scale-95 sm:scale-100">
        <div className="flex justify-between items-center py-1.5 sm:py-3 md:py-4">
          <motion.a
            href="#home"
            whileHover={{ 
              y: -2,
              transition: { duration: 0.1 }
            }}
            whileTap={{ scale: 0.98 }}
            className="text-base sm:text-xl md:text-2xl lg:text-3xl font-black bg-pink-500 text-white px-2 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 border-3 sm:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 cursor-pointer"
          >
            <span className="text-black">{"<"}</span>
            <span className="text-white">vriddhi</span>
            <span className="text-black">{"/>"}</span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2 lg:space-x-4">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ 
                  y: -2,
                  transition: { duration: 0.1 }
                }}
                whileTap={{ scale: 0.95 }}
                className="text-sm lg:text-lg text-gray-800 font-bold hover:text-white transition-colors duration-200 px-3 lg:px-4 py-1.5 sm:py-2 border-3 sm:border-4 border-black bg-white hover:bg-pink-500 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-800 hover:text-white p-1 sm:p-1.5 border-3 border-black bg-white hover:bg-pink-500 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] transition-all"
            >
              {isOpen ? <X size={18} className="sm:w-5 sm:h-5" strokeWidth={3} /> : <Menu size={18} className="sm:w-5 sm:h-5" strokeWidth={3} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-2 sm:p-4 mb-2 sm:mb-4 scale-95 sm:scale-100"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-1.5 sm:py-3 px-3 sm:px-4 mb-1.5 sm:mb-2 text-sm sm:text-base text-gray-800 font-bold hover:text-white hover:bg-pink-500 transition-colors duration-200 border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px]"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}