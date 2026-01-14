import { ThemeToggle } from '@/components/ui/theme-toggle'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header with theme toggle */}
      <header className="border-b border-border">
        <div className="container flex justify-between items-center h-16">
          <h1 className="text-xl font-semibold">Nadeeja Portfolio</h1>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero section */}
      <section className="section">
        <div className="container text-center">
          <h2 className="text-gradient text-6xl font-bold mb-6">
            Design System Ready
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Premium portfolio foundation with modern tech green accent and dark-first theme.
          </p>
          
          {/* Color palette showcase */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="w-full h-20 bg-brand-500 rounded-lg mb-2"></div>
              <p className="text-sm font-mono">brand-500</p>
            </div>
            <div className="text-center">
              <div className="w-full h-20 bg-brand-600 rounded-lg mb-2"></div>
              <p className="text-sm font-mono">brand-600</p>
            </div>
            <div className="text-center">
              <div className="w-full h-20 bg-brand-700 rounded-lg mb-2"></div>
              <p className="text-sm font-mono">brand-700</p>
            </div>
            <div className="text-center">
              <div className="w-full h-20 bg-neutral-900 rounded-lg mb-2"></div>
              <p className="text-sm font-mono">neutral-900</p>
            </div>
          </div>

          {/* Typography showcase */}
          <div className="text-left max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl">Heading 1</h1>
            <h2 className="text-3xl md:text-4xl">Heading 2</h2>
            <h3 className="text-2xl md:text-3xl">Heading 3</h3>
            <h4 className="text-xl md:text-2xl">Heading 4</h4>
            <p className="text-base leading-relaxed">
              Body text with proper line height and spacing. This is how regular paragraphs will look in the portfolio.
            </p>
          </div>
        </div>
      </section>

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
    </main>
  )
}