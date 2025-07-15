"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Code, Sparkle } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              {"Hi there! I'm Vriddhi, a Computer Engineering Student at Sardar Patel Institute of Technology"}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I enjoy building web applications by integrating different technologies. I have experience in React.js, Node.js, Express.js, MongoDB, and Next.js. I love creating user-friendly interfaces that provide a seamless experience.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I am also pursuing minors in Banking Technlogy from Barclays India. I believe in continuous learning and build innovative solutions that make a difference.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4 bg-white rounded-lg shadow-md">
                <Code className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">Clean Code</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4 bg-white rounded-lg shadow-md">
                <Heart className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">Passion</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4 bg-white rounded-lg shadow-md">
                <Sparkle className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">Creativity</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Location</h4>
                  <p className="text-gray-600">Borivali West, Mumbai, Maharashtra</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Education</h4>
                  <p className="text-gray-600">B.Tech in Computer Engineering at S.P.I.T</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                  <p className="text-gray-600">vvriddhi@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Fun Fact</h4>
                  <p className="text-gray-600">I love travelling!🌍</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
