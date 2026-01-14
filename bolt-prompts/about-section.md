# Bolt.new About Section

## PROMPT
Build a complete About section for a premium Next.js portfolio.

## Requirements
- Professional presentation of skills and experience
- Responsive grid layout (3 columns desktop, 1 mobile)
- Clean typography and spacing
- Focus on data science and full-stack development

## Design Specifications
- Dark and light mode support
- Subtle scroll animations
- Green accent color (#22c55e)
- Glassmorphism effects
- Professional and clean design

## Technical Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion for animations
- TypeScript for type safety

## Component Structure
```tsx
export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional summary highlighting expertise in data science, machine learning, and full-stack development
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {aboutData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card card-hover p-6 lg:p-8"
            >
              {/* Icon */}
              <motion.div className="flex-shrink-0 text-primary p-3 rounded-lg bg-primary/10 mb-4">
                <item.icon className="w-8 h-8" />
              </motion.div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                
                {/* Details List */}
                <ul className="space-y-2 mt-4">
                  {item.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary/20 mt-1 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div className="text-center mt-16">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn btn-primary inline-flex items-center gap-2"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
```

## Sample Data Structure
```tsx
const aboutData = [
  {
    id: 1,
    title: "Education",
    icon: GraduationCap,
    description: "Bachelor's degree in Computer Science with focus on data structures, algorithms, and machine learning.",
    details: [
      "Relevant coursework: Data Structures, Algorithms, Database Systems",
      "Academic projects: Machine Learning applications, Web development",
      "GPA: 3.8/4.0, Dean's List"
    ]
  },
  {
    id: 2,
    title: "Data Science Expertise",
    icon: Brain,
    description: "Specialized knowledge in machine learning, data analysis, and predictive modeling.",
    details: [
      "Machine Learning: TensorFlow, PyTorch, Scikit-learn",
      "Data Analysis: Pandas, NumPy, Matplotlib",
      "Big Data: Apache Spark, Hadoop, SQL"
    ]
  },
  {
    id: 3,
    title: "Technical Skills",
    icon: Code,
    description: "Comprehensive skill set in modern web development and cloud technologies.",
    details: [
      "Languages: Python, JavaScript, TypeScript, SQL",
      "Frameworks: React, Node.js, Next.js, Django",
      "Tools: Git, Docker, AWS, Google Cloud"
    ]
  }
]
```

## Animation Requirements
- Scroll-triggered entrance animations
- Staggered card appearances
- Smooth hover transitions
- Icon scale effects on hover

## Style Guidelines
- Professional and clean design
- Consistent spacing and typography
- Mobile-optimized layout
- Focus on readability
- Subtle glassmorphism effects

## Deliverables
- Full React component with TypeScript
- Sample data array with 3 sections
- Responsive grid layout
- Animation integration
- Dark/light mode support
- Accessibility features

## Integration Notes
- Use existing CSS variables and utilities
- Maintain consistent design system
- Ensure smooth scrolling to section
- Follow established code patterns
