"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Users, Heart, Zap, Target } from "lucide-react"
import { extracurriculars } from "@/data/extracurricular"

export default function Extracurricular() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const getIcon = (iconName: string) => {
    const icons = {
      Users,
      Heart,
      Zap,
      Target,
    }
    return icons[iconName as keyof typeof icons] || Users
  }

  return (
    <section id="extracurricular" className="py-20">
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
              Extracurricular Activities
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Beyond coding - my involvement in community and leadership activities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {extracurriculars.map((activity, index) => {
            const IconComponent = getIcon(activity.icon)
            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-pink-100 group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mb-4 group-hover:from-pink-200 group-hover:to-rose-200 transition-colors duration-300"
                >
                  <IconComponent className="w-8 h-8 text-pink-600" />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                  {activity.title}
                </h3>
                <p className="text-pink-600 font-medium mb-2">{activity.organization}</p>
                <p className="text-sm text-gray-500 mb-3">{activity.duration}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{activity.description}</p>

                {activity.achievements && activity.achievements.length > 0 && (
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-700">Key Achievements:</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {activity.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-1">
                          <span className="text-pink-500 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
