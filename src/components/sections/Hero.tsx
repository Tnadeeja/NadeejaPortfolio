"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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
        damping: 10,
      },
    },
  }

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 600,
        damping: 10,
      },
    },
  }

  return (
    <section id="home" className="section min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container-wide">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Greeting */}
          <motion.div
            variants={itemVariants}
            className="mb-4"
          >
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
              Hi, I'm
            </h2>
          </motion.div>

          {/* Name */}
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gradient leading-tight">
              Thamindu Nadeeja
            </h1>
          </motion.div>

          {/* Role */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl font-semibold text-foreground/90">
              IT Undergraduate · Data Science Specialist
            </p>
          </motion.div>

          {/* Professional Summary */}
          <motion.div
            variants={itemVariants}
            className="mb-12 max-w-2xl"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Passionate about leveraging data science and machine learning to drive innovative solutions. 
              Currently pursuing IT undergraduate studies while specializing in advanced analytics and 
              artificial intelligence applications.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delayChildren: 0.8, staggerChildren: 0.1 }}
            className="flex flex-wrap gap-4"
          >
            {/* GitHub Button */}
            <motion.a
              variants={buttonVariants}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover="hover"
              whileTap="tap"
              className={cn(
                "btn btn-primary inline-flex items-center gap-2 px-6 py-3",
                "text-base font-medium"
              )}
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </motion.a>

            {/* LinkedIn Button */}
            <motion.a
              variants={buttonVariants}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover="hover"
              whileTap="tap"
              className={cn(
                "btn btn-secondary inline-flex items-center gap-2 px-6 py-3",
                "text-base font-medium"
              )}
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </motion.a>

            {/* Contact Button */}
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => {
                const element = document.querySelector("#contact")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className={cn(
                "btn btn-ghost inline-flex items-center gap-2 px-6 py-3",
                "text-base font-medium border border-border"
              )}
            >
              <Mail className="h-5 w-5" />
              <span>Contact</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}