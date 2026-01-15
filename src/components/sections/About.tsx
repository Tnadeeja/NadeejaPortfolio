"use client"

import { motion } from "framer-motion"
import { 
  GraduationCap, 
  Code, 
  Database, 
  Brain, 
  TrendingUp, 
  Lightbulb,
  Target,
  BookOpen,
  Award,
  Users,
  Briefcase,
  Sparkles,
  ArrowRight,
  User,
  Zap
} from "lucide-react"

// Add custom styles for glowing animations
const customStyles = `
  @keyframes pulse {
    0%, 100% { 
      opacity: 0.3; 
      transform: scale(1);
    }
    50% { 
      opacity: 1; 
      transform: scale(1.2);
    }
  }
  
  .glow-dot {
    animation: pulse 2s ease-in-out infinite;
  }
  
  .glow-dot:nth-child(2) {
    animation-delay: 0.5s;
  }
  
  .glow-dot:nth-child(3) {
    animation-delay: 1s;
  }
`

const aboutData = [
  {
    id: 1,
    title: "Education",
    icon: GraduationCap,
    description: "Bachelor's degree in Computer Science with focus on data structures and algorithms.",
    details: [
      "Relevant coursework: Data Structures, Algorithms, Database Systems",
      "Academic projects: Machine Learning applications, Web development"
    ]
  },
  {
    id: 2,
    title: "Professional Development",
    icon: Briefcase,
    description: "Continuous learning through online courses, workshops, and hands-on projects.",
    details: [
      "Completed 50+ online courses in web development and data science",
      "Regular participation in coding bootcamps and hackathons",
      "Self-study: Advanced algorithms and system design"
    ]
  },
  {
    id: 3,
    title: "Technical Skills",
    icon: Code,
    description: "Strong foundation in programming languages, frameworks, and development tools.",
    details: [
      "Languages: Python, JavaScript, TypeScript, SQL",
      "Frameworks: React, Node.js, Next.js",
      "Tools: Git, Docker, AWS, VS Code"
    ]
  }
]

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

const iconVariants = {
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

export function About() {
  return (
    <section id="about" className="section overflow-hidden relative">
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
              <User className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mr-2" />
              <span className="text-sm font-semibold text-emerald-700 dark:font-medium dark:text-emerald-400">
                Personal Journey
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 dark:from-emerald-400 dark:via-emerald-500 dark:to-brand-600 bg-clip-text text-transparent mb-6">
              About Me
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Passionate data scientist and software engineer with a relentless drive for innovation, 
              continuous learning, and creating impactful solutions that bridge technology and real-world challenges.
            </p>
          </motion.div>

          {/* Premium About Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {aboutData.map((item, index) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                {/* Premium Glassmorphism Card */}
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-slate-200/60 p-8 lg:p-10 transition-all duration-500 shadow-[0_18px_50px_rgba(2,6,23,0.08)] hover:border-emerald-200 hover:shadow-[0_22px_60px_rgba(2,6,23,0.12)] dark:border-white/10 dark:hover:border-emerald-500/30 dark:hover:shadow-[0_0_60px_#00ff8820]">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/8 via-transparent to-emerald-500/6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl dark:from-emerald-500/10 dark:to-brand-600/10"></div>
                  
                  <div className="relative z-10">
                    {/* Icon with enhanced glassmorphism */}
                    <motion.div
                      variants={iconVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.3 + index * 0.2 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative mb-8"
                    >
                      <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-xl dark:bg-emerald-500/20"></div>
                      <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/30">
                        <item.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors dark:text-white dark:group-hover:text-emerald-400">
                        {item.title}
                      </h3>
                      
                      <p className="text-slate-600 leading-relaxed text-lg dark:text-muted-foreground/80">
                        {item.description}
                      </p>
                      
                      {/* Enhanced Details List */}
                      <motion.ul
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.2 }}
                        className="space-y-4"
                      >
                        {item.details.map((detail, detailIndex) => (
                          <motion.li
                            key={detailIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + index * 0.2 + detailIndex * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              transition={{ type: "spring", stiffness: 400 }}
                              className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500/50 mt-2"
                            ></motion.div>
                            <span className="text-slate-700 dark:text-emerald-400 font-medium leading-relaxed">
                              {detail}
                            </span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Premium Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-center mt-20"
          >
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-emerald-200 text-emerald-800 font-semibold hover:bg-white/10 hover:shadow-[0_16px_45px_rgba(2,6,23,0.10)] transition-all duration-300 dark:bg-emerald-500/10 dark:border-emerald-500/30 dark:text-emerald-400 dark:font-medium dark:hover:bg-emerald-500/20"
            >
              <span>Let's Connect</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}