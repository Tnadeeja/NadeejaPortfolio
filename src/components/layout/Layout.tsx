"use client"

import { Navbar } from "./Navbar"
import { Github, Linkedin, Mail, ChevronUp, Heart, Sparkles } from "lucide-react"

interface LayoutProps {
  children: React.ReactNode
}

function BackToTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="w-10 h-10 rounded-lg bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/30 flex items-center justify-center hover:bg-emerald-500/20 transition-all duration-300"
    >
      <ChevronUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
    </button>
  )
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <style jsx global>{`
        html {
          scrollbar-width: 8px;
          scrollbar-color: #10b981 #1f2937;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #1f2937;
        }
        ::-webkit-scrollbar-thumb {
          background: #10b981;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #059669;
        }
      `}</style>
      <Navbar />
      <main className="pt-16 flex-1">
        {children}
      </main>
      
      {/* Premium 2026 Footer */}
      <footer className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-brand-600/5"></div>
        
        <div className="relative z-10 border-t border-white/10">
          <div className="container-wide py-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Brand Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold !text-emerald-700 dark:!text-white">Weerasinghe Portfolio</h3>
                </div>
                <p className="!text-emerald-600 leading-relaxed dark:!text-muted-foreground/80">
                  Building innovative solutions with data science and modern web technologies.
                </p>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold !text-emerald-700 dark:!text-white">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#home" className="!text-emerald-600 hover:!text-emerald-800 transition-colors dark:!text-muted-foreground/80 dark:hover:!text-emerald-400">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="!text-emerald-600 hover:!text-emerald-800 transition-colors dark:!text-muted-foreground/80 dark:hover:!text-emerald-400">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#skills" className="!text-emerald-600 hover:!text-emerald-800 transition-colors dark:!text-muted-foreground/80 dark:hover:!text-emerald-400">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="!text-emerald-600 hover:!text-emerald-800 transition-colors dark:!text-muted-foreground/80 dark:hover:!text-emerald-400">
                      Projects
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold !text-emerald-700 dark:!text-white">Connect</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/nadeeja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:border-emerald-500/30 hover:bg-emerald-500/10 transition-all duration-300"
                  >
                    <Github className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </a>
                  <a
                    href="https://linkedin.com/in/thamindu-nadeeja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:border-emerald-500/30 hover:bg-emerald-500/10 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </a>
                  <a
                    href="mailto:contact@nadeeja.com"
                    className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:border-emerald-500/30 hover:bg-emerald-500/10 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="pt-8 border-t border-white/10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2 !text-emerald-600 dark:!text-muted-foreground/80">
                  <span>Made with</span>
                  <Heart className="w-4 h-4 !text-emerald-700 dark:!text-emerald-400" />
                  <span>by Thamindu Weerasinghe</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="!text-emerald-600 text-sm dark:!text-muted-foreground/60">© 2024 All rights reserved</span>
                  <BackToTopButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
