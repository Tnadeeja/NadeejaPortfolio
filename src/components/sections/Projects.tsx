"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Eye, Calendar, Code, Database, Cloud, Smartphone, Award, Users, Zap, Globe, ArrowRight, Star, TrendingUp } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const projectsData = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    shortDescription: "Modern, responsive portfolio showcasing full-stack development skills with premium UI/UX design.",
    description: "A cutting-edge personal portfolio website built with Next.js 14 and TypeScript, featuring a modern glassmorphism design with Framer Motion animations. The portfolio demonstrates advanced frontend development skills including responsive design, component-based architecture, and optimized performance. Key features include smooth scroll navigation, interactive project showcases, skills sections with logo grids, and contact forms. The project emphasizes clean code practices, accessibility standards, and mobile-first design principles, serving as a comprehensive demonstration of modern web development capabilities.",
    tech: ["Next.js 14", "TypeScript", "React.js", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
    github: "https://github.com/Tnadeeja/NadeejaPortfolio",
    demo: "https://nadeeja-portfolio.vercel.app",
    image: "/images/p6.jpg",
    featured: true,
    tags: ["Portfolio", "Next.js", "TypeScript", "Modern UI", "Full-Stack"],
    status: "completed",
    year: "2025"
  },
  {
    id: 2,
    title: "Full-Stack E-Commerce Platform",
    shortDescription: "Academic MERN-based clothing e-commerce platform developed as a team project at SLIIT.",
    description: "A full-stack clothing e-commerce web application developed as part of the IT Project (ITP) module at SLIIT. The system simulates a real-world online shopping workflow with separate roles for customers, administrators, and delivery staff. Core features include product management, order processing, multiple payment methods, delivery tracking, returns, and refunds. The project focused on modular architecture, RESTful API design, secure authentication, and team-based software development practices.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "PayHere (Sandbox)", "Docker", "Nginx", "Tailwind CSS"],
    github: "https://github.com/SupunKalharaJayasinghe/clothing-ecommerce",
    demo: "https://ecommerce-demo.nWeerasinghe.com",
    image: "/images/p1.jpg",
    featured: true,
    tags: ["MERN Stack", "E-Commerce", "Academic Project", "Full-Stack Development", "SLIIT"],
    status: "completed",
    year: "2025"
  },
  {
    id: 3,
    title: "BrightWell – Personal Wellness & Habit Tracker",
    shortDescription: "Android wellness application for habit tracking, mood journaling, and hydration reminders.",
    description: "BrightWell is a personal wellness Android application developed as part of an academic project at SLIIT. The app helps users build healthy routines by tracking daily habits, monitoring mood patterns, and managing hydration reminders. It includes features such as custom habit creation with progress tracking and streaks, a mood journal with emoji-based entries and history view, configurable hydration notifications, and a home-screen widget for quick access and real-time habit completion. The project focused on Android app architecture, UI responsiveness, local data persistence, and background task handling.",
    tech: ["Kotlin", "Android Studio", "Android SDK", "Fragment-based Navigation", "MVVM (Lite Architecture)", "SharedPreferences", "Gson", "Android Widgets", "Notifications API"],
    github: "https://github.com/Tnadeeja/BrightWell",
    demo: "https://brightwell-demo.nWeerasinghe.com",
    image: "/images/p2.jpg",
    featured: false,
    tags: ["Android Development", "Wellness App", "Academic Project", "Mobile Application", "SLIIT"],
    status: "completed",
    year: "2025"
  },
  {
    id: 4,
    title: "BMI Calculator Web Application",
    shortDescription: "Responsive web application to calculate BMI with interactive visual feedback.",
    description: "The BMI Calculator is a self-initiated front-end web application developed to strengthen core web development skills and explore responsive, interactive UI design. The application allows users to input weight, height, gender, and age to calculate Body Mass Index (BMI) and displays results using an animated progress bar, BMI category indicators, and basic health guidance. The project focused on clean UI/UX design, DOM manipulation using vanilla JavaScript, responsive layouts for mobile and desktop devices, and deploying a polished front-end project using GitHub Pages.",
    tech: ["HTML5", "CSS3", "JavaScript (Vanilla)", "Responsive Design", "DOM Manipulation", "GitHub Pages"],
    github: "https://github.com/Tnadeeja/BMI-Calculator",
    demo: "https://tnadeeja.github.io/BMI-Calculator/",
    image: "/images/p3.jpg",
    featured: false,
    tags: ["Front-End Development", "JavaScript", "Responsive Design", "Self-Initiated Project", "Web Application"],
    status: "completed",
    year: "2025"
  },
  {
    id: 5,
    title: "SmartStock – Online Stock Management System",
    shortDescription: "Role-based web system for managing inventory, purchases, returns, and reports",
    description: "SmartStock is a comprehensive online stock management system developed as a second-year group project at SLIIT. The system provides a centralized, web-based solution for managing inventory operations such as product purchases, outgoing stock, returns of damaged or expired items, supplier and customer records, and real-time report generation. Built using the MVC architectural pattern and core OOP principles, the application supports multiple user roles including Admin, Stock Manager, Sales Manager, Account Manager, and Warehouse Staff, each with role-specific access. The system features secure authentication, email-based password reset, notifications, and a responsive UI designed for real-world business workflows.",
    tech: ["Java", "MySQL", "HTML", "Tailwind CSS", "JavaScript", "MVC Architecture", "Object-Oriented Programming"],
    github: "https://github.com/Tnadeeja/SmartStock",
    demo: null,
    image: "/images/p4.jpg",
    featured: false,
    tags: ["Inventory Management", "Full-Stack", "MVC", "OOP", "Enterprise System"],
    status: "completed",
    year: "2025"
  },
  {
    id: 6,
    title: "Online Teacher Trainer Web Application",
    shortDescription: "Role-based learning platform for teacher training and course management",
    description: "The Online Teacher Trainer Web Application is a role-based educational platform developed as a university group project at SLIIT. The system is designed to support teacher professional development by allowing users to register either as teacher trainees who can enroll in courses and lectures, or as lecturers who can create, manage, and deliver educational content. The platform features secure authentication, role-based access control, course and lecture management, admin moderation tools, and a dual-role system that allows users to switch between trainee and lecturer roles seamlessly. The front end focuses on usability and responsiveness, while the back end ensures reliable data handling and access control for a structured digital learning experience.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/LakviduUpasara/Teach_wave_ELMS",
    demo: "https://github.com/LakviduUpasara/Teach_wave_ELMS",
    image: "/images/p5.jpg",
    featured: true,
    tags: ["E-Learning", "Role-Based System", "Full-Stack", "Education Platform"],
    status: "completed",
    year: "2024"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
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

const tagVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
}

export function Projects() {
  return (
    <section id="projects" className="section overflow-hidden relative">
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
              <Star className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mr-2" />
              <span className="text-sm font-semibold text-emerald-700 dark:font-medium dark:text-emerald-400">
                Featured Projects
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-teal-700 via-emerald-600 to-emerald-500 dark:from-emerald-400 dark:via-emerald-500 dark:to-brand-600 bg-clip-text text-transparent mb-6">
              Innovation Portfolio
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Cutting-edge projects showcasing advanced development skills, innovative solutions, 
              and real-world impact across multiple technologies and industries.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                transition={{ delay: index * 0.15 }}
                className="group h-full"
              >
                {/* Premium Project Card */}
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-slate-200/60 overflow-hidden hover:border-emerald-200 transition-all duration-500 shadow-[0_18px_50px_rgba(2,6,23,0.08)] hover:shadow-[0_22px_60px_rgba(2,6,23,0.12)] dark:border-white/10 dark:hover:border-emerald-500/30 dark:hover:shadow-[0_0_60px_#00ff8820] h-full flex flex-col">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/8 via-transparent to-emerald-500/6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 dark:from-emerald-500/10 dark:to-brand-600/10"></div>
                  
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    {project.image && (
                      <>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        
                        {/* Image Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                        
                        {/* Floating Status Badge */}
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.5 + index * 0.3 }}
                          className="absolute top-4 right-4"
                        >
                          <div className={cn(
                            "px-4 py-2 rounded-full backdrop-blur-md border text-sm font-medium",
                            project.status === "completed" 
                              ? "bg-emerald-500/20 text-emerald-700 border-emerald-200 dark:text-emerald-400 dark:border-emerald-500/30"
                              : "bg-amber-500/20 text-amber-700 border-amber-200 dark:text-amber-400 dark:border-amber-500/30"
                          )}>
                            {project.status === "completed" ? "✨ Launched" : "🚀 In Progress"}
                          </div>
                        </motion.div>
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="relative p-6 flex flex-col flex-1">
                    {/* Project Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors dark:text-white dark:group-hover:text-emerald-400">
                          {project.title}
                        </h3>
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                          className="flex-shrink-0 ml-4"
                        >
                          <div className="p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/30">
                            <TrendingUp className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
                          </div>
                        </motion.div>
                      </div>
                      
                      <p className="text-slate-600 leading-relaxed text-sm dark:text-muted-foreground line-clamp-2">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 5).map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          variants={tagVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{ delay: 0.8 + index * 0.3 + techIndex * 0.05 }}
                          className="inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-200 text-emerald-700 text-xs font-medium dark:border-emerald-500/20 dark:text-emerald-400"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-auto flex items-center gap-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-200 text-emerald-700 font-medium hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 dark:border-emerald-500/30 dark:text-emerald-400 dark:hover:bg-emerald-500/20"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Code</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects */}
          <motion.div
            variants={cardVariants}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <motion.a
              href="https://github.com/nWeerasinghe"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-emerald-200 text-emerald-800 font-semibold hover:bg-white/10 hover:shadow-[0_16px_45px_rgba(2,6,23,0.10)] transition-all duration-300 dark:bg-emerald-500/10 dark:border-emerald-500/30 dark:text-emerald-400 dark:font-medium dark:hover:bg-emerald-500/20"
            >
              <Github className="w-4 h-4" />
              <span>View All Projects</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}