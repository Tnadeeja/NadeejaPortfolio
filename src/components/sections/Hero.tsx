"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -5 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12,
        delay: 0.4,
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
          className="max-w-6xl grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content - Text */}
          <div className="space-y-4 lg:space-y-6">
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
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gradient leading-tight">
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
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              variants={imageVariants}
              className="relative"
            >
              {/* Glassmorphism Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Subtle green accent ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-600/20 to-brand-500/20 dark:from-brand-500/30 dark:to-brand-600/30 blur-xl"></div>
                
                {/* Profile Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-brand-600/10 dark:from-primary/10 dark:via-transparent dark:to-brand-700/20"></div>
                  
                  {/* Profile Image */}
                  <motion.div
                    whileHover={{ scale: 1.02, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="relative w-full h-full rounded-full overflow-hidden"
                  >
                    <Image
                      src="/images/profile.jpg"
                      alt="Thamindu Nadeeja"
                      fill
                      className="object-cover"
                      sizes="(max-width: 320px) 100vw, (max-width: 384px) 50vw, (max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, (max-width: 1280px) 17vw"
                      style={{
                        filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.15))'
                      }}
                      priority={true}
                      quality={95}
                    />
                    
                    {/* Subtle overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-background/20 to-transparent/40 dark:via-background/30 dark:to-transparent/60"></div>
                  </motion.div>
                </div>

                {/* Mobile Hide - Hide on smaller screens */}
                <div className="lg:hidden absolute -bottom-4 left-1/2 right-1/2 text-center">
                  <p className="text-xs text-muted-foreground/60">
                    Scroll to explore
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}