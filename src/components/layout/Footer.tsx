"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

const footerData = {
  social: [
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
  ],
  quickLinks: [
    {
      label: "Home",
      url: "/"
    },
    {
      label: "About",
      url: "#about"
    },
    {
      label: "Skills",
      url: "#skills"
    },
    {
      label: "Projects",
      url: "#projects"
    },
    {
      label: "Contact",
      url: "#contact"
    }
  ]
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

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
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

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container-wide">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto py-12"
        >
          {/* Main Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <motion.div
              variants={itemVariants}
              transition={{ delay: 0.1 }}
              className="text-center lg:text-left"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">
                  Thamindu Nadeeja
                </h3>
                <p className="text-muted-foreground">
                  Data Science & Full Stack Developer
                </p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              transition={{ delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <h4 className="text-sm font-semibold text-muted-foreground mb-4">
                Connect
              </h4>
              <div className="flex justify-center gap-4">
                {footerData.social.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border/50 hover:border-primary/20 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              variants={itemVariants}
              transition={{ delay: 0.3 }}
              className="text-center lg:text-left"
            >
              <h4 className="text-sm font-semibold text-muted-foreground mb-4">
                Quick Links
              </h4>
              <div className="flex flex-wrap justify-center gap-2">
                {footerData.quickLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            variants={itemVariants}
            transition={{ delay: 0.4 }}
            className="border-t border-border/50 pt-8 text-center"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Heart className="w-4 h-4" />
                <span className="text-sm">Made with</span>
              </div>
              <p className="text-sm text-muted-foreground">
                © 2024 Thamindu Nadeeja. All rights reserved.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}