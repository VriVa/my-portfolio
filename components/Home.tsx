"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import Image from "next/image"



export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
     

      <div className="max-w-7xl mx-auto w-full relative z-20 lg:mr-12">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* Code Editor Window - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="w-full max-w-lg lg:max-w-2xl">
              {/* Code Editor Window */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
              >
                {/* Window Header */}
                <div className="bg-gray-100 px-4 lg:px-6 py-3 lg:py-4 border-b border-gray-200 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 lg:w-4 lg:h-4 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 lg:w-4 lg:h-4 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 lg:w-4 lg:h-4 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs sm:text-sm lg:text-base text-gray-600 font-mono">developer.tsx</span>
                  </div>
                </div>

                {/* Code Content */}
               <div className="bg-gray-900 text-white pt-4 sm:pt-6 lg:pt-10 px-4 sm:px-6 lg:px-10 pb-0 font-mono text-xs sm:text-sm lg:text-lg">

                  <div className="space-y-2 lg:space-y-4">
                    <div className="flex items-start gap-3 lg:gap-5">
                      <span className="text-gray-500 select-none">01</span>
                      <div className="flex flex-wrap items-center gap-1 lg:gap-2">
                        <span className="text-gray-400">{"<"}</span>
                        <span className="text-blue-400">h1</span>
                        <span className="text-gray-400">{">"}</span>
                        <span className="text-orange-400">{"Hi, I am "} </span>
                        <span className="text-orange-300 font-bold"> Vriddhi Vashi</span>
                        <span className="text-orange-400">!</span>
                        <span className="text-gray-400">{"</"}</span>
                        <span className="text-blue-400">h1</span>
                        <span className="text-gray-400">{">"}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 lg:gap-5">
                      <span className="text-gray-500 select-none">02</span>
                      <div className="flex flex-wrap items-center gap-1 lg:gap-2">
                        <span className="text-gray-400">{"<"}</span>
                        <span className="text-blue-400">p</span>
                        <span className="text-gray-400">{">"}</span>
                        <span className="text-white">I</span>
                        <span className="text-orange-400">design</span>
                        <span className="text-white">✏️ and</span>
                        <span className="text-orange-400">develop</span>
                        <span className="text-white">💻</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 lg:gap-5">
                      <span className="text-gray-500 select-none">03</span>
                      <div className="flex flex-wrap items-center gap-1 lg:gap-2">
                        <span className="text-orange-400">web applications</span>
                        <span className="text-gray-400">{"</"}</span>
                        <span className="text-blue-400">p</span>
                        <span className="text-gray-400">{">"}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 lg:gap-5">
                      <span className="text-gray-500 select-none">04</span>
                      <div className="text-gray-500">
                        <span>{"// Full Stack Web Developer"}</span>
                      </div>
                    </div>
                     <div className="flex items-start gap-3 lg:gap-5">
                      <span className="text-gray-500 select-none">05</span>
                      <div className="text-gray-500">
                        <span>{"// Computer Engineering Student"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Blinking cursor */}
                  <motion.div
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                    className="inline-block w-2 h-4 lg:w-4 lg:h-6 bg-white mt-2"
                  />
                </div>

                {/* Bottom section with links and buttons */}
                <div className="bg-white p-4 sm:p-6 space-y-4">
                  

                  {/* Social Links */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex gap-3 justify-center"
                  >
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://github.com/VriVa"
                      className="p-2 sm:p-3 bg-gray-100 rounded-full text-gray-700 hover:bg-pink-200 hover:text-pink-600 transition-colors"
                    >
                      <Github size={18} className="sm:w-5 sm:h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://linkedin.com/in/vriddhivashi"
                      className="p-2 sm:p-3 bg-gray-100 rounded-full text-gray-700 hover:bg-pink-200 hover:text-pink-600 transition-colors"
                    >
                      <Linkedin size={18} className="sm:w-5 sm:h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href="#contact"
                      className="p-2 sm:p-3 bg-gray-100 rounded-full text-gray-700 hover:bg-pink-200 hover:text-pink-600 transition-colors"
                    >
                      <Mail size={18} className="sm:w-5 sm:h-5" />
                    </motion.a>
                  </motion.div>

                  {/* Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-3"
                  >
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="#about"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-rose-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                    >
                      About Me
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="/VriddhiResume.pdf"
                      download="VriddhiResume.pdf"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-white border-2 border-pink-600 text-pink-600 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium hover:bg-pink-50 hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                    >
                      <Download size={14} className="sm:w-4 sm:h-4" />
                      Resume
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Image Only - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="w-72 h-72 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full bg-gray-900 p-1.5 sm:p-2 lg:p-3 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <Image
                    src="/images/profile.jpg?width=384"
                    alt="Profile"
                    width={384}
                    height={384}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}