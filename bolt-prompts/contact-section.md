# Bolt.new Contact Section

## PROMPT
Build a complete Contact section for a premium Next.js portfolio.

## Requirements
- Two-column layout (content left, form right)
- Professional presentation
- Social media integration
- Form validation and submission

## Design Specifications
- Dark and light mode support
- Subtle scroll animations
- Green accent color (#22c55e)
- Glassmorphism effects
- Mobile-responsive design

## Technical Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion for animations
- React Hook Form for form handling
- TypeScript for type safety

## Component Structure
```tsx
export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async (data) => {
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      setSubmitted(true)
    } catch (error) {
      console.error('Form submission error:', error)
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your next project or collaboration opportunity
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Introduction */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <UserIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Let's Connect
                  </h3>
                  <p className="text-muted-foreground">
                    I'm always interested in discussing data science projects and software development opportunities.
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Whether you're looking for a full-stack developer, data scientist, or want to collaborate on an exciting project, 
                I'd love to hear from you. Let's create something amazing together!
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-muted-foreground">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border/50 hover:border-primary/20 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="card card-hover p-8 lg:p-12"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <CheckIcon className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>
                  )}
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    placeholder="john.doe@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register('message', { required: 'Message is required' })}
                    placeholder="Hi Thamindu, I'm interested in..."
                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 resize-none"
                  />
                  {errors.message && (
                    <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-primary w-full flex items-center justify-center gap-2 px-6 py-3 text-base font-medium disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <SendIcon className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
```

## Sample Data Structure
```tsx
const socialLinks = [
  {
    label: "GitHub",
    url: "https://github.com/nadeeja",
    icon: GithubIcon
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/thamindu-nadeeja",
    icon: LinkedinIcon
  },
  {
    label: "Email",
    url: "mailto:contact@nadeeja.com",
    icon: MailIcon
  }
]
```

## Animation Requirements
- Scroll-triggered entrance animations
- Form submission feedback
- Loading states
- Success message animations
- Smooth hover effects

## Style Guidelines
- Professional and clean design
- Consistent spacing and typography
- Mobile-optimized layout
- Focus on readability
- Subtle glassmorphism effects

## Deliverables
- Full React component with TypeScript
- Form validation and submission
- Social media integration
- Success/error states
- Responsive layout
- Dark/light mode support

## Integration Notes
- Use existing CSS variables and utilities
- Maintain consistent design system
- Ensure smooth scrolling to section
- Follow established code patterns
- Create API endpoint for form submission
