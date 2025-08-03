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
      className="py-16 sm:py-20 bg-gradient-to-br from-pink-50 to-rose-50 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-5">
            <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 sm:w-24 h-1.5 bg-gradient-to-r from-gray-900 to-gray-900 mx-auto rounded-full -mb-5"></div>
        </motion.div>

        <div className="grid gap-12 items-center lg:grid-cols-[3fr_2fr]">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              {"Hi! I'm Vriddhi, a Computer Engineering Student at Sardar Patel Institute of Technology"}
            </h3>

            <p className="text-base sm:text-lg text-gray-800 mb-6 leading-relaxed">
              I enjoy building web applications by integrating different technologies. I have experience in React.js, Node.js, Express.js, MongoDB, and Next.js. I am passionate about creating user-friendly interfaces that provide a seamless experience.
            </p>

            <p className="text-base sm:text-lg text-gray-800 mb-8 leading-relaxed">
              {"I am currently pursuing a minor in Banking Technology from Barclays. I believe in continuous learning and building innovative solutions that make a difference. Beyond academics and tech, I’ve had the privilege of being an active member of the Rotaract Club and a mentor at the Abhyudaya NGO. These experiences have helped me grow into a more empathetic and responsible leader, while strengthening my communication, teamwork, and mentorship skills."}
            </p>

            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4 bg-white rounded-lg shadow-md">
                <Code className="w-7 h-7 sm:w-8 sm:h-8 text-pink-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">Clean Code</p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4 bg-white rounded-lg shadow-md">
                <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-pink-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">Passion</p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4 bg-white rounded-lg shadow-md">
                <Sparkle className="w-7 h-7 sm:w-8 sm:h-8 text-pink-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">Creativity</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl w-full max-w-sm mx-auto"
            >
              <div className="space-y-7 sm:space-y-9">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">Location</h4>
                  <p className="text-gray-700 text-sm sm:text-base">Borivali West, Mumbai, Maharashtra</p>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">Education</h4>
                  <p className="text-gray-700 text-sm sm:text-base">B.Tech in Computer Engineering at S.P.I.T</p>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-700 text-sm sm:text-base">vvriddhi@gmail.com</p>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">Fun fact about me</h4>
                  <p className="text-gray-700 text-sm sm:text-base">I love travelling! 🌍</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
