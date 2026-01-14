# Bolt.new Skills Section

## PROMPT
Build a complete Skills section for a premium Next.js portfolio.

## Requirements
- Categorized skill presentation
- Responsive grid layout
- Progress indicators for skill levels
- Clean and professional design

## Design Specifications
- Dark and light mode support
- Subtle scroll animations
- Green accent color (#22c55e)
- Glassmorphism effects
- Category-based organization

## Technical Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion for animations
- TypeScript for type safety

## Component Structure
```tsx
export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory)

  return (
    <section id="skills" className="section">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across data science, full-stack development, and cloud technologies
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                activeCategory === category.id
                  ? 'border-primary/30 bg-primary/10 text-primary'
                  : 'border-border/50 hover:border-primary/20'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="card card-hover p-6"
            >
              {/* Skill Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 text-primary p-2 rounded-lg bg-primary/10">
                  <skill.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{skill.name}</h4>
                  <span className="text-xs text-muted-foreground">{skill.category}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Proficiency</span>
                  <span className="text-primary font-medium">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-muted/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-1 mt-3">
                {skill.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs px-2 py-1 rounded bg-muted/20 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

## Sample Data Structure
```tsx
const categories = [
  { id: 'all', name: 'All Skills' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'data-science', name: 'Data Science' },
  { id: 'cloud', name: 'Cloud & DevOps' }
]

const skillsData = [
  {
    id: 1,
    name: "React",
    category: "frontend",
    level: 90,
    icon: ReactIcon,
    tags: ["JavaScript", "Hooks", "Next.js"]
  },
  {
    id: 2,
    name: "Python",
    category: "data-science",
    level: 85,
    icon: PythonIcon,
    tags: ["Data Analysis", "ML", "Django"]
  },
  {
    id: 3,
    name: "Node.js",
    category: "backend",
    level: 80,
    icon: NodeIcon,
    tags: ["Express", "API", "JavaScript"]
  },
  {
    id: 4,
    name: "TensorFlow",
    category: "data-science",
    level: 75,
    icon: BrainIcon,
    tags: ["Machine Learning", "Deep Learning", "Neural Networks"]
  },
  {
    id: 5,
    name: "AWS",
    category: "cloud",
    level: 70,
    icon: CloudIcon,
    tags: ["EC2", "S3", "Lambda"]
  },
  {
    id: 6,
    name: "TypeScript",
    category: "frontend",
    level: 85,
    icon: TypeScriptIcon,
    tags: ["Types", "Interfaces", "Generics"]
  }
]
```

## Animation Requirements
- Category filter transitions
- Progress bar animations on load
- Card entrance animations
- Smooth hover effects

## Style Guidelines
- Professional and clean design
- Consistent spacing and typography
- Mobile-optimized layout
- Focus on readability
- Subtle glassmorphism effects

## Deliverables
- Full React component with TypeScript
- Sample data array with skills and categories
- Category filtering functionality
- Progress bar animations
- Responsive grid layout
- Dark/light mode support

## Integration Notes
- Use existing CSS variables and utilities
- Maintain consistent design system
- Ensure smooth scrolling to section
- Follow established code patterns
