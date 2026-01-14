"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Eye, Calendar, Code, Database, Cloud, Smartphone, Award, Users, Zap, Globe, ArrowRight, Star, TrendingUp } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const projectsData = [
  {
    id: 1,
    title: "BrightWell",
    shortDescription: "Personal wellness Android app with habit tracking and mood logging",
    description: "A comprehensive wellness application designed for daily habit tracking, mood monitoring, and personal growth. Features include customizable habit creation, streak tracking, mood analytics, and motivational reminders.",
    tech: ["Kotlin", "Android", "MVVM", "Room Database", "Coroutines", "Material Design"],
    github: "https://github.com/nWeerasinghe/brightwell",
    demo: null,
    image: "/images/lakdiva.jpg",
    featured: true,
    tags: ["Android", "Kotlin", "Mobile App", "Wellness"],
    status: "completed",
    year: "2024"
  },
  {
    id: 2,
    title: "DataFlow Analytics",
    shortDescription: "Real-time data visualization dashboard for business intelligence",
    description: "Enterprise-grade analytics dashboard providing real-time data visualization and business intelligence. Transforms complex datasets into actionable insights with interactive charts and predictive analytics.",
    tech: ["React", "Next.js", "TypeScript", "D3.js", "PostgreSQL", "Redis", "WebSocket"],
    github: "https://github.com/nWeerasinghe/dataflow-analytics",
    demo: "https://dataflow-demo.nWeerasinghe.com",
    image: "/images/dataflow.jpg",
    featured: true,
    tags: ["Data Science", "Analytics", "Dashboard", "React"],
    status: "completed",
    year: "2024"
  },
  {
    id: 3,
    title: "CloudSync Platform",
    shortDescription: "Multi-cloud file synchronization and backup service",
    description: "Cross-platform cloud synchronization service enabling seamless file backup across multiple cloud providers. Features real-time sync, version control, and automated backup scheduling.",
    tech: ["Node.js", "TypeScript", "AWS", "Google Cloud", "Azure", "Docker", "REST APIs"],
    github: "https://github.com/nWeerasinghe/cloudsync",
    demo: "https://cloudsync-demo.nWeerasinghe.com",
    image: "/images/cloudsync.jpg",
    featured: false,
    tags: ["Cloud", "SaaS", "Node.js", "AWS"],
    status: "in-progress",
    year: "2024"
  },
  {
    id: 4,
    title: "EduConnect",
    shortDescription: "Educational platform connecting students and instructors",
    description: "Educational technology platform facilitating seamless connection between students and instructors. Features video conferencing, assignment management, and collaborative learning tools.",
    tech: ["React", "Next.js", "TypeScript", "WebRTC", "MongoDB", "Socket.io", "Tailwind CSS"],
    github: "https://github.com/nWeerasinghe/educonnect",
    demo: "https://educonnect-demo.nWeerasinghe.com",
    image: "/images/educonnect.jpg",
    featured: true,
    tags: ["Education", "EdTech", "React", "WebRTC"],
    status: "completed",
    year: "2023"
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
              className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 mb-6"
            >
              <Star className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mr-2" />
              <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                Featured Projects
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-emerald-400 via-emerald-500 to-brand-600 bg-clip-text text-transparent mb-6">
              Innovation Portfolio
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Cutting-edge projects showcasing advanced development skills, innovative solutions, 
              and real-world impact across multiple technologies and industries.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                transition={{ delay: index * 0.15 }}
                className="group"
              >
                {/* Premium Project Card */}
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-emerald-500/30 transition-all duration-500 hover:shadow-[0_0_60px_#00ff8820]">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-brand-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Project Image */}
                  <div className="relative h-64 lg:h-80 overflow-hidden">
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
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                        
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
                              ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                              : "bg-amber-500/20 text-amber-400 border-amber-500/30"
                          )}>
                            {project.status === "completed" ? "✨ Launched" : "🚀 In Progress"}
                          </div>
                        </motion.div>
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="relative p-8 lg:p-10">
                    {/* Project Header */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                          {project.title}
                        </h3>
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                          className="flex-shrink-0 ml-4"
                        >
                          <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                            <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                          </div>
                        </motion.div>
                      </div>
                      
                      <p className="text-muted-foreground/80 leading-relaxed text-lg">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.slice(0, 4).map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          variants={tagVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{ delay: 0.8 + index * 0.3 + techIndex * 0.05 }}
                          className="inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.tech.length > 4 && (
                        <motion.span
                          variants={tagVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{ delay: 0.8 + index * 0.3 + 0.2 }}
                          className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/70 text-xs font-medium"
                        >
                          +{project.tech.length - 4}
                        </motion.span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-medium hover:bg-emerald-500/20 transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Code</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.a>

                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </motion.a>
                      )}
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
              className="btn btn-ghost inline-flex items-center gap-2 px-6 py-3 text-sm font-medium"
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