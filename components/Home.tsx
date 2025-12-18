"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 sm:pt-24 pb-8 sm:pb-8 relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full relative z-20">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 items-center">
          {/* Code Editor Window - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start order-2 lg:order-1 mt-3 sm:mt-0"
          >
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl">
              {/* Code Editor Window */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] lg:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
              >
                {/* Window Header */}
                <div className="bg-pink-500 px-4 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 border-b-4 border-black flex items-center gap-2">
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-white border-2 border-black"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-white border-2 border-black"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-white border-2 border-black"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-sm sm:text-sm lg:text-base text-white font-mono font-black">developer.tsx</span>
                  </div>
                </div>

                {/* Code Content */}
                <div className="bg-gray-900 text-white pt-4 sm:pt-6 lg:pt-10 px-4 sm:px-4 lg:px-10 pb-3 sm:pb-4 font-mono text-sm sm:text-sm lg:text-base">
                  <div className="space-y-2 sm:space-y-2 lg:space-y-3">
                    <div className="flex items-start gap-2.5 sm:gap-3 lg:gap-5">
                      <span className="text-pink-500 select-none font-black text-sm sm:text-sm">01</span>
                      <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                        <span className="text-gray-400 font-black">{"<"}</span>
                        <span className="text-pink-400 font-black">h1</span>
                        <span className="text-gray-400 font-black">{">"}</span>
                        <span className="text-white font-black text-sm sm:text-sm">{"Hi, I'm "}</span>
                        <span className="text-pink-400 font-black text-sm sm:text-sm">Vriddhi Vashi</span>
                        <span className="text-white font-black text-sm sm:text-sm">!</span>
                        <span className="text-gray-400 font-black">{"</"}</span>
                        <span className="text-pink-400 font-black">h1</span>
                        <span className="text-gray-400 font-black">{">"}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 sm:gap-3 lg:gap-5">
                      <span className="text-pink-500 select-none font-black text-sm sm:text-sm">02</span>
                      <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                        <span className="text-gray-400 font-black">{"<"}</span>
                        <span className="text-pink-400 font-black">p</span>
                        <span className="text-gray-400 font-black">{">"}</span>
                        <span className="text-white font-black text-sm sm:text-sm">I</span>
                        <span className="text-rose-400 font-black text-sm sm:text-sm">design</span>
                        <span className="text-white font-black text-sm sm:text-sm">✏️ and</span>
                        <span className="text-rose-400 font-black text-sm sm:text-sm">develop</span>
                        <span className="text-white font-black text-sm sm:text-sm">💻</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 sm:gap-3 lg:gap-5">
                      <span className="text-pink-500 select-none font-black text-sm sm:text-sm">03</span>
                      <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                        <span className="text-rose-400 font-black text-sm sm:text-sm">innovative web applications</span>
                        <span className="text-gray-400 font-black">{"</"}</span>
                        <span className="text-pink-400 font-black">p</span>
                        <span className="text-gray-400 font-black">{">"}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 sm:gap-3 lg:gap-5">
                      <span className="text-pink-400 select-none font-black text-sm sm:text-sm">04</span>
                      <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                        <span className="text-gray-400 font-black">{"<"}</span>
                        <span className="text-pink-400 font-black">span</span>
                        <span className="text-gray-400 font-black">{">"}</span>
                        <span className="text-white font-black text-sm sm:text-sm">Full Stack</span>
                        <span className="text-rose-400 font-black text-sm sm:text-sm">Software Engineer</span>
                        <span className="text-gray-400 font-black">{"</"}</span>
                        <span className="text-pink-400 font-black">span</span>
                        <span className="text-gray-400 font-black">{">"}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 sm:gap-3 lg:gap-5">
                      <span className="text-pink-500 select-none font-black text-sm sm:text-sm">05</span>
                      <div className="text-gray-500 font-black text-sm sm:text-sm">
                        <span>{"// Computer Engineering Student"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Blinking cursor */}
                  <motion.div
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-block w-2 h-3 sm:w-2 sm:h-4 lg:w-3 lg:h-5 bg-pink-400 mt-2 sm:mt-2 border-2 border-pink-400"
                  />
                </div>

                {/* Bottom section with links and buttons */}
                <div className="bg-pink-100 p-4 sm:p-6 space-y-3 sm:space-y-4 border-t-4 border-black">
                  {/* Social Links */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex gap-3 sm:gap-3 justify-center"
                  >
                    <motion.a
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://github.com/VriVa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-2 lg:p-3 bg-white border-4 border-black text-gray-800 hover:bg-pink-500 hover:text-white transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                    >
                      <Github size={20} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" strokeWidth={2.5} />
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://linkedin.com/in/vriddhivashi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-2 lg:p-3 bg-white border-4 border-black text-gray-800 hover:bg-pink-500 hover:text-white transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                    >
                      <Linkedin size={20} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" strokeWidth={2.5} />
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      href="#contact"
                      className="p-2 sm:p-2 lg:p-3 bg-white border-4 border-black text-gray-800 hover:bg-pink-500 hover:text-white transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                    >
                      <Mail size={20} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" strokeWidth={2.5} />
                    </motion.a>
                  </motion.div>

                  {/* Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-3"
                  >
                    <motion.a
                      whileHover={{ y: -2 }}
                      whileTap={{ 
                        y: 2,
                        transition: { duration: 0.1 }
                      }}
                      href="#about"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-pink-500 text-white px-4 sm:px-6 py-3 sm:py-3 border-4 border-black font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 text-sm sm:text-sm lg:text-base uppercase"
                    >
                      About Me
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -2 }}
                      whileTap={{ 
                        y: 2,
                        transition: { duration: 0.1 }
                      }}
                      href="/VriddhiResume.pdf"
                      download="VriddhiResume.pdf"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-white border-4 border-black text-gray-800 px-4 sm:px-6 py-3 sm:py-3 font-black hover:bg-rose-500 hover:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 text-sm sm:text-sm lg:text-base uppercase"
                    >
                      <Download size={18} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5" strokeWidth={3} />
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
            className="flex justify-center order-1 lg:order-2 mb-4 sm:mb-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ 
                rotate: [0, -2, 2, -2, 0],
                transition: { duration: 0.5 }
              }}
              className="relative"
            >
              {/* Black border restored */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[26rem] lg:h-[26rem] bg-pink-500 p-2 sm:p-2 lg:p-3 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] lg:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
                <div className="w-full h-full overflow-hidden bg-white border-4 border-black">
                  <Image
                    src="/images/profile.jpg?width=384"
                    alt="Profile"
                    width={384}
                    height={384}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-rose-500 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] lg:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -z-10"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}