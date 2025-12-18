"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Send, Github, Linkedin, Mail, MapPin } from "lucide-react"
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
    <section id="contact" className="py-8 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-16"
        >
          <motion.h2 
            whileHover={{ scale: 1.02 }}
            className="inline-block text-2xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 bg-pink-500 text-white px-4 sm:px-8 py-2 sm:py-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] uppercase scale-90 sm:scale-100"
          >
            Contact Me
          </motion.h2>
          <div className="w-20 sm:w-32 h-2 bg-rose-500 mx-auto border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-2 sm:mt-4 scale-90 sm:scale-100"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-4 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 scale-95 sm:scale-100"
        >
          {/* Left side */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-xl sm:text-3xl font-black text-gray-900 mb-2 sm:mb-3 uppercase">
                {"Let's Connect"}
              </h3>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-base font-bold">
                {"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."}
                Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-400 border-4 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 scale-90 sm:scale-100">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-black" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="font-black text-gray-900 uppercase text-xs sm:text-sm">Email</p>
                  <p className="text-gray-700 break-all text-xs sm:text-sm font-bold">vvriddhi@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-600 border-4 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 scale-90 sm:scale-100">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-black" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="font-black text-gray-900 uppercase text-xs sm:text-sm">Location</p>
                  <p className="text-gray-700 text-xs sm:text-sm font-bold">Borivali West, Mumbai, Maharashtra</p>
                </div>
              </div>
            </div>

            <div className="pt-2 sm:pt-4">
              <h4 className="text-base sm:text-lg font-black text-gray-900 mb-3 sm:mb-4 uppercase">Connect With Me</h4>
              <div className="flex gap-2 sm:gap-3">
                <motion.a
                  whileHover={{ y: -4, rotate: 3 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/VriVa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-4 bg-pink-400 border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-black hover:bg-pink-300 transition-all scale-90 sm:scale-100"
                >
                  <Github size={20} className="sm:w-6 sm:h-6" strokeWidth={2.5} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -4, rotate: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://linkedin.com/in/vriddhivashi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-4 bg-pink-600 border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-black hover:bg-pink-700 transition-all scale-90 sm:scale-100"
                >
                  <Linkedin size={20} className="sm:w-6 sm:h-6" strokeWidth={2.5} />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-xl sm:text-3xl font-black text-gray-900 mb-3 sm:mb-4 uppercase">Drop me a mail!</h3>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <Input 
                name="name" 
                placeholder="Your Name" 
                required 
                value={formData.name} 
                onChange={handleChange}
                className="border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:border-pink-500 transition-all font-bold rounded-none h-10 sm:h-12 px-3 sm:px-4 bg-white text-sm sm:text-base"
              />
              <Input 
                name="email" 
                placeholder="Your Email" 
                type="email" 
                required 
                value={formData.email} 
                onChange={handleChange}
                className="border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:border-pink-500 transition-all font-bold rounded-none h-10 sm:h-12 px-3 sm:px-4 bg-white text-sm sm:text-base"
              />
              <Input 
                name="subject" 
                placeholder="Subject" 
                required 
                value={formData.subject} 
                onChange={handleChange}
                className="border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:border-pink-500 transition-all font-bold rounded-none h-10 sm:h-12 px-3 sm:px-4 bg-white text-sm sm:text-base"
              />
              <Textarea 
                name="message" 
                placeholder="Your Message" 
                rows={4} 
                required 
                value={formData.message} 
                onChange={handleChange}
                className="border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:border-pink-500 transition-all font-bold resize-none rounded-none px-3 sm:px-4 py-2 sm:py-3 bg-white text-sm sm:text-base"
              />

              <motion.div 
                whileHover={{ y: -2 }} 
                whileTap={{ y: 2 }}
                className="pt-1 sm:pt-2"
              >
                <Button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-pink-500 hover:bg-pink-400 text-white font-black py-4 sm:py-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2 text-sm sm:text-base uppercase rounded-none scale-95 sm:scale-100"
                >
                  {isSending ? "Sending..." : "Send Message"}
                  {!isSending && <Send size={16} className="sm:w-5 sm:h-5" strokeWidth={3} />}
                </Button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}