"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const skills = [
  { name: "Java", logo: "/logos/java.png" },
  { name: "C", logo: "/logos/c.png" },
  { name: "HTML 5", logo: "/logos/html.png" },
  { name: "CSS 3", logo: "/logos/css.png" },
  { name: "JavaScript", logo: "/logos/javascript.png" },
  { name: "ReactJS", logo: "/logos/react.png" },
  { name: "ExpressJS", logo: "/logos/express.png" },
  { name: "NodeJS", logo: "/logos/nodejs.png" },
  { name: "MongoDB", logo: "/logos/mongodb.png" },
  { name: "TypeScript", logo: "/logos/typescript.png" },
  { name: "NextJS", logo: "/logos/nextjs.png" },
  { name: "Tailwind CSS", logo: "/logos/tailwindcss.png" },
  { name: "MySQL", logo: "/logos/mysql.png" },
  { name: "PostgreSQL", logo: "/logos/postgresql.png" },
  { name: "Git", logo: "/logos/git.png" },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold mb-5">
            <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-gray-900 to-gray-900 mx-auto rounded-full -mb-8"></div>
        </motion.div>

        {/* Skills Coins Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 mt-16"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30, rotateY: 180 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.5 + index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.1,
                y: -8,
                rotateY: 15,
                transition: { duration: 0.3 },
              }}
              className="group flex flex-col items-center"
            >
              {/* Coin */}
              <div className="relative">
                {/* Coin shadow/depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full transform translate-x-1 translate-y-1 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28"></div>

                {/* Main coin */}
                <div className="relative bg-gradient-to-br from-white to-white rounded-full w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 shadow-xl border-4 border-gray-300 flex items-center justify-center group-hover:shadow-2xl transition-all duration-300 group-hover:border-pink-500">

                  {/* Inner coin border */}
                  <div className="absolute inset-2 border-2 border-pink-200 rounded-full group-hover:border-pink-200 transition-colors duration-300"></div>

                  {/* Logo */}
                 <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 relative z-10 group-hover:scale-110 transition-transform duration-300">

                    <Image
                      src={skill.logo || "/placeholder.svg"}
                      alt={`${skill.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Skill name */}
              <h3 className="text-xs sm:text-sm lg:text-base font-bold text-gray-900 text-center mt-3 group-hover:text-pink-900 transition-colors duration-300">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>



        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex justify-center mt-12"
        >
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
