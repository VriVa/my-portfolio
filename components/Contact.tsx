"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Send, Github, Linkedin, Mail,  MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import emailjs from "emailjs-com"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSending, setIsSending] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  formData,
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!     
      )
      .then(() => {
        alert("Message sent successfully!")
        setFormData({ name: "", email: "", subject: "", message: "" })
        setIsSending(false)
      })
      .catch((error) => {
        console.error("Email error:", error)
        alert("Failed to send message. Please try again later.")
        setIsSending(false)
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
              Contact Me
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-gray-900 to-gray-900 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {/* Left side */}
          <div className="space-y-4 text-sm sm:text-base">
            <h3 className="text-xl md:text-3xl sm:text-2xl font-extrabold text-gray-800 mb-1">{"Let's Connect"}</h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."}
              Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-pink-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <p className="text-gray-600 break-all text-sm">vvriddhi@gmail.com</p>
                </div>
              </div>

              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-pink-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Location</p>
                  <p className="text-gray-600 text-sm">Borivali West, Mumbai, Maharashtra</p>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <h4 className="text-lg font-bold text-gray-800 mb-4">Socials</h4>
              <div className="flex gap-3">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/VriVa"
                  className="p-3 bg-white rounded-full shadow-md text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-colors"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://linkedin.com/in/vriddhivashi"
                  className="p-3 bg-white rounded-full shadow-md text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-colors"
                >
                  <Linkedin size={24} />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="space-y-4 text-sm sm:text-base">
            <h3 className="text-xl md:text-3xl font-extrabold text-gray-800 mb-1">Drop me a mail!</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
              <Input name="email" placeholder="Your Email" type="email" required value={formData.email} onChange={handleChange} />
              <Input name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} />
              <Textarea name="message" placeholder="Your Message" rows={4} required value={formData.message} onChange={handleChange} />

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="pt-1">
                <Button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-700 hover:to-pink-700 text-white font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm"
                >
                  {isSending ? "Sending..." : "Send"}
                  {!isSending && <Send size={16} />}
                </Button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
