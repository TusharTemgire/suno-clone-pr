# 🎵 Suno Clone - AI Music Generator Landing Page

A modern, feature-rich landing page clone of Suno.com built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## ✨ Features

- 🎨 **Modern UI/UX** - Sleek dark theme with smooth animations
- 📱 **Fully Responsive** - Optimized for all device sizes
- ⚡ **Next.js 16** - Latest version with React Compiler enabled
- 🎭 **Rich Components** - Hero section, featured songs, features grid, pricing, testimonials, and more
- 🖼️ **Optimized Images** - Next.js Image component with Supabase CDN integration
- 🎬 **Video Support** - Embedded video content for testimonials
- 💅 **Tailwind CSS v4** - Latest styling framework with custom animations
- 🧩 **Radix UI** - Accessible component primitives
- 📦 **Component Library** - 40+ pre-built UI components

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Run the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

The page auto-updates as you edit files. Start by modifying `app/page.tsx`.

## 📁 Project Structure

```
suno-clone-pr/
├── app/
│   ├── page.tsx           # Main landing page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   └── global-error.tsx   # Error boundary
├── components/
│   ├── sections/          # Page sections
│   │   ├── hero-section.tsx
│   │   ├── featured-songs-section.tsx
│   │   ├── features-grid-section.tsx
│   │   ├── pricing-section.tsx
│   │   ├── mobile-app-section.tsx
│   │   ├── testimonial-videos-section.tsx
│   │   └── footer-section.tsx
│   ├── ui/               # Reusable UI components (40+)
│   └── ErrorReporter.tsx # Error handling
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── public/              # Static assets
```

## 🎨 Key Sections

### Hero Section
- Dynamic song carousel with smooth animations
- Interactive play buttons with hover effects
- Responsive grid layout

### Featured Songs
- Horizontal scrolling song cards
- Play counts and like counts
- Premium badges for Pro content

### Features Grid
- 6 feature cards with custom animations
- Interactive visualizations
- Calendar heatmap, audio stems, and more

### Pricing Section
- Three-tier pricing (Free, Pro, Premier)
- Monthly/Yearly toggle
- Feature comparison table

### Mobile App Section
- iOS and Android app showcases
- Star ratings and review counts
- Download CTAs

### Testimonials
- Video testimonials from creators
- Social media integration
- Responsive grid layout

## 🛠️ Technologies Used

- **Framework:** Next.js 16.0.1
- **React:** 19.2.0
- **TypeScript:** 5.x
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI
- **Icons:** Lucide React
- **Animations:** tw-animate-css
- **Forms:** React Hook Form + Zod
- **Image Hosting:** Supabase Storage

## 🔧 Configuration

### Image Domains

External images are configured in `next.config.ts`:
- `slelguoygbfzlpylpxfs.supabase.co` - Supabase storage
- `cdn-o.suno.com` - Suno CDN
- `cdn1.suno.ai` - Video content

### TypeScript

Path aliases configured in `tsconfig.json`:
- `@/*` maps to project root
- Enables clean imports like `@/components/ui/button`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🐛 Troubleshooting

### Hydration Errors
All hydration issues have been resolved by using deterministic values instead of random numbers.

### Image Loading Issues
Ensure all external image domains are configured in `next.config.ts`.

### Port Already in Use
If port 3000 is occupied, Next.js will automatically suggest the next available port.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)

## 🚀 Deploy on Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/suno-clone-pr)

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📄 License

This is a practice/educational project. Original design and content belong to Suno.com.

---

Made with ❤️ using Next.js 16 and React 19
