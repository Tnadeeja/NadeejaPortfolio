"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, MapPin, Send, User, Code, MessageCircle, Sparkles, ArrowRight, Phone, Globe, CheckCircle, AlertCircle, Loader2, Copy } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

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
        url: "mailto:nadeejatw@gmail.com",
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const [emailContent, setEmailContent] = useState('')
  const [showEmailFallback, setShowEmailFallback] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error')
      setStatusMessage('Please fill in all fields')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus('error')
      setStatusMessage('Please enter a valid email address')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    // Show sending state
    setStatus('sending')
    setStatusMessage('')

    // Create email content
    const subject = `Portfolio Contact: ${formData.name}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    const fullEmailContent = `To: nadeejatw@gmail.com\nSubject: ${subject}\n\n${body}`
    
    setEmailContent(fullEmailContent)

    // Try mailto link first
    const mailtoSubject = encodeURIComponent(`Portfolio Contact: ${formData.name}`)
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    const mailtoLink = `mailto:nadeejatw@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`

    try {
      // Try to open email client
      window.location.href = mailtoLink
      
      // Check if mailto worked (give it 2 seconds)
      setTimeout(() => {
        // If still on same page, mailto didn't work
        if (document.visibilityState === 'visible') {
          setShowEmailFallback(true)
          setStatus('error')
          setStatusMessage('Email client not found. Please use the options below.')
        } else {
          // Email client opened successfully
          setStatus('success')
          setStatusMessage('Email client opened! Please send the message to complete.')
          setFormData({ name: '', email: '', message: '' })
          setTimeout(() => setStatus('idle'), 5000)
        }
      }, 2000)
    } catch (error) {
      // Fallback if mailto fails
      setShowEmailFallback(true)
      setStatus('error')
      setStatusMessage('Email client not available. Please use the options below.')
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(emailContent)
      setStatus('success')
      setStatusMessage('Email content copied! Paste it in your email client.')
      setTimeout(() => setStatus('idle'), 3000)
    } catch (error) {
      setStatus('error')
      setStatusMessage('Failed to copy. Please copy manually.')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const openGmail = () => {
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=nadeejatw@gmail.com&su=${subject}&body=${body}`
    window.open(gmailLink, '_blank')
    
    setStatus('success')
    setStatusMessage('Gmail opened in new tab!')
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 3000)
  }

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
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-emerald-200 mb-6 dark:bg-emerald-500/10 dark:border-emerald-500/20"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mr-2" />
              <span className="text-sm font-semibold text-emerald-700 dark:font-medium dark:text-emerald-400">
                Let's Connect
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-teal-700 via-emerald-600 to-emerald-500 dark:from-emerald-400 dark:via-emerald-500 dark:to-brand-600 bg-clip-text text-transparent mb-6">
              Get In Touch
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-muted-foreground max-w-4xl mx-auto leading-relaxed">
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
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-slate-200/60 p-8 lg:p-10 hover:border-emerald-200 transition-all duration-500 shadow-[0_18px_50px_rgba(2,6,23,0.08)] hover:shadow-[0_22px_60px_rgba(2,6,23,0.12)] dark:border-white/10 dark:hover:border-emerald-500/30 dark:hover:shadow-[0_0_60px_#00ff8820]">
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
                      <MessageCircle className="w-6 h-6 text-emerald-700 dark:text-emerald-400" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 dark:text-white">
                        {contactData.leftSide.title}
                      </h3>
                      <p className="text-emerald-700 font-medium dark:text-emerald-400">
                        {contactData.leftSide.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed mb-8 text-lg dark:text-muted-foreground">
                    {contactData.leftSide.description}
                  </p>

                  {/* Contact Methods */}
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-emerald-200 hover:border-emerald-300 transition-all duration-300 dark:bg-white/5 dark:border-white/10 dark:hover:border-emerald-500/30"
                    >
                      <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/30">
                        <Mail className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-slate-900 font-medium dark:text-white">Email</div>
                        <div className="text-slate-600 dark:text-muted-foreground">nadeejatw@gmail.com</div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-emerald-200 hover:border-emerald-300 transition-all duration-300 dark:bg-white/5 dark:border-white/10 dark:hover:border-emerald-500/30"
                    >
                      <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/30">
                        <Globe className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-slate-900 font-medium dark:text-white">Location</div>
                        <div className="text-slate-600 dark:text-muted-foreground">Colombo, Sri Lanka</div>
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
                <h4 className="text-lg font-semibold text-slate-900 mb-6 dark:text-white">Connect With Me</h4>
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
                      <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:bg-emerald-500/20"></div>
                      <div className="relative w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm border border-emerald-200 flex items-center justify-center hover:border-emerald-300 transition-all duration-300 dark:bg-white/5 dark:border-white/10 dark:hover:border-emerald-500/30">
                        <social.icon className="w-6 h-6 text-emerald-700 dark:text-emerald-400" />
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
                      <Send className="w-6 h-6 text-emerald-700 dark:text-emerald-400" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {contactData.rightSide.title}
                      </h3>
                      <p className="text-slate-600 dark:text-muted-foreground">I'll get back to you ASAP</p>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Input */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2 dark:text-white">
                        {contactData.rightSide.form.name.label}
                      </label>
                      <input
                        type={contactData.rightSide.form.name.type}
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={contactData.rightSide.form.name.placeholder}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/10 backdrop-blur-sm text-slate-900 placeholder-slate-500 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-muted-foreground/50 dark:focus:border-emerald-500/30"
                        required
                        disabled={status === 'sending'}
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
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={contactData.rightSide.form.email.placeholder}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/10 backdrop-blur-sm text-slate-900 placeholder-slate-500 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-muted-foreground/50 dark:focus:border-emerald-500/30"
                        required
                        disabled={status === 'sending'}
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
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={contactData.rightSide.form.message.placeholder}
                        rows={contactData.rightSide.form.message.rows}
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder-muted-foreground/50 focus:border-emerald-500/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 resize-none"
                        required
                        disabled={status === 'sending'}
                      />
                    </motion.div>

                    {/* Fallback Options */}
                    {showEmailFallback && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-3"
                      >
                        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-200 text-amber-700 dark:bg-amber-500/10 dark:border-amber-500/30 dark:text-amber-400">
                          <p className="text-sm font-medium mb-3">Choose an option to send your message:</p>
                          
                          <div className="space-y-2">
                            <button
                              onClick={openGmail}
                              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-amber-200 text-amber-700 hover:bg-amber-50 transition-all duration-300 dark:bg-white/5 dark:border-amber-500/30 dark:hover:bg-amber-500/20"
                            >
                              <Mail className="w-4 h-4" />
                              <span className="text-sm font-medium">Open Gmail</span>
                            </button>
                            
                            <button
                              onClick={copyToClipboard}
                              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-amber-200 text-amber-700 hover:bg-amber-50 transition-all duration-300 dark:bg-white/5 dark:border-amber-500/30 dark:hover:bg-amber-500/20"
                            >
                              <Copy className="w-4 h-4" />
                              <span className="text-sm font-medium">Copy Email Content</span>
                            </button>
                          </div>
                          
                          <div className="mt-3 p-2 rounded-lg bg-black/5 border border-amber-200/30 dark:bg-black/10">
                            <p className="text-xs font-mono text-amber-600 dark:text-amber-400">
                              Email: nadeejatw@gmail.com
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Status Messages */}
                    {status === 'success' && !showEmailFallback && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-200 text-emerald-700 dark:bg-emerald-500/10 dark:border-emerald-500/30 dark:text-emerald-400"
                      >
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm font-medium">{statusMessage}</span>
                      </motion.div>
                    )}
                    
                    {status === 'error' && !showEmailFallback && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-200 text-red-700 dark:bg-red-500/10 dark:border-red-500/30 dark:text-red-400"
                      >
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm font-medium">{statusMessage}</span>
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      whileHover={{ scale: status === 'sending' ? 1 : 1.02, x: status === 'sending' ? 0 : 5 }}
                      whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                      disabled={status === 'sending'}
                      className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-emerald-500/10 border border-emerald-200 text-emerald-700 font-medium hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 dark:border-emerald-500/30 dark:text-emerald-400 dark:hover:bg-emerald-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Opening Email Client...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                          <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </>
                      )}
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