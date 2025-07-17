"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left px-2 sm:px-6"
          >
            <div className="flex items-center justify-center lg:justify-start lg:gap-12 mb-6 sm:mb-8">
              <div className="hidden lg:block h-56 -mt-5 w-1 bg-gradient-to-b from-pink-500 to-rose-500 rounded-full" />
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6"
                >
                  <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 bg-clip-text text-transparent">
                    {"Hello, I am"}
                  </span>
                  <br />
                  <span className="text-black text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold whitespace-nowrap">
                    Vriddhi Vashi
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-gray-700 mb-2 sm:mb-8 leading-relaxed"
                >
                  Full Stack Web Developer
                </motion.p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-3 sm:gap-4 justify-center lg:justify-start mb-2 sm:mb-8"
            >
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/VriVa"
                className="p-2 sm:p-3 bg-white rounded-full text-pink-600 hover:bg-pink-200 transition-colors"
              >
                <Github size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/vriddhivashi"
                className="p-2 sm:p-3 bg-white rounded-full text-pink-600 hover:bg-pink-200 transition-colors"
              >
                <Linkedin size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="p-2 sm:p-3 bg-white rounded-full text-pink-600 hover:bg-pink-200 transition-colors"
              >
                <Mail size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-2 sm:mb-8"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#about"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-rose-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
              >
                Get to know me
                <ArrowDown size={16} className="sm:w-5 sm:h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download="VriddhiVashiResume.pdf"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-pink-600 text-pink-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium hover:bg-pink-50 hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
              >
                <Download size={16} className="sm:w-5 sm:h-5" />
                Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mt-4 lg:mt-0"
          >
            <motion.div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-black to-black p-4 sm:p-5 transform transition-transform duration-300 hover:scale-105 ease-in-out">
                <div className="w-full h-full rounded-3xl overflow-hidden">
                  <Image
                    src="/images/profile.jpg"
                    alt="Profile"
                    width={384}
                    height={384}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center text-lg sm:text-xl"
              >
                {" </>"}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
