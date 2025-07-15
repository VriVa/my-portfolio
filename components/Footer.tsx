"use client"

import { motion } from "framer-motion"
import { Heart, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-r  from-pink-500 to-rose-500 text-white py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mb-4 mt-3 p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-300"
          >
            <ArrowUp size={24} />
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">Thanks for visiting!</h3>
            <p className="text-pink-100 max-w-md mx-auto -mb-3">
              {"I'm always excited to connect with fellow developers and creative minds. Let's build something amazing together!"}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 text-pink-100"
          >
            <span>Designed and Developed with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-5 h-5 fill-current" />
            </motion.div>
            <span>by Vriddhi</span>
          </motion.div>

          <div className="mt-4  pt-8 border-t border-pink-400/30 w-full text-center">
            <p className=" mb-3 text-pink-100 text-sm">© {new Date().getFullYear()} Vriddhi Vashi. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
