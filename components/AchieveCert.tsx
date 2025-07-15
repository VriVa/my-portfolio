"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {  Trophy } from "lucide-react"

const achievements = [
  {
    id: 1,
    title: "Best Project Award",
    organization: "University Tech Fest",
    year: "2023",
    icon: Trophy,
    description: "Awarded for innovative web application development",
  }
  
]

export default function AchieveCert() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Achievements & Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">Recognition and certifications that mark my journey</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-pink-100 group"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center group-hover:from-pink-200 group-hover:to-rose-200 transition-colors duration-300"
                  >
                    <IconComponent className="w-6 h-6 text-pink-600" />
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-pink-600 transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-pink-600 font-medium mb-2">
                      {achievement.organization} • {achievement.year}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
