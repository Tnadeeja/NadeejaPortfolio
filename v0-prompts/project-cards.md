# v0.dev Project Cards Enhancement

## PROMPT
Create modern project cards for a premium developer portfolio.

## Tech Stack
- Next.js (App Router)
- Tailwind CSS
- Framer Motion
- Dark + light mode

## Design Requirements
- Glassmorphism with backdrop blur
- Rounded-xl corners
- Soft shadow with depth
- Green accent glow on hover
- Smooth transitions

## Content Structure
```tsx
<div className="project-card">
  <div className="image-container">
    <img src={projectImage} alt={projectTitle} />
    <div className="overlay">
      {/* Tech stack badges */}
    </div>
  </div>
  <div className="content">
    <h3>{projectTitle}</h3>
    <p>{projectDescription}</p>
    <div className="tech-stack">
      {techStack.map(tech => (
        <span className="tech-badge">{tech}</span>
      ))}
    </div>
    <div className="actions">
      <button className="github-btn">
        <GithubIcon />
        View Code
      </button>
      <button className="live-btn">
        <ExternalLinkIcon />
        Live Demo
      </button>
    </div>
  </div>
</div>
```

## Animation Requirements
- Subtle hover lift (translateY -4px)
- Scale effect on hover (1.02)
- Green glow transition
- Smooth shadow changes
- Badge entrance animations

## Style Guidelines
- Minimal and professional
- Expensive look
- Consistent spacing
- Mobile responsive
- Accessibility first

## Tech Stack Badges
- Python, React, Next.js, TypeScript
- Tailwind CSS, Node.js, MongoDB
- Machine Learning, Data Science
- AWS, Docker, Git

## Interactive Elements
- Hover state with glow
- Click to expand details
- Smooth transitions
- Loading states
- Error handling
