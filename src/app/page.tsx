import { Layout } from "@/components/layout/Layout"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Skills } from "@/components/sections/Skills"
import { Projects } from "@/components/sections/Projects"
import { Certifications } from "@/components/sections/Certifications"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      
      {/* Component showcase */}
      <section className="section-sm border-t border-border">
        <div className="container">
          <h3 className="text-2xl font-semibold mb-8 text-center">Component Examples</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card p-6">
              <h4 className="font-semibold mb-2">Card Component</h4>
              <p className="text-sm text-muted-foreground">
                Clean card design with subtle borders and shadows.
              </p>
            </div>
            <div className="card card-hover p-6">
              <h4 className="font-semibold mb-2">Hover Card</h4>
              <p className="text-sm text-muted-foreground">
                Interactive card with hover effects and transitions.
              </p>
            </div>
            <div className="card p-6 bg-primary text-primary-foreground">
              <h4 className="font-semibold mb-2">Primary Card</h4>
              <p className="text-sm opacity-90">
                Card using primary theme colors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}