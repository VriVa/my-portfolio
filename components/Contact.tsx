"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Send, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-black to-black mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {/* Left side */}
          <div className="space-y-4 text-sm sm:text-base">
            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-800 mb-1">Let's Connect</h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-pink-600" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-gray-800 text-sm sm:text-base">Email</p>
                  <p className="text-gray-600 text-xs sm:text-sm break-all">vvriddhi@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-pink-600" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-gray-800 text-sm sm:text-base">Phone</p>
                  <p className="text-gray-600 text-xs sm:text-sm">+91 8369603054</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-pink-600" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-gray-800 text-sm sm:text-base">Location</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Borivali West, Mumbai, Maharashtra</p>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-3">Socials</h4>
              <div className="flex gap-3">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/VriVa"
                  className="p-3 sm:p-4 bg-white rounded-full shadow-md text-gray-700 hover:text-pink-600 transition-colors"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://linkedin.com/in/vriddhivashi"
                  className="p-3 sm:p-4 bg-white rounded-full shadow-md text-gray-700 hover:text-pink-600 transition-colors"
                >
                  <Linkedin size={24} />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="space-y-4 text-sm sm:text-base">
            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-800 mb-1">Drop a mail to me!</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-800 mb-1">
                  Your Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full text-sm p-2.5 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                  placeholder="What's your good name?"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-1">
                  Your Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full text-sm p-2.5 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                  placeholder="What's your email address?"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-gray-800 mb-1">
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full text-sm p-2.5 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                  placeholder="What's the subject?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-800 mb-1">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full text-sm p-2.5 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-pink-500 resize-none"
                  placeholder="What you want to say?"
                />
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="pt-1">
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm"
                >
                  Send
                  <Send size={16} />
                </Button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}