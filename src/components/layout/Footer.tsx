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
    <footer className="bg-white/80 backdrop-blur-xl border-t border-slate-300/80 shadow-lg shadow-slate-900/10 dark:bg-background dark:border-border/50">
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
                <h3 className="text-xl font-bold !text-slate-900 dark:!text-foreground">
                  Thamindu Nadeeja
                </h3>
                <p className="!text-slate-900 font-medium dark:!text-muted-foreground">
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
              <h4 className="text-sm font-semibold !text-slate-900 mb-4 dark:!text-muted-foreground">
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
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border border-emerald-400 bg-white/80 backdrop-blur-sm hover:border-emerald-500 hover:bg-emerald-100 transition-all duration-300 shadow-sm hover:shadow-md dark:border-border/50 dark:bg-white/5 dark:hover:border-primary/20 dark:hover:bg-primary/10"
                  >
                    <social.icon className="w-5 h-5 text-emerald-800 dark:text-muted-foreground" />
                    <span className="text-sm font-semibold !text-slate-900 dark:!text-foreground">{social.label}</span>
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
              <h4 className="text-sm font-semibold !text-slate-900 mb-4 dark:!text-muted-foreground">
                Quick Links
              </h4>
              <div className="flex flex-wrap justify-center gap-2">
                {footerData.quickLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="text-xs !text-slate-900 font-medium hover:text-emerald-800 transition-colors px-2 py-1 rounded hover:bg-emerald-50 dark:!text-muted-foreground dark:hover:text-primary dark:hover:bg-primary/10"
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
            className="border-t border-slate-400/80 pt-8 text-center dark:border-border/50"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 !text-slate-900 dark:!text-muted-foreground">
                <Heart className="w-4 h-4 text-emerald-800 dark:text-foreground" />
                <span className="text-sm font-medium">Made with</span>
              </div>
              <p className="text-sm !text-slate-900 font-medium dark:!text-muted-foreground">
                &copy; 2024 Thamindu Nadeeja. All rights reserved.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}