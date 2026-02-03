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
  FaAws,
  FaJava
} from "react-icons/fa"
import {
  SiTypescript,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiPandas,
  SiTensorflow,
  SiVscodium,
  SiNumpy,
  SiMongodb,
  SiVercel
} from "react-icons/si"

const skillsData = [
  {
    category: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Python", logo: "python" },
      { name: "JavaScript", logo: "javascript" },
      { name: "TypeScript", logo: "typescript" },
      { name: "Java", logo: "java" },
      { name: "SQL", logo: "mysql" },
      { name: "PHP", logo: "php" },
    ]
  },
  {
    category: "Frameworks & Libraries",
    icon: Globe,
    skills: [
      { name: "React", logo: "react" },
      { name: "Next.js", logo: "nextjs" },
      { name: "Node.js", logo: "nodejs" },
      { name: "Express", logo: "nodejs" },
      { name: "Tailwind CSS", logo: "tailwindcss" },
    ]
  },
  {
    category: "Data Science & Analytics",
    icon: Brain,
    skills: [
      { name: "Pandas", logo: "pandas" },
      { name: "NumPy", logo: "numpy" },
      { name: "Matplotlib", logo: "matplotlib" },
      { name: "Power BI", logo: "powerbi" },
      { name: "scikit-learn", logo: "tensorflow" },
    ]
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    skills: [
      { name: "Git", logo: "git" },
      { name: "GitHub", logo: "git" },
      { name: "Docker", logo: "docker" },
      { name: "MongoDB", logo: "mongodb" },
      { name: "MySQL", logo: "mysql" },
      { name: "Vercel", logo: "vercel" },
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

const skillItemVariants = {
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
              Tools and technologies I actively use in projects and academic work.
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

                  {/* Premium Logo Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        variants={skillItemVariants}
                        transition={{ delay: categoryIndex * 0.15 + skillIndex * 0.05 }}
                        className="group"
                      >
                        {/* Skill Tile */}
                        <motion.div
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)"
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          className="relative bg-white/8 backdrop-blur-md rounded-2xl border border-white/20 p-4 transition-all duration-300 hover:bg-white/12 hover:border-emerald-300/40 dark:bg-white/5 dark:border-white/10 dark:hover:bg-emerald-500/10 dark:hover:border-emerald-400/30"
                        >
                          {/* Subtle Glow Effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                          
                          {/* Skill Content */}
                          <div className="relative z-10 flex flex-col items-center text-center">
                            {/* Technology Logo */}
                            <motion.div
                              whileHover={{ rotate: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                              className="w-12 h-12 flex items-center justify-center mb-3"
                            >
                              {skill.name === "Python" && <FaPython className="w-10 h-10 text-slate-400 group-hover:text-blue-500 transition-colors" />}
                              {skill.name === "JavaScript" && <FaJs className="w-10 h-10 text-slate-400 group-hover:text-yellow-500 transition-colors" />}
                              {skill.name === "TypeScript" && <SiTypescript className="w-10 h-10 text-slate-400 group-hover:text-blue-600 transition-colors" />}
                              {skill.name === "Java" && <FaJava className="w-10 h-10 text-slate-400 group-hover:text-red-600 transition-colors" />}
                              {skill.name === "SQL" && <SiMysql className="w-10 h-10 text-slate-400 group-hover:text-blue-600 transition-colors" />}
                              {skill.name === "PHP" && <span className="w-10 h-10 text-slate-400 group-hover:text-purple-600 transition-colors font-bold text-lg">PHP</span>}
                              {skill.name === "React" && <FaReact className="w-10 h-10 text-slate-400 group-hover:text-cyan-500 transition-colors" />}
                              {skill.name === "Next.js" && <SiNextdotjs className="w-10 h-10 text-slate-400 group-hover:text-black dark:group-hover:text-white transition-colors" />}
                              {skill.name === "Node.js" && <FaNodeJs className="w-10 h-10 text-slate-400 group-hover:text-green-600 transition-colors" />}
                              {skill.name === "Express" && <FaNodeJs className="w-10 h-10 text-slate-400 group-hover:text-gray-600 transition-colors" />}
                              {skill.name === "Tailwind CSS" && <SiTailwindcss className="w-10 h-10 text-slate-400 group-hover:text-cyan-600 transition-colors" />}
                              {skill.name === "Pandas" && <SiPandas className="w-10 h-10 text-slate-400 group-hover:text-blue-700 transition-colors" />}
                              {skill.name === "NumPy" && <SiNumpy className="w-10 h-10 text-slate-400 group-hover:text-blue-600 transition-colors" />}
                              {skill.name === "Matplotlib" && <span className="w-10 h-10 text-slate-400 group-hover:text-orange-600 transition-colors font-bold text-xs">MAT</span>}
                              {skill.name === "Power BI" && <span className="w-10 h-10 text-slate-400 group-hover:text-yellow-600 transition-colors font-bold text-xs">PBI</span>}
                              {skill.name === "scikit-learn" && <SiTensorflow className="w-10 h-10 text-slate-400 group-hover:text-orange-600 transition-colors" />}
                              {skill.name === "Git" && <FaGitAlt className="w-10 h-10 text-slate-400 group-hover:text-red-orange transition-colors" />}
                              {skill.name === "GitHub" && <FaGitAlt className="w-10 h-10 text-slate-400 group-hover:text-gray-600 transition-colors" />}
                              {skill.name === "Docker" && <FaDocker className="w-10 h-10 text-slate-400 group-hover:text-blue-500 transition-colors" />}
                              {skill.name === "MongoDB" && <SiMongodb className="w-10 h-10 text-slate-400 group-hover:text-green-600 transition-colors" />}
                              {skill.name === "MySQL" && <SiMysql className="w-10 h-10 text-slate-400 group-hover:text-blue-600 transition-colors" />}
                              {skill.name === "Vercel" && <SiVercel className="w-10 h-10 text-slate-400 group-hover:text-black dark:group-hover:text-white transition-colors" />}
                            </motion.div>
                            
                            {/* Skill Name */}
                            <h4 className="text-sm font-medium text-slate-600 group-hover:text-emerald-700 transition-colors dark:text-slate-400 dark:group-hover:text-emerald-400">
                              {skill.name}
                            </h4>
                          </div>
                        </motion.div>
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
                Actively Learning & Improving
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
                  2+
                </motion.div>
                <div className="text-sm text-muted-foreground dark:text-muted-foreground">Years Learning & Practice</div>
              </div>
              
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.9, type: "spring", stiffness: 200 }}
                  className="text-3xl font-bold text-emerald-700 dark:text-emerald-400"
                >
                  10+
                </motion.div>
                <div className="text-sm text-muted-foreground dark:text-muted-foreground">Academic & Personal Projects</div>
              </div>
              
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.0, type: "spring", stiffness: 200 }}
                  className="text-3xl font-bold text-emerald-700 dark:text-emerald-400"
                >
                  ∞
                </motion.div>
                <div className="text-sm text-muted-foreground dark:text-muted-foreground">Continuous Skill Development</div>
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