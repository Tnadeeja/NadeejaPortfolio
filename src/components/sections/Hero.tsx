"use client"



import { motion } from "framer-motion"

import { Github, Linkedin, Mail, Download, ChevronDown, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

import Image from "next/image"

import { useEffect, useRef } from "react"



export function Hero() {

  const canvasRef = useRef<HTMLCanvasElement>(null)

  

  useEffect(() => {

    const canvas = canvasRef.current

    if (!canvas) return

    

    const ctx = canvas.getContext('2d')

    if (!ctx) return

    

    // Set canvas size

    const resizeCanvas = () => {

      canvas.width = window.innerWidth

      canvas.height = window.innerHeight

    }

    

    resizeCanvas()

    window.addEventListener('resize', resizeCanvas)

    

    // Animation variables

    let time = 0

    const nodes: Array<{

      x: number

      y: number

      vx: number

      vy: number

      size: number

      opacity: number

      connections: number[]

    }> = []

    

    // Create neural network particles

    // Create central hub nodes

    for (let i = 0; i < 8; i++) {

      const angle = (i / 8) * Math.PI * 2

      const radius = 100 + Math.random() * 50

      nodes.push({

        x: canvas.width / 2 + Math.cos(angle) * radius,

        y: canvas.height / 2 + Math.sin(angle) * radius,

        vx: (Math.random() - 0.5) * 0.2,

        vy: (Math.random() - 0.5) * 0.2,

        size: 4 + Math.random() * 2,

        opacity: 0.8 + Math.random() * 0.2,

        connections: []

      })

    }

    

    // Create satellite nodes

    for (let i = 0; i < 30; i++) {

      nodes.push({

        x: Math.random() * canvas.width,

        y: Math.random() * canvas.height,

        vx: (Math.random() - 0.5) * 0.3,

        vy: (Math.random() - 0.5) * 0.3,

        size: 1 + Math.random() * 2,

        opacity: 0.4 + Math.random() * 0.3,

        connections: []

      })

    }

    

    // Animation loop

    const animate = () => {

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      

      // Get theme colors

      const isDark = document.documentElement.classList.contains('dark')

      const particleColor = isDark ? 'rgba(16, 185, 129, 0.3)' : 'rgba(5, 150, 105, 0.2)'

      const lineColor = isDark ? 'rgba(16, 185, 129, 0.1)' : 'rgba(5, 150, 105, 0.1)'

      

      // Update and draw nodes

      nodes.forEach((node, i) => {

        node.x += node.vx

        node.y += node.vy

        

        // Bounce off edges

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1

        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        

        // Draw node

        ctx.beginPath()

        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2)

        ctx.fillStyle = particleColor

        ctx.fill()

        

        // Draw connections

        nodes.forEach((otherNode, j) => {

          if (i !== j) {

            const dx = node.x - otherNode.x

            const dy = node.y - otherNode.y

            const distance = Math.sqrt(dx * dx + dy * dy)

            

            if (distance < 150) {

              ctx.beginPath()

              ctx.moveTo(node.x, node.y)

              ctx.lineTo(otherNode.x, otherNode.y)

              ctx.strokeStyle = lineColor

              ctx.lineWidth = 0.5

              ctx.stroke()

            }

          }

        })

      })

      

      time += 0.01

      requestAnimationFrame(animate)

    }

    

    animate()

    

    return () => {

      window.removeEventListener('resize', resizeCanvas)

    }

  }, [])

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

      {/* Animated Canvas Background */}

      <canvas

        ref={canvasRef}

        className="absolute inset-0 w-full h-full"

        style={{ zIndex: 1 }}

      />

      

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

              <h2 className="text-xl md:text-2xl font-light text-slate-600 dark:text-muted-foreground tracking-wide">

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
                  IT Undergraduate · Data Science & Full-Stack Development
                </span>

              </div>

            </motion.div>



            {/* Professional Summary */}

            <motion.div

              variants={itemVariants}

              className="mb-12 max-w-lg"

            >

              <p className="text-base md:text-lg text-slate-600 dark:text-muted-foreground leading-relaxed">
                I am an IT undergraduate with a strong interest in data science and full-stack development. I enjoy building practical, real-world applications, working with data, and continuously learning modern technologies through academic projects and self-driven development.
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

                href="/Thamindu Weerasinghe Resume.pdf"

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