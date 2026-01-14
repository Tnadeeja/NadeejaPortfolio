# Bolt.new Projects Section

## PROMPT
Build a complete Projects section for a premium Next.js portfolio.

## Requirements
- Uses existing ProjectCard component
- Responsive grid (2 columns desktop, 1 mobile)
- Max 4 projects displayed
- Clean spacing and typography
- Professional presentation

## Design Specifications
- Dark and light mode support
- Subtle scroll animations
- Green accent color (#22c55e)
- Glassmorphism effects
- Mobile-first responsive design

## Technical Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion for animations
- TypeScript for type safety

## Component Structure
```tsx
export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            showcasing my expertise in data science, full-stack development, and innovative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div className="text-center mt-16">
          <motion.a
            href="https://github.com/nadeeja"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn btn-primary inline-flex items-center gap-2"
          >
            <GithubIcon />
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
```

## Sample Data Structure
```tsx
const projectsData = [
  {
    id: 1,
    title: "Data Analytics Dashboard",
    description: "Interactive dashboard for real-time data visualization and analytics with machine learning insights.",
    image: "/images/dashboard.jpg",
    techStack: ["React", "Python", "TensorFlow", "D3.js"],
    githubUrl: "https://github.com/nadeeja/dashboard",
    liveUrl: "https://dashboard-demo.com"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and inventory management.",
    image: "/images/ecommerce.jpg",
    techStack: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/nadeeja/ecommerce",
    liveUrl: "https://ecommerce-demo.com"
  },
  {
    id: 3,
    title: "ML Prediction Model",
    description: "Machine learning model for predictive analytics with real-time data processing.",
    image: "/images/ml-model.jpg",
    techStack: ["Python", "Scikit-learn", "Flask", "PostgreSQL"],
    githubUrl: "https://github.com/nadeeja/ml-model",
    liveUrl: "https://ml-demo.com"
  },
  {
    id: 4,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team features.",
    image: "/images/taskapp.jpg",
    techStack: ["React", "TypeScript", "Firebase", "Tailwind"],
    githubUrl: "https://github.com/nadeeja/taskapp",
    liveUrl: "https://taskapp-demo.com"
  }
]
```

## Animation Requirements
- Scroll-triggered entrance animations
- Staggered card appearances
- Smooth hover transitions
- Professional micro-interactions

## Style Guidelines
- No carousels or sliders
- Focus on readability and professionalism
- Clean, minimal design
- Consistent spacing
- Mobile-optimized layout

## Deliverables
- Full React component with TypeScript
- Sample data array with 4 projects
- Responsive grid layout
- Animation integration
- Dark/light mode support
- Accessibility features

## Integration Notes
- Component should import ProjectCard
- Use existing CSS variables and utilities
- Maintain consistent design system
- Ensure smooth scrolling to section
