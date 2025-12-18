"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Code, Sparkle } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      id="about"
      className="py-4 sm:py-20 bg-pink-50 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-4 sm:mb-16"
        >
          <motion.h2 
            whileHover={{ scale: 1.02 }}
            className="inline-block text-2xl sm:text-4xl lg:text-5xl font-black mb-3 sm:mb-6 bg-pink-500 text-white px-4 sm:px-8 py-2 sm:py-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] uppercase scale-95 sm:scale-100"
          >
            About Me
          </motion.h2>
         <div className="w-20 sm:w-32 h-2 bg-rose-500 mx-auto border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-2 sm:mt-4 scale-95 sm:scale-100"></div>
        </motion.div>

        <div className="grid gap-4 lg:gap-12 items-start lg:grid-cols-[3fr_2fr]">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-3 sm:space-y-6"
          >
            <div className="bg-white border-4 border-black p-4 sm:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] scale-95 sm:scale-100">
              <h3 className="text-lg sm:text-2xl lg:text-3xl font-black text-gray-900 mb-2 sm:mb-6">
                {"Hi! I'm Vriddhi, a Computer Engineering Student at Sardar Patel Institute of Technology"}
              </h3>

              <p className="text-xs sm:text-base lg:text-lg text-gray-800 mb-2 sm:mb-6 leading-relaxed font-bold">
                I enjoy building web applications by integrating different technologies. I have experience in React.js, Node.js, Express.js, MongoDB, and Next.js. I am passionate about creating user-friendly interfaces that provide a seamless experience.
              </p>

              <p className="text-xs sm:text-base lg:text-lg text-gray-800 leading-relaxed font-bold">
                  {"I am currently pursuing a minor in Banking Technology from Barclays. I believe in continuous learning and building innovative solutions that make a difference. Beyond academics and tech, I've had the privilege of being an active member of the Rotaract Club and a mentor at the Abhyudaya NGO. These experiences have helped me grow into a more empathetic and responsible leader, while strengthening my communication, teamwork, and mentorship skills."}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-1.5 sm:gap-4 scale-90 sm:scale-100">
              <motion.div 
                whileHover={{ 
                  y: -4,
                  transition: { duration: 0.2 }
                }} 
                className="text-center p-1.5 sm:p-4 bg-white border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-pink-100 transition-all"
              >
                <div className="bg-pink-500 border-4 border-black p-1 sm:p-3 inline-block mb-1 sm:mb-2">
                  <Code className="w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" strokeWidth={3} />
                </div>
                <p className="text-[10px] sm:text-sm font-black text-gray-800 uppercase">Clean Code</p>
              </motion.div>

              <motion.div 
                whileHover={{ 
                  y: -4,
                  transition: { duration: 0.2 }
                }} 
                className="text-center p-1.5 sm:p-4 bg-white border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-pink-100 transition-all"
              >
                <div className="bg-pink-500 border-4 border-black p-1 sm:p-3 inline-block mb-1 sm:mb-2">
                  <Heart className="w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" strokeWidth={3} />
                </div>
                <p className="text-[10px] sm:text-sm font-black text-gray-800 uppercase">Passion</p>
              </motion.div>

              <motion.div 
                whileHover={{ 
                  y: -4,
                  transition: { duration: 0.2 }
                }} 
                className="text-center p-1.5 sm:p-4 bg-white border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-pink-100 transition-all"
              >
                <div className="bg-pink-500 border-4 border-black p-1 sm:p-3 inline-block mb-1 sm:mb-2">
                  <Sparkle className="w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" strokeWidth={3} />
                </div>
                <p className="text-[10px] sm:text-sm font-black text-gray-800 uppercase">Creativity</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative lg:sticky lg:top-24 scale-95 sm:scale-100 mt-4 sm:mt-0"
          >
            <motion.div
              whileHover={{ 
                rotate: [0, -1, 1, -1, 0],
                transition: { duration: 0.5 }
              }}
              className="bg-pink-500 border-4 border-black p-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] w-full max-w-sm mx-auto lg:max-w-none"
            >
              <div className="bg-white border-4 border-black p-4 sm:p-6 lg:p-8">
                <div className="space-y-4 sm:space-y-6">
                  <div className="border-b-4 border-black pb-3 sm:pb-4">
                    <h4 className="text-xs sm:text-base lg:text-lg font-black text-pink-500 mb-1 sm:mb-2 uppercase">Location</h4>
                    <p className="text-gray-800 text-xs sm:text-sm lg:text-base font-bold">Mumbai, Maharashtra</p>
                  </div>

                  <div className="border-b-4 border-black pb-3 sm:pb-4">
                    <h4 className="text-xs sm:text-base lg:text-lg font-black text-pink-500 mb-1 sm:mb-2 uppercase">Education</h4>
                    <p className="text-gray-800 text-xs sm:text-sm lg:text-base font-bold">B.Tech in Computer Engineering at S.P.I.T</p>
                  </div>

                  <div className="border-b-4 border-black pb-3 sm:pb-4">
                    <h4 className="text-xs sm:text-base lg:text-lg font-black text-pink-500 mb-1 sm:mb-2 uppercase">Email</h4>
                    <p className="text-gray-800 text-xs sm:text-sm lg:text-base font-bold">vvriddhi@gmail.com</p>
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-base lg:text-lg font-black text-pink-500 mb-1 sm:mb-2 uppercase">Fun Fact</h4>
                    <p className="text-gray-800 text-xs sm:text-sm lg:text-base font-bold">I love travelling! 🌍</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-2 -right-2 w-12 h-12 sm:w-20 sm:h-20 bg-rose-500 border-4 border-black -z-10 scale-90 sm:scale-100"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}