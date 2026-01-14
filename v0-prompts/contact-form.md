# v0.dev Contact Form Enhancement

## PROMPT
Create a premium contact form for a developer portfolio.

## Tech Stack
- Next.js (App Router)
- Tailwind CSS
- Framer Motion
- React Hook Form
- Dark + light mode

## Design Requirements
- Glassmorphism with backdrop blur
- Rounded-xl corners
- Soft shadow with depth
- Green accent on focus
- Smooth transitions

## Content Structure
```tsx
<div className="contact-container">
  <div className="contact-info">
    <h3>Let's Connect</h3>
    <p>Ready to discuss your next project or collaboration opportunity.</p>
    <div className="social-links">
      {socialLinks.map(link => (
        <a href={link.url} className="social-link">
          <SocialIcon />
        </a>
      ))}
    </div>
  </div>
  <div className="contact-form">
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...register('name')} />
        {errors.name && <span className="error">{errors.name.message}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register('email')} />
        {errors.email && <span className="error">{errors.email.message}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" {...register('message')}></textarea>
        {errors.message && <span className="error">{errors.message.message}</span>}
      </div>
      <button type="submit" className="submit-btn">
        {isSubmitting ? 'Sending...' : 'Send Message'}
        <SendIcon />
      </button>
    </form>
  </div>
</div>
```

## Animation Requirements
- Form field focus animations
- Button hover states
- Success/error transitions
- Loading states
- Smooth form validation

## Style Guidelines
- Minimal and professional
- Expensive look
- Consistent spacing
- Mobile responsive
- Accessibility first

## Form Validation
- Real-time validation
- Error state styling
- Success feedback
- Loading indicators
- Accessibility attributes

## Interactive Elements
- Focus states with green glow
- Hover effects
- Form submission feedback
- Social media integration
- Smooth scrolling
