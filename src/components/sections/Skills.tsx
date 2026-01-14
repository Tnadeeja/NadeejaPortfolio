"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { 
  Code2, 
  Database, 
  Brain, 
  Globe, 
  Smartphone, 
  Cloud, 
  GitBranch, 
  Terminal,
  Palette,
  Zap,
  Cpu,
  BarChart3,
  Wrench,
  Server
} from "lucide-react"

const skillsData = [
  {
    category: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Python", level: "Advanced", description: "Data analysis, ML, automation scripts" },
      { name: "JavaScript/TypeScript", level: "Advanced", description: "Full-stack development, React, Node.js" },
      { name: "SQL", level: "Intermediate", description: "Database queries, data manipulation" },
      { name: "R", level: "Intermediate", description: "Statistical analysis, data visualization" },
      { name: "Java", level: "Intermediate", description: "Backend development, algorithms" },
    ]
  },
  {
    category: "Data & Analytics",
    icon: BarChart3,
    skills: [
      { name: "Machine Learning", level: "Advanced", description: "TensorFlow, scikit-learn, pandas" },
      { name: "Data Visualization", level: "Advanced", description: "Matplotlib, D3.js, Tableau" },
      { name: "Statistical Analysis", level: "Advanced", description: "Hypothesis testing, regression models" },
      { name: "Big Data", level: "Intermediate", description: "Spark, Hadoop, data pipelines" },
    ]
  },
  {
    category: "Web & Mobile",
    icon: Globe,
    skills: [
      { name: "React/Next.js", level: "Advanced", description: "SSR, hooks, performance optimization" },
      { name: "HTML/CSS/Tailwind", level: "Expert", description: "Responsive design, animations, components" },
      { name: "REST APIs", level: "Advanced", description: "Integration, authentication, CRUD operations" },
      { name: "Mobile Development", level: "Intermediate", description: "React Native, responsive design" },
    ]
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    skills: [
      { name: "Git/GitHub", level: "Expert", description: "Version control, CI/CD, collaboration" },
      { name: "Docker", level: "Intermediate", description: "Containerization, deployment" },
      { name: "AWS", level: "Intermediate", description: "Cloud services, S3, EC2, Lambda" },
      { name: "VS Code", level: "Expert", description: "Development environment, extensions, debugging" },
      { name: "Figma", level: "Intermediate", description: "UI/UX design, prototyping" },
    ]
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

const categoryVariants = {
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

const skillVariants = {
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
}

export function Skills() {
  return (
    <section id="skills" className="section overflow-hidden">
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
            variants={categoryVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technical skills spanning programming languages, data science, web development, and cloud technologies
              with a focus on building scalable, innovative solutions.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid gap-8 lg:gap-12">
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                variants={categoryVariants}
                transition={{ delay: categoryIndex * 0.1 }}
                className="group"
              >
                {/* Category Header */}
                <motion.div
                  variants={skillVariants}
                  className="flex items-center gap-4 mb-6 p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300"
                >
                  <motion.div
                    variants={skillVariants}
                    className="flex-shrink-0 text-primary p-3 rounded-lg bg-primary/10"
                  >
                    <category.icon className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.category}
                  </h3>
                </motion.div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="group"
                    >
                      <div className="flex items-start gap-4 p-4 rounded-lg border border-border/30 bg-card hover:bg-card/50 transition-all duration-300">
                        {/* Skill Level Badge */}
                        <div className="flex-shrink-0">
                          <span className={cn(
                            "inline-block px-3 py-1 rounded-full text-xs font-medium",
                            skill.level === "Advanced" && "bg-brand-500 text-white",
                            skill.level === "Expert" && "bg-brand-600 text-white",
                            skill.level === "Intermediate" && "bg-secondary text-secondary-foreground",
                            "bg-muted text-muted-foreground"
                          )}>
                            {skill.level}
                          </span>
                        </div>

                        {/* Skill Content */}
                        <div className="flex-1 space-y-2">
                          <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {skill.name}
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {skill.description}
                          </p>
                        </div>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}