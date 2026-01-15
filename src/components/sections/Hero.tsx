"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react"
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
    <section id="home" className="section min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden">
      <div className="container-wide relative z-10">
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
              <h2 className="text-xl md:text-2xl font-light text-slate-600 dark:text-muted-foreground/70 tracking-wide">
                Hi, I'm
              </h2>
            </motion.div>

            {/* Name */}
            <motion.div
              variants={itemVariants}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-teal-700 via-emerald-600 to-emerald-500 dark:from-emerald-400 dark:via-emerald-500 dark:to-brand-600 bg-clip-text text-transparent leading-tight">
                Thamindu Weerasinghe
              </h1>
            </motion.div>

            {/* Role Badge */}
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/70 border border-emerald-200 shadow-sm shadow-emerald-900/5 dark:bg-emerald-500/10 dark:backdrop-blur-sm dark:border-emerald-500/20">
                <span className="text-sm md:text-base font-semibold text-emerald-700 dark:font-medium dark:text-emerald-400">
                  IT Undergraduate · Data Science Specialist
                </span>
              </div>
            </motion.div>

            {/* Professional Summary */}
            <motion.div
              variants={itemVariants}
              className="mb-12 max-w-lg"
            >
              <p className="text-base md:text-lg text-slate-600 dark:text-muted-foreground/80 leading-relaxed">
                Building intelligent solutions through data-driven development and clean code architecture. 
                Currently developing expertise in machine learning while pursuing IT undergraduate studies.
              </p>
            </motion.div>

            {/* Icon-based Action Bar */}
            <motion.div
              variants={itemVariants}
              transition={{ delay: 1.2 }}
              className="flex items-center justify-start gap-6 mt-12"
            >
              {/* Primary CTA */}
              <motion.a
                href="/cv.pdf"
                download
                variants={buttonVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(16, 185, 129, 0.5)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="relative inline-flex items-center gap-3 rounded-2xl px-6 py-3 bg-emerald-600 text-white shadow-sm shadow-emerald-900/15 hover:bg-emerald-700 dark:bg-white/5 dark:backdrop-blur-md dark:border dark:border-emerald-500/30 dark:text-white">
                  <Download className="w-5 h-5 text-white dark:w-6 dark:h-6" />
                  <span className="font-semibold">Get Resume</span>
                </div>
              </motion.a>

              {/* Icon Buttons */}
              <div className="flex items-center gap-4">
                {/* GitHub Button */}
                <motion.button
                  variants={buttonVariants}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => window.open("https://github.com", "_blank")}
                  className="relative group"
                  title="GitHub"
                >
                  <div className="relative rounded-full p-3 bg-white/70 border border-emerald-200 text-emerald-700 shadow-sm shadow-emerald-900/10 hover:bg-emerald-50 dark:p-4 dark:bg-white/5 dark:backdrop-blur-md dark:border-emerald-500/30">
                    <Github className="w-5 h-5 text-emerald-700 dark:w-6 dark:h-6 dark:text-emerald-400" />
                  </div>
                </motion.button>

                {/* LinkedIn Button */}
                <motion.button
                  variants={buttonVariants}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => window.open("https://linkedin.com", "_blank")}
                  className="relative group"
                  title="LinkedIn"
                >
                  <div className="relative rounded-full p-3 bg-white/70 border border-emerald-200 text-emerald-700 shadow-sm shadow-emerald-900/10 hover:bg-emerald-50 dark:p-4 dark:bg-white/5 dark:backdrop-blur-md dark:border-emerald-500/30">
                    <Linkedin className="w-5 h-5 text-emerald-700 dark:w-6 dark:h-6 dark:text-emerald-400" />
                  </div>
                </motion.button>

                {/* Email Button */}
                <motion.button
                  variants={buttonVariants}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => window.open("mailto:contact@nadeeja.com")}
                  className="relative group"
                  title="Email"
                >
                  <div className="relative rounded-full p-3 bg-white/70 border border-emerald-200 text-emerald-700 shadow-sm shadow-emerald-900/10 hover:bg-emerald-50 dark:p-4 dark:bg-white/5 dark:backdrop-blur-md dark:border-emerald-500/30">
                    <Mail className="w-5 h-5 text-emerald-700 dark:w-6 dark:h-6 dark:text-emerald-400" />
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              {/* Premium Profile Image Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Animated Gradient Ring */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1,
                    rotate: 360 
                  }}
                  transition={{ 
                    scale: { duration: 1.5, delay: 0.6, ease: "easeOut" },
                    opacity: { duration: 1.5, delay: 0.6, ease: "easeOut" },
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" }
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-300 opacity-30 blur-2xl dark:from-emerald-400 dark:via-emerald-500 dark:to-brand-600 dark:opacity-60 dark:blur-md"
                ></motion.div>
                
                {/* Glassmorphism Halo */}
                <div className="absolute inset-4 rounded-full bg-white/70 border border-emerald-200 shadow-xl shadow-slate-900/5 dark:bg-background/20 dark:backdrop-blur-xl dark:border-emerald-500/20"></div>
                
                {/* Profile Image Container */}
                <div className="absolute inset-6 rounded-full overflow-hidden bg-white border border-slate-200 shadow-[0_22px_60px_rgba(2,6,23,0.12)] dark:bg-card/50 dark:backdrop-blur-sm dark:border-border/50 dark:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-500/10 dark:from-emerald-500/10 dark:via-transparent dark:to-brand-700/20"></div>
                  
                  {/* Profile Image */}
                  <motion.div
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ 
                      scale: 1.02, 
                      rotate: 2,
                      filter: 'drop-shadow(0 0 30px rgba(16, 185, 129, 0.4))'
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="relative w-full h-full rounded-full overflow-hidden"
                  >
                    <Image
                      src="/images/profile.jpg"
                      alt="Thamindu Weerasinghe"
                      fill
                      className="object-cover"
                      sizes="(max-width: 320px) 100vw, (max-width: 384px) 50vw, (max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, (max-width: 1280px) 17vw"
                      style={{
                        filter: 'drop-shadow(0 0 25px rgba(16, 185, 129, 0.25))'
                      }}
                      priority={true}
                      quality={95}
                    />
                    
                    {/* Subtle overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent/30 dark:via-background/20 dark:to-transparent/60"></div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Scroll Hint */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-emerald-500 dark:text-emerald-400"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
          <span className="text-xs text-muted-foreground/60">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  )
}