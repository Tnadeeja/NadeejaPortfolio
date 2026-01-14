# v0.dev Skills Grid Enhancement

## PROMPT
Create an interactive skills grid for a premium developer portfolio.

## Tech Stack
- Next.js (App Router)
- Tailwind CSS
- Framer Motion
- Dark + light mode

## Design Requirements
- Glassmorphism cards
- Category-based organization
- Progress indicators
- Green accent highlights
- Smooth animations

## Content Structure
```tsx
<div className="skills-container">
  <div className="category-tabs">
    {categories.map(cat => (
      <button className="tab-btn">{cat.name}</button>
    ))}
  </div>
  <div className="skills-grid">
    {skills.map(skill => (
      <div className="skill-card">
        <div className="skill-icon">
          <SkillIcon />
        </div>
        <div className="skill-info">
          <h4>{skill.name}</h4>
          <div className="progress-bar">
            <div className="progress-fill" style={{width: `${skill.level}%`}}></div>
          </div>
          <span className="skill-level">{skill.level}%</span>
        </div>
      </div>
    ))}
  </div>
</div>
```

## Animation Requirements
- Tab switching transitions
- Card entrance animations
- Progress bar animations
- Hover scale effects
- Smooth category filtering

## Style Guidelines
- Professional and clean
- Consistent spacing
- Mobile responsive
- Accessibility focused
- Premium glassmorphism

## Categories
- Frontend Development
- Backend Development
- Data Science
- Cloud & DevOps
- Tools & Technologies

## Interactive Elements
- Category filtering
- Skill level indicators
- Hover tooltips
- Search functionality
- Sort by proficiency

## Progress Indicators
- Animated progress bars
- Percentage displays
- Visual skill levels
- Color-coded proficiency
- Smooth transitions
