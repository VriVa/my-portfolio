"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { SkillSphere } from "./SkillsSphere"

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
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5">
            <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-black to-black mx-auto rounded-full"></div>
        </motion.div>

        <div className="-mt-20 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="flex flex-col items-center"
            >
              <SkillSphere logoSrc={skill.logo} />
              <h3 className="-mt-10 text-sm sm:text-base md:text-lg font-extrabold text-gray-800 group-hover:text-pink-800 transition-colors duration-300">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
