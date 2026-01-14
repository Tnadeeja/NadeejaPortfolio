"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, MapPin, Send, User } from "lucide-react"
import { cn } from "@/lib/utils"

const contactData = {
  leftSide: {
    title: "Let's Connect",
    subtitle: "I'm open to opportunities and collaborations",
    description: "Whether you're interested in discussing data science projects, software development opportunities, or potential collaborations, I'd love to hear from you.",
    icon: User
  },
  rightSide: {
    title: "Send Message",
    form: {
      name: {
        label: "Your Name",
        placeholder: "John Doe",
        type: "text"
      },
      email: {
        label: "Email Address",
        placeholder: "john.doe@example.com",
        type: "email"
      },
      message: {
        label: "Message",
        placeholder: "Hi Thamindu, I'm interested in...",
        type: "textarea",
        rows: 4
      }
    },
    socialLinks: [
      {
        icon: Github,
        label: "GitHub",
        url: "https://github.com/nadeeja"
      },
      {
        icon: Linkedin,
        label: "LinkedIn",
        url: "https://linkedin.com/in/thamindu-nadeeja"
      },
      {
        icon: Mail,
        label: "Email",
        url: "mailto:contact@nadeeja.com"
      }
    ]
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
}

export function Contact() {
  return (
    <section id="contact" className="section overflow-hidden">
      <div className="container-wide">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={cardVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm always interested in discussing data science projects, software development opportunities, and potential collaborations.
            </p>
          </motion.div>

          {/* Contact Content */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side */}
            <motion.div
              variants={cardVariants}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              {/* Left Side Content */}
              <div className="text-center lg:text-left">
                <motion.div
                  variants={cardVariants}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-3 mb-6"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {contactData.leftSide.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {contactData.leftSide.subtitle}
                    </p>
                  </div>
                </motion.div>

                {/* Description */}
                <motion.p
                  variants={cardVariants}
                  transition={{ delay: 0.4 }}
                  className="text-muted-foreground leading-relaxed"
                >
                  {contactData.leftSide.description}
                </motion.p>

                {/* Social Links */}
                <motion.div
                  variants={cardVariants}
                  transition={{ delay: 0.5 }}
                  className="flex justify-center gap-4 pt-6"
                >
                  {contactData.leftSide.socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border/50 hover:border-primary/20 transition-all duration-300"
                    >
                      <social.icon className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm font-medium">{social.label}</span>
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              variants={cardVariants}
              transition={{ delay: 0.3 }}
              className="card card-hover p-8 lg:p-12 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300"
            >
              <form className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {contactData.rightSide.form.name.label}
                  </label>
                  <input
                    type={contactData.rightSide.form.name.type}
                    id="name"
                    name="name"
                    placeholder={contactData.rightSide.form.name.placeholder}
                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {contactData.rightSide.form.email.label}
                  </label>
                  <input
                    type={contactData.rightSide.form.email.type}
                    id="email"
                    name="email"
                    placeholder={contactData.rightSide.form.email.placeholder}
                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                    required
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {contactData.rightSide.form.message.label}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder={contactData.rightSide.form.message.placeholder}
                    rows={contactData.rightSide.form.message.rows}
                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-primary w-full flex items-center justify-center gap-2 px-6 py-3 text-base font-medium"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}