"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, MapPin, Send, User, Code, MessageCircle, Sparkles, ArrowRight, Phone, Globe } from "lucide-react"
import { cn } from "@/lib/utils"

interface SocialLink {
  icon: any;
  label: string;
  url: string;
  image?: string;
}

interface ContactData {
  leftSide: {
    title: string
    subtitle: string
    description: string
    icon: any
    socialLinks?: SocialLink[]
  }
  rightSide: {
    title: string
    form: {
      name: {
        label: string
        placeholder: string
        type: "text"
      }
      email: {
        label: string
        placeholder: string
        type: "email"
      }
      message: {
        label: string
        placeholder: string
        type: "textarea"
        rows: number
      }
    }
    socialLinks: SocialLink[]
  }
}

const contactData: ContactData = {
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
        url: "https://github.com/nWeerasinghe",
        image: "/images/contact-placeholder.jpg"
      },
      {
        icon: Linkedin,
        label: "LinkedIn",
        url: "https://linkedin.com/in/thamindu-nWeerasinghe",
        image: "/images/contact-placeholder.jpg"
      },
      {
        icon: Mail,
        label: "Email",
        url: "mailto:contact@nWeerasinghe.com",
        image: "/images/contact-placeholder.jpg"
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
    <section id="contact" className="section overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-brand-600/5"></div>
      
      <div className="container-wide relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={cardVariants}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 mb-6"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mr-2" />
              <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                Let's Connect
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-emerald-400 via-emerald-500 to-brand-600 bg-clip-text text-transparent mb-6">
              Get In Touch
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              I'm always interested in discussing data science projects, software development opportunities, 
              and potential collaborations. Let's create something amazing together.
            </p>
          </motion.div>

          {/* Premium Contact Content */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Left Side - Contact Info */}
            <motion.div
              variants={cardVariants}
              transition={{ delay: 0.2 }}
              className="space-y-10"
            >
              {/* Contact Card */}
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 lg:p-10 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-[0_0_60px_#00ff8820]">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-brand-600/10 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30"
                    >
                      <MessageCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {contactData.leftSide.title}
                      </h3>
                      <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                        {contactData.leftSide.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground/80 leading-relaxed mb-8 text-lg">
                    {contactData.leftSide.description}
                  </p>

                  {/* Contact Methods */}
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all duration-300"
                    >
                      <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                        <Mail className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-white font-medium">Email</div>
                        <div className="text-muted-foreground/80">contact@nWeerasinghe.com</div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all duration-300"
                    >
                      <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                        <Globe className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-white font-medium">Available Worldwide</div>
                        <div className="text-muted-foreground/80">Remote & On-site</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-center lg:text-left"
              >
                <h4 className="text-lg font-semibold text-white mb-6">Connect With Me</h4>
                <div className="flex justify-center lg:justify-start gap-4">
                  {contactData.rightSide.socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative w-14 h-14 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:border-emerald-500/30 transition-all duration-300">
                        <social.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              variants={cardVariants}
              transition={{ delay: 0.3 }}
            >
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 lg:p-10 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-[0_0_60px_#00ff8820]">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-brand-600/10 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="relative z-10">
                  {/* Form Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30"
                    >
                      <Send className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {contactData.rightSide.title}
                      </h3>
                      <p className="text-muted-foreground/80">I'll get back to you ASAP</p>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <form className="space-y-6">
                    {/* Name Input */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        {contactData.rightSide.form.name.label}
                      </label>
                      <input
                        type={contactData.rightSide.form.name.type}
                        id="name"
                        name="name"
                        placeholder={contactData.rightSide.form.name.placeholder}
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder-muted-foreground/50 focus:border-emerald-500/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                        required
                      />
                    </motion.div>

                    {/* Email Input */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        {contactData.rightSide.form.email.label}
                      </label>
                      <input
                        type={contactData.rightSide.form.email.type}
                        id="email"
                        name="email"
                        placeholder={contactData.rightSide.form.email.placeholder}
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder-muted-foreground/50 focus:border-emerald-500/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                        required
                      />
                    </motion.div>

                    {/* Message Input */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                        {contactData.rightSide.form.message.label}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder={contactData.rightSide.form.message.placeholder}
                        rows={contactData.rightSide.form.message.rows}
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder-muted-foreground/50 focus:border-emerald-500/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 resize-none"
                        required
                      />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-medium hover:bg-emerald-500/20 transition-all duration-300"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}