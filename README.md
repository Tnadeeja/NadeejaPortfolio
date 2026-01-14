# Nadeeja Portfolio

A modern, responsive portfolio website built with Next.js 14 and Tailwind CSS.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **next-themes** - Dark/light theme support
- **Lucide React** - Icons (to be added)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── (pages)/        # Route groups
│   ├── api/            # API routes
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable components
│   ├── ui/            # UI components
│   ├── layout/        # Layout components
│   ├── sections/      # Page sections
│   └── theme-provider.tsx # Theme context
├── data/              # Static data
├── lib/               # Utilities
└── styles/            # Additional styles
```

## Features

- ✅ Next.js 14 App Router
- ✅ TypeScript support
- ✅ Tailwind CSS with dark mode
- ✅ Responsive design
- ✅ SEO optimized
- ✅ Clean component architecture

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
