"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sparkles, ArrowRight, Globe, Code, Zap, Brain } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Determine active section based on scroll position
      const sections = navItems.map(item => item.href.replace("#", ""))
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once on mount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    
    // Handle home link specially
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/10 backdrop-blur-xl border-b border-emerald-500/20 shadow-[0_0_40px_#00ff8815]"
          : "bg-white/5 backdrop-blur-lg border-b border-white/10"
      )}
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-brand-600/5 opacity-0"></div>
      
      <div className="container-wide flex justify-between items-center h-20">
        {/* Premium Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavClick("#")}
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/30 flex items-center justify-center"
          >
            <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          </motion.div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-400 via-emerald-500 to-brand-600 bg-clip-text text-transparent">
              Thamindu Weerasinghe
            </h1>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Full Stack Developer</p>
          </div>
        </motion.div>

        {/* Premium Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href.replace("#", "")
            return (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group",
                  isActive 
                    ? "bg-emerald-500/20 border-emerald-500/50 shadow-[0_0_25px_#00ff8830]"
                    : "bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:border-emerald-500/30 hover:bg-emerald-500/10"
                )}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {item.name === "About" && <Brain className={cn("w-4 h-4", isActive ? "text-emerald-300" : "text-emerald-600 dark:text-emerald-400")} />}
                  {item.name === "Skills" && <Zap className={cn("w-4 h-4", isActive ? "text-emerald-300" : "text-emerald-600 dark:text-emerald-400")} />}
                  {item.name === "Projects" && <Code className={cn("w-4 h-4", isActive ? "text-emerald-300" : "text-emerald-600 dark:text-emerald-400")} />}
                  {item.name === "Certifications" && <Globe className={cn("w-4 h-4", isActive ? "text-emerald-300" : "text-emerald-600 dark:text-emerald-400")} />}
                  {item.name === "Contact" && <Sparkles className={cn("w-4 h-4", isActive ? "text-emerald-300" : "text-emerald-600 dark:text-emerald-400")} />}
                  {item.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-brand-600/20 rounded-lg"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  ></motion.div>
                )}
                {!isActive && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileHover={{ width: "100%", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-brand-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></motion.div>
                )}
              </motion.button>
            )
          })}
          
          {/* Premium Theme Toggle */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <ThemeToggle />
          </motion.div>
        </div>

        {/* Premium Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <ThemeToggle />
          </motion.div>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-10 h-10 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-brand-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Premium Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/10 backdrop-blur-xl border-b border-emerald-500/20 shadow-[0_0_40px_#00ff8815]"
          >
            {/* Mobile Menu Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-brand-600/10"></div>
            
            <div className="container-wide py-6 relative z-10">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.replace("#", "")
                return (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02, 
                      x: 10,
                      boxShadow: "0 5px 15px rgba(16, 185, 129, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "relative w-full text-left py-4 px-6 font-medium rounded-xl transition-all duration-300 group",
                      isActive
                        ? "bg-emerald-500/20 border-emerald-500/50 shadow-[0_0_25px_#00ff8830]"
                        : "bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:border-emerald-500/30 hover:bg-emerald-500/10"
                    )}
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      {item.name === "About" && <Brain className={cn("w-4 h-4", isActive ? "text-emerald-300" : "text-emerald-600 dark:text-emerald-400")} />}
                      {item.name === "Skills" && <Zap className={cn("w-4 h-4", isActive ? "text-emerald-300" : "text-emerald-600 dark:text-emerald-400")} />}
                      {item.name === "Projects" && <Code className={cn("w-4 h-4", isActive ? "text-emerald-300" : "text-emerald-600 dark:text-emerald-400")} />}
                      {item.name === "Certifications" && <Globe className={cn("w-4 h-4", isActive ? "text-emerald-300" : "text-emerald-600 dark:text-emerald-400")} />}
                      {item.name === "Contact" && <Sparkles className={cn("w-4 h-4", isActive ? "text-emerald-300" : "text-emerald-600 dark:text-emerald-400")} />}
                      {item.name}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeMobileNav"
                        className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-brand-600/20 rounded-xl"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      ></motion.div>
                    )}
                    {!isActive && (
                      <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        whileHover={{ width: "100%", opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-brand-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      ></motion.div>
                    )}
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}