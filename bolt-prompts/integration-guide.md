# Bolt.new Integration Guide

## 🚀 How to Use These Prompts

### Step 1: Visit Bolt.new
1. Go to [bolt.new](https://bolt.new)
2. Sign in with your account
3. Click "New Chat"

### Step 2: Copy & Paste Prompts
1. Open each prompt file from `bolt-prompts/` folder
2. Copy the entire PROMPT section
3. Paste into Bolt.new chat
4. Wait for component generation

### Step 3: Download Components
1. Review generated components
2. Click "Download" or "Copy Code"
3. Save to appropriate folder in your project

### Step 4: Integration Steps

#### Projects Section
```bash
# Replace existing Projects component
src/components/sections/Projects.tsx
```

#### About Section
```bash
# Replace existing About component
src/components/sections/About.tsx
```

#### Skills Section
```bash
# Replace existing Skills component
src/components/sections/Skills.tsx
```

#### Contact Section
```bash
# Replace existing Contact component
src/components/sections/Contact.tsx
```

## 📁 File Structure
```
src/
├── components/
│   ├── sections/
│   │   ├── Hero.tsx (existing)
│   │   ├── About.tsx (Bolt enhanced)
│   │   ├── Skills.tsx (Bolt enhanced)
│   │   ├── Projects.tsx (Bolt enhanced)
│   │   └── Contact.tsx (Bolt enhanced)
│   └── ui/ (existing utilities)
├── bolt-prompts/
│   ├── projects-section.md
│   ├── about-section.md
│   ├── skills-section.md
│   ├── contact-section.md
│   └── integration-guide.md
└── app/
    ├── page.tsx (existing)
    └── api/
        └── contact/route.ts (new for form submission)
```

## 🎯 Component Integration Checklist

### Before Integration
- [ ] Backup current components
- [ ] Test current functionality
- [ ] Note customizations needed
- [ ] Check dependencies

### After Integration
- [ ] Import new components
- [ ] Update page.tsx if needed
- [ ] Test responsive design
- [ ] Verify animations
- [ ] Check accessibility
- [ ] Test theme switching
- [ ] Validate forms
- [ ] Check console for errors
- [ ] Test form submission

## 🔧 Additional Setup

### Form Submission API
Create `src/app/api/contact/route.ts`:
```tsx
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Add your email service integration here
    // Example: SendGrid, Resend, or Nodemailer
    
    console.log('Contact form submission:', body)
    
    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { message: 'Failed to send message' },
      { status: 500 }
    )
  }
}
```

### Dependencies to Install
```bash
npm install react-hook-form @hookform/resolvers
npm install lucide-react framer-motion
```

## 🎨 Design Consistency

### Color Scheme
- Primary: #22c55e (green)
- Background: #0a0a0a (dark)
- Card: rgba(255, 255, 255, 0.05)
- Border: rgba(255, 255, 255, 0.1)

### Typography
- Headings: Inter font, bold
- Body: Inter font, regular
- Code: JetBrains Mono

### Spacing
- Container: max-w-6xl mx-auto
- Cards: p-6 lg:p-8
- Sections: py-16 lg:py-24

## ⚡ Performance Considerations

### Optimizations
- Lazy load images
- Optimize animations
- Minimize re-renders
- Use React.memo where needed
- Implement proper error boundaries

### Accessibility
- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## 🚀 Deployment Ready

### Pre-deployment Checks
- [ ] All components working
- [ ] No console errors
- [ ] Responsive design tested
- [ ] Form submission working
- [ ] Performance optimized
- [ ] SEO metadata updated
- [ ] Accessibility verified

### Build Commands
```bash
# Development
npm run dev

# Production build
npm run build

# Start production
npm start

# Lint and fix
npm run lint
```

## 🎯 Next Steps

1. **Generate Components**: Use Bolt.new with provided prompts
2. **Integrate**: Replace existing components
3. **Setup API**: Create contact form endpoint
4. **Test**: Verify all functionality
5. **Customize**: Add your personal content
6. **Deploy**: Ready for production

## 📞 Support & Troubleshooting

### Common Issues
- **Import errors**: Check file paths and exports
- **Animation issues**: Verify Framer Motion setup
- **Form errors**: Check API endpoint configuration
- **Styling issues**: Ensure Tailwind classes are applied

### Debugging Tips
- Check browser console for errors
- Verify network requests in dev tools
- Test on different screen sizes
- Validate HTML structure
- Check accessibility with screen readers

## 🏆 Final Result

After integration, you'll have:
- **Professional About section** with categorized information
- **Interactive Skills section** with progress indicators
- **Modern Projects section** with responsive grid
- **Functional Contact section** with form validation
- **Consistent design** across all sections
- **Smooth animations** and micro-interactions
- **Mobile-responsive** layout
- **Production-ready** codebase

## 🎉 Success Metrics

Your portfolio will feature:
- ✅ Premium glassmorphism design
- ✅ Smooth scroll animations
- ✅ Interactive components
- ✅ Form functionality
- ✅ Social media integration
- ✅ Responsive design
- ✅ Accessibility features
- ✅ Performance optimization
- ✅ Production deployment ready
