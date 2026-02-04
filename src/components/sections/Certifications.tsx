"use client"

import { motion } from "framer-motion"
import { Award, BookOpen, Calendar, Code, Database, Globe, Users, Zap, TrendingUp, MapPin, Clock, CheckCircle, AlertCircle, ArrowRight, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const certificationsData = [
  {
    id: 1,
    title: "Power BI for Beginners",
    issuer: "Microsoft",
    date: "2025",
    status: "completed",
    description: "Introductory certification focused on building interactive dashboards and data visualizations using Power BI.",
    focusAreas: [
      "Power BI fundamentals",
      "Data visualization",
      "Dashboard design",
      "Basic data modeling"
    ],
    icon: Database
  },
  {
    id: 2,
    title: "Python Programming",
    issuer: "University of Moratuwa",
    date: "2025",
    status: "completed",
    description: "Comprehensive Python programming course covering fundamentals, object-oriented programming, data structures, and algorithmic thinking.",
    focusAreas: [
      "Python fundamentals",
      "Object-Oriented Programming (OOP)",
      "Data structures",
      "Databases"
    ],
    icon: Code
  },
  {
    id: 3,
    title: "Python for Beginners",
    issuer: "University of Moratuwa",
    date: "2025",
    status: "completed",
    description: "Introductory course covering core Python syntax, control structures, and problem-solving concepts for beginners.",
    focusAreas: [
      "Python syntax",
      "Control structures",
      "Functions",
      "Basic problem solving"
    ],
    icon: Code
  },
  {
    id: 4,
    title: "AI/ML Engineer – Stage 1",
    issuer: "Sri Lanka Institute of Information Technology (SLIIT)",
    date: "2025",
    status: "completed",
    description: "Foundation-level AI & Machine Learning program introducing essential concepts, tools, and guided projects.",
    focusAreas: [
      "Introduction to AI & Machine Learning",
      "ML prerequisites & tools",
      "Computer Vision (guided project)",
      "Natural Language Processing (guided project)"
    ],
    icon: TrendingUp
  },
  {
    id: 5,
    title: "AI/ML Engineer – Stage 2",
    issuer: "Sri Lanka Institute of Information Technology (SLIIT)",
    date: "2025",
    status: "in-progress",
    description: "Advanced AI & Machine Learning program focused on supervised learning algorithms and real-world model development.",
    focusAreas: [
      "Supervised machine learning algorithms",
      "Model training & evaluation",
      "Applied ML tools & techniques",
      "Real-world problem solving"
    ],
    icon: TrendingUp
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

const iconVariants = {
  hidden: { scale: 0, opacity: 0 },
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

export function Certifications() {
  return (
    <section id="certifications" className="section overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-brand-600/5"></div>
      
      <div className="container-wide relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto"
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
              <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mr-2" />
              <span className="text-sm font-semibold text-emerald-700 dark:font-medium dark:text-emerald-400">
                Learning Journey
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-teal-700 via-emerald-600 to-emerald-500 dark:from-emerald-400 dark:via-emerald-500 dark:to-brand-600 bg-clip-text text-transparent mb-6">
              Learning Roadmap
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-slate-600 dark:text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
              Continuous learning journey showcasing discipline, expertise growth, and professional development 
              through structured education and industry certifications.
            </p>
          </motion.div>

          {/* Premium Roadmap Timeline */}
          <div className="relative">
            {/* Animated Timeline Line */}
            <motion.div 
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-brand-600 to-emerald-500/30 origin-top"
            ></motion.div>
            
            {/* Timeline Items */}
            <div className="space-y-12 sm:space-y-8 md:space-y-16">
              {certificationsData.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  variants={cardVariants}
                  transition={{ delay: index * 0.2 }}
                  className={cn(
                    "relative flex items-center",
                    index % 2 === 0 ? "flex-col sm:flex-row" : "flex-col sm:flex-row-reverse"
                  )}
                >
                  {/* Timeline Node */}
                  <motion.div
                    variants={iconVariants}
                    className="relative z-20 flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
                  >
                    <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-xl dark:bg-emerald-500/20"></div>
                    <div className={cn(
                      "relative w-full h-full rounded-full border-2 flex items-center justify-center backdrop-blur-sm",
                      cert.status === "completed" 
                        ? "bg-white/10 border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/50"
                        : "bg-white/10 border-amber-200 dark:bg-amber-500/10 dark:border-amber-500/50"
                    )}>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {cert.status === "completed" ? (
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-emerald-700 dark:text-emerald-400" />
                        ) : (
                          <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-amber-700 dark:text-amber-400" />
                        )}
                      </motion.div>
                    </div>
                    
                    {/* Year Badge */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.8 + index * 0.2 }}
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
                    >
                      <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-200 backdrop-blur-sm dark:border-emerald-500/30">
                        <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                          {cert.date}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    variants={cardVariants}
                    transition={{ delay: 0.3 + index * 0.2 }}
                    className={cn(
                      "flex-1 ml-8 md:ml-0",
                      index % 2 === 0 ? "md:mr-8 md:pl-12" : "md:ml-8 md:pr-12"
                    )}
                  >
                    <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-slate-200/60 p-6 md:p-8 hover:border-emerald-200 transition-all duration-500 shadow-[0_18px_50px_rgba(2,6,23,0.08)] hover:shadow-[0_22px_60px_rgba(2,6,23,0.12)] group dark:border-white/10 dark:hover:border-emerald-500/30 dark:hover:shadow-[0_0_40px_#00ff8815]">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/8 via-transparent to-emerald-500/6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl dark:from-emerald-500/10 dark:to-brand-600/10"></div>
                      
                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                                className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border-0 dark:bg-emerald-500/10 dark:border-0"
                              >
                                <cert.icon className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
                              </motion.div>
                              <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors dark:text-white dark:group-hover:text-emerald-400">
                                {cert.title}
                              </h3>
                            </div>
                            
                            <div className="flex items-center gap-2 text-slate-600 dark:text-white/90">
                              <MapPin className="w-4 h-4 dark:text-emerald-400" />
                              <span className="text-sm font-medium">{cert.issuer}</span>
                            </div>
                          </div>
                          
                          {/* Status Badge */}
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <div className={cn(
                              "px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm border-0",
                              cert.status === "completed" 
                                ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                                : "bg-amber-500/10 text-amber-700 dark:text-amber-400"
                            )}>
                              {cert.status === "completed" ? "✨ Completed" : "🚀 In Progress"}
                            </div>
                          </motion.div>
                        </div>

                        {/* Description */}
                        <p className="text-slate-600 leading-relaxed mb-6 dark:text-muted-foreground">
                          {cert.description}
                        </p>

                        {/* Focus Areas */}
                        <div className="mb-6">
                          <div className="flex items-center gap-2 mb-3">
                            <BookOpen className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                            <span className="text-sm font-semibold text-slate-900 dark:text-white">Focus Areas</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {cert.focusAreas.map((area, areaIndex) => (
                              <motion.span
                                key={area}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.6 + index * 0.2 + areaIndex * 0.1 }}
                                className="inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-500/10 border-0 text-emerald-700 text-xs font-medium dark:border-emerald-500/20 dark:text-emerald-400"
                              >
                                {area}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* Action Link */}
                        <motion.a
                          href="#"
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          className="inline-flex items-center gap-2 text-emerald-700 text-sm font-medium hover:text-emerald-600 transition-colors dark:text-emerald-400 dark:hover:text-emerald-500"
                        >
                          <span>View Certificate</span>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          </motion.div>
      </div>
    </section>
  )
}
