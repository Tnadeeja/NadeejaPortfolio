"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { 
  GraduationCap, 
  Code2, 
  Database, 
  Brain, 
  TrendingUp, 
  Lightbulb,
  Target,
  BookOpen,
  Award,
  Users
} from "lucide-react"

const aboutData = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Currently pursuing Bachelor's degree in Information Technology, focusing on advanced data structures, algorithms, and software engineering principles.",
    delay: 0.1,
  },
  {
    icon: Brain,
    title: "Data Science Expertise",
    description: "Specializing in machine learning, statistical analysis, and data visualization. Proficient in Python, R, and SQL for complex data manipulation and predictive modeling.",
    delay: 0.2,
  },
  {
    icon: Code2,
    title: "Software Engineering",
    description: "Strong foundation in full-stack development with modern frameworks. Experience building scalable applications using React, Next.js, and cloud technologies.",
    delay: 0.3,
  },
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    description: "Continuous learner passionate about emerging technologies and industry best practices. Committed to staying current with AI/ML trends and software development innovations.",
    delay: 0.4,
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Analytical approach to breaking down complex challenges into manageable components. Experience with algorithmic thinking and systematic problem-solving methodologies.",
    delay: 0.5,
  },
  {
    icon: Target,
    title: "Career Goals",
    description: "Aspiring to bridge the gap between data science and software engineering to create innovative AI-driven solutions that make meaningful impact.",
    delay: 0.6,
  },
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

const itemVariants = {
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
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
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
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating innovative solutions at the intersection of data science and software engineering
            </p>
          </motion.div>

          {/* About Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {aboutData.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                transition={{ delay: item.delay }}
                className="group"
              >
                <div className="flex items-start gap-6 p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300">
                  {/* Icon */}
                  <motion.div
                    variants={iconVariants}
                    className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary p-3"
                  >
                    <item.icon className="w-full h-full" />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold shadow-lg hover:bg-primary/90 transition-all duration-200"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}