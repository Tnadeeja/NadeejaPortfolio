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
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
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
                className="card card-hover p-6 lg:p-8 relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300"
              >
                {/* Icon */}
                <motion.div
                  variants={iconVariants}
                  className="flex-shrink-0 text-primary p-3 rounded-lg bg-primary/10 mb-4"
                >
                  <item.icon className="w-8 h-8" />
                </motion.div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Details List */}
                  <ul className="space-y-2 mt-4">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary/20 mt-1 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
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