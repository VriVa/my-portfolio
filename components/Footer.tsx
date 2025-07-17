"use client"

import { motion } from "framer-motion"
import { Heart, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mb-2 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-300"
          >
            <ArrowUp size={20} />
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-1 sm:gap-2 text-pink-100 text-sm sm:text-base mb-2"
          >
            <span>Developed with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
            </motion.div>
            <span>by Vriddhi</span>
          </motion.div>

          <p className="text-pink-100 text-xs sm:text-sm">© {new Date().getFullYear()} Vriddhi Vashi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}