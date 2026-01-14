"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { 
  Code2, 
  Database, 
  Brain, 
  Globe, 
  Wrench,
  Terminal,
  Zap,
  Cpu,
  Coffee,
  Braces,
  Layers,
  Package,
  Server,
  BarChart3,
  Cloud
} from "lucide-react"

const skillsData = [
  {
    category: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Python", level: 90, description: "Data analysis, ML, automation scripts" },
      { name: "JavaScript", level: 85, description: "Full-stack development, React, Node.js" },
      { name: "TypeScript", level: 80, description: "Type-safe development, large-scale apps" },
      { name: "SQL", level: 75, description: "Database queries, data manipulation" },
    ]
  },
  {
    category: "Frameworks",
    icon: Globe,
    skills: [
      { name: "React", level: 88, description: "SSR, hooks, performance optimization" },
      { name: "Node.js", level: 82, description: "Backend development, APIs, microservices" },
      { name: "Next.js", level: 85, description: "Full-stack framework, SSR, SSG" },
      { name: "Tailwind CSS", level: 90, description: "Utility-first CSS, responsive design" },
    ]
  },
  {
    category: "Data Science",
    icon: Brain,
    skills: [
      { name: "Pandas", level: 85, description: "Data manipulation, analysis, cleaning" },
      { name: "Machine Learning", level: 70, description: "TensorFlow, scikit-learn, models" },
      { name: "Data Visualization", level: 80, description: "Matplotlib, D3.js, charts" },
      { name: "Statistical Analysis", level: 75, description: "Hypothesis testing, regression" },
    ]
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    skills: [
      { name: "Git", level: 92, description: "Version control, CI/CD, collaboration" },
      { name: "Docker", level: 70, description: "Containerization, deployment" },
      { name: "AWS", level: 65, description: "Cloud services, S3, EC2, Lambda" },
      { name: "VS Code", level: 95, description: "Development environment, extensions" },
    ]
  },
]

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

const categoryVariants = {
  hidden: { y: 50, opacity: 0 },
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
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
    },
  },
}

const progressVariants = {
  hidden: { width: "0%" },
  visible: (level: number) => ({
    width: `${level}%`,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 1.5,
    },
  }),
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
            <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-emerald-400 via-emerald-500 to-brand-600 bg-clip-text text-transparent mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technical skills spanning programming languages, frameworks, data science, and tools
              with a focus on building scalable, innovative solutions.
            </p>
          </motion.div>

          {/* Skills Categories Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8">
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                variants={categoryVariants}
                transition={{ delay: categoryIndex * 0.15 }}
                className="group"
              >
                {/* Category Capsule */}
                <motion.div
                  variants={categoryVariants}
                  className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-[0_0_40px_#00ff8820] hover:shadow-[0_0_60px_#00ff8830] transition-all duration-500"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="flex-shrink-0 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30"
                    >
                      <category.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {category.category}
                    </h3>
                  </div>

                  {/* Skills with Neon Progress Bars */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        variants={skillVariants}
                        transition={{ delay: categoryIndex * 0.15 + skillIndex * 0.1 }}
                        className="group/item"
                      >
                        {/* Skill Row */}
                        <div className="flex items-center gap-4 mb-2">
                          {/* Skill Icon */}
                          <motion.div
                            whileHover={{ y: -4, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400 }}
                            className="flex-shrink-0 p-2 rounded-lg bg-white/5 border border-white/10"
                          >
                            {skill.name === "Python" && <Code2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                            {skill.name === "JavaScript" && <Braces className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                            {skill.name === "TypeScript" && <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                            {skill.name === "SQL" && <Database className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                            {skill.name === "React" && <Globe className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                            {skill.name === "Node.js" && <Server className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                            {skill.name === "Next.js" && <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                            {skill.name === "Tailwind CSS" && <Package className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                            {skill.name === "Pandas" && <BarChart3 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                            {skill.name === "Machine Learning" && <Brain className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                            {skill.name === "Data Visualization" && <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                            {skill.name === "Statistical Analysis" && <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                            {skill.name === "Git" && <Code2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                            {skill.name === "Docker" && <Package className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                            {skill.name === "AWS" && <Cloud className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                            {skill.name === "VS Code" && <Terminal className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                          </motion.div>
                          
                          {/* Skill Name */}
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-white group-hover/item:text-emerald-400 transition-colors">
                              {skill.name}
                            </h4>
                            <p className="text-sm text-muted-foreground opacity-70">
                              {skill.description}
                            </p>
                          </div>
                          
                          {/* Skill Percentage */}
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 600 }}
                            className="flex-shrink-0 text-lg font-bold text-emerald-600 dark:text-emerald-400"
                          >
                            {skill.level}%
                          </motion.div>
                        </div>

                        {/* Neon Progress Bar */}
                        <div className="relative">
                          {/* Progress Track */}
                          <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                            {/* Animated Progress Fill */}
                            <motion.div
                              variants={progressVariants}
                              custom={skill.level}
                              className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full shadow-[0_0_20px_#00ff88] transition-all duration-1000 relative overflow-hidden"
                            >
                              {/* Glow Effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                              
                              {/* Neon Glow */}
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 1, 0.8] }}
                                transition={{ 
                                  delay: categoryIndex * 0.15 + skillIndex * 0.1 + 1.5,
                                  duration: 0.5,
                                  repeat: Infinity,
                                  repeatType: "reverse"
                                }}
                                className="absolute inset-0 bg-gradient-to-r from-emerald-400/50 to-emerald-500/50 blur-md"
                              ></motion.div>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}