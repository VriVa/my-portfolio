"use client"

import { motion } from "framer-motion"
import { Heart, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-pink-500 border-t-4 border-black py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            className="mb-4 p-2 sm:p-3 bg-rose-500 rounded-none border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 font-bold scale-90 sm:scale-100"
          >
            <ArrowUp size={20} className="text-white sm:w-6 sm:h-6" strokeWidth={3} />
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4 bg-white border-4 border-black px-4 py-2 sm:px-6 sm:py-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] scale-90 sm:scale-100"
          >
            <span className="text-black font-bold text-sm sm:text-lg">Developed with</span>
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-4 h-4 sm:w-6 sm:h-6 fill-rose-500 text-rose-500" strokeWidth={3} />
            </motion.div>
            <span className="text-black font-bold text-sm sm:text-lg">by Vriddhi</span>
          </motion.div>

          <div className="bg-rose-500 border-4 border-black px-4 py-1 sm:px-6 sm:py-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] scale-90 sm:scale-100">
            <p className="text-white font-bold text-xs sm:text-base">
              © {new Date().getFullYear()} Vriddhi Vashi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}