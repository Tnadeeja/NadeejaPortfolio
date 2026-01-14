"use client"

import { motion } from "framer-motion"
import { Award, BookOpen, Calendar, Code, Database, Globe, Users, Zap, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

const certificationsData = [
  {
    id: 1,
    title: "Python Programming",
    issuer: "University of Moratuwa",
    date: "2023",
    status: "completed",
    description: "Comprehensive Python programming course covering fundamentals, object-oriented programming, data structures, and algorithms.",
    focusAreas: [
      "Python fundamentals",
      "Object-oriented programming", 
      "Data structures",
      "Databases"
    ],
    icon: Code
  },
  {
    id: 2,
    title: "Web Development Fundamentals",
    issuer: "Coursera",
    date: "2023",
    status: "completed",
    description: "Complete web development program covering HTML, CSS, JavaScript, and modern web frameworks.",
    focusAreas: [
      "Frontend development",
      "Responsive design",
      "JavaScript frameworks"
    ],
    icon: Globe
  },
  {
    id: 3,
    title: "Data Science Specialization",
    issuer: "DataCamp",
    date: "2024",
    status: "completed",
    description: "Intensive data science program focusing on machine learning, statistical analysis, and data visualization techniques.",
    focusAreas: [
      "Machine learning",
      "Statistical analysis",
      "Data visualization"
    ],
    icon: Database
  },
  {
    id: 4,
    title: "Cloud Computing",
    issuer: "AWS",
    date: "2024",
    status: "in-progress",
    description: "AWS Cloud Practitioner certification program covering cloud architecture, deployment, and scalable infrastructure.",
    focusAreas: [
      "Cloud architecture",
      "Infrastructure as code",
      "Scalable systems"
    ],
    icon: TrendingUp
  },
  {
    id: 5,
    title: "Full-Stack Development",
    issuer: "freeCodeCamp",
    date: "2023",
    status: "completed",
    description: "Full-stack web development program covering frontend, backend, database, and deployment technologies.",
    focusAreas: [
      "Frontend frameworks",
      "Backend development",
      "Database design"
    ],
    icon: Zap
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
    <section id="certifications" className="section overflow-hidden">
      <div className="container-wide">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={cardVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Learning & Certifications
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Continuous learning journey showcasing discipline and expertise growth
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {certificationsData.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  variants={cardVariants}
                  transition={{ delay: index * 0.15 }}
                  className="relative flex items-start gap-6"
                >
                  {/* Timeline dot */}
                  <motion.div
                    variants={iconVariants}
                    className="relative z-10"
                  >
                    <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-background"></div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1 space-y-1">
                        <h3 className="text-xl font-semibold text-foreground">
                          {cert.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {cert.issuer} • {cert.date}
                        </p>
                      </div>
                      
                      {/* Status Badge */}
                      <div className="flex-shrink-0">
                        <span className={cn(
                          "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
                          cert.status === "completed" && "bg-brand-500 text-white",
                          cert.status === "in-progress" && "bg-amber-500 text-white",
                          "bg-muted text-muted-foreground"
                        )}>
                          {cert.status === "completed" ? "Completed" : "In Progress"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Focus Areas */}
                  <div className="mt-4">
                    <p className="text-sm font-medium text-foreground mb-2">
                      Focus Areas:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cert.focusAreas.map((area, areaIndex) => (
                        <span
                          key={area}
                          className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom line */}
          <div className="absolute left-8 md:left-1/2 top-0 w-0.5 h-full bg-primary/20"></div>
        </motion.div>
      </div>
    </section>
  )
}
