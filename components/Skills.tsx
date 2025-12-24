"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const skills = [
  { name: "Java", logo: "/logos/java.png" },
  { name: "C", logo: "/logos/c.png" },
  { name: "Python", logo: "/logos/python.png" },
  { name: "TypeScript", logo: "/logos/typescript.png" },
  { name: "HTML 5", logo: "/logos/html.png" },
  { name: "CSS 3", logo: "/logos/css.png" },
  { name: "JavaScript", logo: "/logos/javascript.png" },
  { name: "ReactJS", logo: "/logos/react.png" },
  { name: "ExpressJS", logo: "/logos/express.png" },
  { name: "NodeJS", logo: "/logos/nodejs.png" },
  { name: "MongoDB", logo: "/logos/mongodb.png" },
  { name: "NextJS", logo: "/logos/nextjs.png" },
  { name: "Tailwind CSS", logo: "/logos/tailwindcss.png" },
  { name: "Streamlit", logo: "/logos/streamlit.png" },
  { name: "MySQL", logo: "/logos/mysql.png" },
  { name: "PostgreSQL", logo: "/logos/postgresql.png" },
  { name: "Redis", logo: "/logos/redis.png" },
  { name: "FastAPI", logo: "/logos/fastapi.png" },
  { name: "Git", logo: "/logos/git.png" },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="skills" className="py-4 sm:py-16 lg:py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-4 sm:mb-16"
        >
          <motion.h2 
            whileHover={{ scale: 1.02 }}
            className="inline-block text-2xl sm:text-4xl lg:text-5xl font-black mb-2 sm:mb-6 bg-pink-500 text-white px-4 sm:px-8 py-2 sm:py-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] uppercase scale-95 sm:scale-100"
          >
            Technical Skills
          </motion.h2>
          <div className="w-20 sm:w-32 h-2 bg-rose-500 mx-auto border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-1 sm:mt-4 scale-95 sm:scale-100"></div>
        </motion.div>

        {/* Skills Grid - Adjusted for small screens */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-6 md:gap-6 lg:gap-8 mt-2 sm:mt-0 scale-95 sm:scale-100"
        >
          
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.4 + index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.1,
                y: -10,
                rotate: [0, -3, 3, 0],
                transition: { 
                  duration: 0.3,
                  repeat: 1,
                  repeatType: "reverse",
                  repeatDelay: 0.2 
                }
              }}
              className="group flex flex-col items-center"
            >
              {/* Skill Card */}
              <div className="relative w-full max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-none">
                {/* Hard shadow */}
                <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 sm:translate-x-2 sm:translate-y-2"></div>

                {/* Main card */}
                <div className="relative bg-white w-full aspect-square border-4 border-black flex items-center justify-center group-hover:border-pink-500 transition-all duration-300 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">

                  {/* Inner decorative border */}
                  <div className="absolute inset-1.5 sm:inset-2 md:inset-3 border-2 border-pink-200 group-hover:border-pink-400 transition-colors duration-300"></div>

                  {/* Background accent on hover */}
                  <div className="absolute inset-0 bg-pink-100 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

                  {/* Logo - Bigger on small screens */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 lg:w-24 lg:h-24 relative z-10 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={skill.logo || "/placeholder.svg"}
                      alt={`${skill.name} logo`}
                      fill
                      className="object-contain p-1 sm:p-0"
                    />
                  </div>
                </div>
              </div>

              {/* Skill name */}
              <h3 className="text-xs sm:text-sm md:text-base font-black text-gray-900 text-center mt-1 sm:mt-2 md:mt-4 group-hover:text-pink-600 transition-colors duration-300 uppercase">
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
          className="flex justify-center mt-4 sm:mt-16"
        >
          <div className="flex space-x-2 sm:space-x-3">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-pink-400 border-3 border-black animate-pulse shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-rose-400 border-3 border-black animate-pulse shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-pink-400 border-3 border-black animate-pulse shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]" style={{ animationDelay: "0.4s" }}></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}