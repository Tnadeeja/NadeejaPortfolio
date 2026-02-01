"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { 
  Code2, 
  Database, 
  Brain, 
  Globe, 
  Wrench,
  Sparkles,
  TrendingUp,
  Award
} from "lucide-react"
import {
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws
} from "react-icons/fa"
import {
  SiTypescript,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiPandas,
  SiTensorflow,
  SiVscodium
} from "react-icons/si"

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
    <section id="skills" className="section overflow-hidden relative">
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
            variants={categoryVariants}
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
                Technical Excellence
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-teal-700 via-emerald-600 to-emerald-500 dark:from-emerald-400 dark:via-emerald-500 dark:to-brand-600 bg-clip-text text-transparent mb-6">
              Skills & Expertise
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Comprehensive technical skills spanning programming languages, frameworks, data science, and tools 
              with a focus on building scalable, innovative solutions that drive real-world impact.
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
                  className="bg-white/5 backdrop-blur-xl rounded-2xl border border-slate-200/60 p-6 transition-all duration-500 shadow-[0_18px_50px_rgba(2,6,23,0.08)] hover:border-emerald-200 hover:shadow-[0_22px_60px_rgba(2,6,23,0.12)] dark:border-white/10 dark:hover:border-emerald-500/30 dark:hover:shadow-[0_0_60px_#00ff8830]"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="flex-shrink-0 p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/30"
                    >
                      <category.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors dark:text-white dark:group-hover:text-emerald-400">
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
                            className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm border border-emerald-200 dark:bg-white/10 dark:border-white/20 flex items-center justify-center"
                          >
                            {skill.name === "Python" && <FaPython className="w-8 h-8 text-blue-500" />}
                            {skill.name === "JavaScript" && <FaJs className="w-8 h-8 text-yellow-500" />}
                            {skill.name === "TypeScript" && <SiTypescript className="w-8 h-8 text-blue-600" />}
                            {skill.name === "SQL" && <SiMysql className="w-8 h-8 text-blue-600" />}
                            {skill.name === "React" && <FaReact className="w-8 h-8 text-cyan-500" />}
                            {skill.name === "Node.js" && <FaNodeJs className="w-8 h-8 text-green-600" />}
                            {skill.name === "Next.js" && <SiNextdotjs className="w-8 h-8 text-black" />}
                            {skill.name === "Tailwind CSS" && <SiTailwindcss className="w-8 h-8 text-cyan-600" />}
                            {skill.name === "Pandas" && <SiPandas className="w-8 h-8 text-blue-700" />}
                            {skill.name === "Machine Learning" && <SiTensorflow className="w-8 h-8 text-orange-600" />}
                            {skill.name === "Data Visualization" && <FaReact className="w-8 h-8 text-purple-600" />}
                            {skill.name === "Statistical Analysis" && <FaGitAlt className="w-8 h-8 text-red-600" />}
                            {skill.name === "Git" && <FaGitAlt className="w-8 h-8 text-red-orange" />}
                            {skill.name === "Docker" && <FaDocker className="w-8 h-8 text-blue-500" />}
                            {skill.name === "AWS" && <FaAws className="w-8 h-8 text-orange-500" />}
                            {skill.name === "VS Code" && <SiVscodium className="w-8 h-8 text-blue-600" />}
                          </motion.div>
                          
                          {/* Skill Name */}
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-slate-900 group-hover/item:text-emerald-700 transition-colors dark:text-white dark:group-hover/item:text-emerald-400">
                              {skill.name}
                            </h4>
                            <p className="text-sm text-slate-600 opacity-70 dark:text-muted-foreground">
                              {skill.description}
                            </p>
                          </div>
                          
                          {/* Skill Percentage */}
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 600 }}
                            className="flex-shrink-0 text-lg font-bold text-emerald-700 dark:text-emerald-400"
                          >
                            {skill.level}%
                          </motion.div>
                        </div>

                        {/* Neon Progress Bar */}
                        <div className="relative">
                          {/* Progress Track */}
                          <div className="w-full h-3 bg-white/10 backdrop-blur-sm rounded-full overflow-hidden dark:bg-white/5">
                            {/* Animated Progress Fill */}
                            <motion.div
                              variants={progressVariants}
                              custom={skill.level}
                              className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-1000 relative overflow-hidden dark:from-emerald-400 dark:to-emerald-500 dark:shadow-[0_0_20px_#00ff88]"
                            >
                              {/* Glow Effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse dark:via-white/30"></div>
                              
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
                                className="absolute inset-0 bg-gradient-to-r from-emerald-400/40 to-emerald-500/40 blur-md dark:from-emerald-400/50 dark:to-emerald-500/50"
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

          {/* Premium Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="text-center mt-20"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-emerald-200 mb-6 dark:bg-emerald-500/10 dark:border-emerald-500/20"
            >
              <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mr-2" />
              <span className="text-sm font-semibold text-emerald-700 dark:font-medium dark:text-emerald-400">
                Expert Level Achieved
              </span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 }}
              className="flex items-center justify-center gap-8 mb-8"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
                  className="text-3xl font-bold text-emerald-700 dark:text-emerald-400"
                >
                  15+
                </motion.div>
                <div className="text-sm text-muted-foreground dark:text-muted-foreground">Years Experience</div>
              </div>
              
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.9, type: "spring", stiffness: 200 }}
                  className="text-3xl font-bold text-emerald-700 dark:text-emerald-400"
                >
                  50+
                </motion.div>
                <div className="text-sm text-muted-foreground dark:text-muted-foreground">Projects Completed</div>
              </div>
              
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.0, type: "spring", stiffness: 200 }}
                  className="text-3xl font-bold text-emerald-700 dark:text-emerald-400"
                >
                  95%
                </motion.div>
                <div className="text-sm text-muted-foreground dark:text-muted-foreground">Client Satisfaction</div>
              </div>
            </motion.div>
            
            <motion.a
              href="#projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1 }}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-emerald-200 text-emerald-800 font-semibold hover:bg-white/10 hover:shadow-[0_16px_45px_rgba(2,6,23,0.10)] transition-all duration-300 dark:bg-emerald-500/10 dark:border-emerald-500/30 dark:text-emerald-400 dark:font-medium dark:hover:bg-emerald-500/20"
            >
              <span>View My Work</span>
              <TrendingUp className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}