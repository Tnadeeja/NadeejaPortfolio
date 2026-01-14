"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
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
  Briefcase
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
    <section id="about" className="section overflow-hidden">
      <style jsx>{customStyles}</style>
      <div className="container-wide">
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-emerald-400 via-emerald-500 to-brand-600 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional summary highlighting learning mindset and career direction in data science and software engineering.
            </p>
          </motion.div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {aboutData.map((item, index) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 h-full">
                  <div className="relative w-full h-full">
                    {/* Static gradient line */}
                    <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 via-transparent to-emerald-500/20"></div>
                    
                    {/* Glowing dots */}
                    <div className="absolute top-0 left-0 w-full h-full flex items-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50 glow-dot"></div>
                      <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50 glow-dot ml-4"></div>
                      <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50 glow-dot ml-8"></div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="ml-16 md:ml-20">
                  {/* Icon with glassmorphism */}
                  <motion.div
                    variants={iconVariants}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="relative z-10 mb-6"
                  >
                    <div className="absolute inset-0 bg-emerald-500/10 backdrop-blur-xl rounded-2xl -z-10"></div>
                    <div className="relative bg-emerald-500/10 backdrop-blur-sm rounded-2xl p-4 border border-emerald-500/20">
                      <item.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400 relative z-10" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-4">
                    <motion.h3
                      variants={cardVariants}
                      transition={{ delay: index * 0.1 + 0.4 }}
                      className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors"
                    >
                      {item.title}
                    </motion.h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Details List */}
                    <ul className="space-y-3 mt-6">
                      {item.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-4">
                          <div className="w-2 h-2 rounded-full bg-emerald-500/20 mt-2 flex-shrink-0"></div>
                          <motion.span
                            variants={cardVariants}
                            transition={{ delay: index * 0.1 + 0.5 + detailIndex * 0.1 }}
                            className="text-sm md:text-base font-medium text-emerald-600 dark:text-emerald-400"
                          >
                            {detail}
                          </motion.span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={cardVariants}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-primary inline-flex items-center gap-2 px-4 py-2 text-sm"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}