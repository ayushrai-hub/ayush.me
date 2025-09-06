# Ayush Rai - Portfolio Website

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/ayushrai-hub/ayush.me)
[![Version](https://img.shields.io/badge/version-1.0.0-blue)](https://github.com/ayushrai-hub/ayush.me)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF)](https://vitejs.dev/)

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features advanced animations, SEO optimization, accessibility compliance, and analytics integration.

## 🌟 Features

### 🎯 Core Features
- **Responsive Design**: Mobile-first approach with full responsiveness
- **Dark Mode**: Automatic theme switching with user preference persistence
- **Smooth Animations**: Framer Motion-powered micro-interactions
- **SEO Optimized**: Complete meta tags, structured data, and sitemap
- **Accessibility Compliant**: ARIA labels, keyboard navigation, screen reader support
- **Performance Optimized**: Code splitting, lazy loading, and optimized bundles

### 🚀 Advanced Features
- **Particle Animation**: CSS-based particle system with floating geometric shapes in Hero section
- **Professional Dashboard**: Metrics cards with animated progress bars in Experience section
- **Contact Form**: Enhanced form with Zod validation and error handling
- **Google Analytics**: GA4 fully integrated with custom events
- **Type Safety**: Full TypeScript implementation
- **Component Architecture**: Clean, maintainable component structure

### 🎨 Visual Features
- **Custom Animations**: Smooth gradient transitions and hover effects
- **Professional UI**: Modern card-based layouts with subtle shadows
- **Interactive Elements**: Hover states, focus indicators, and micro-interactions
- **Typography**: Optimized font loading with Google Fonts preloading
- **Icons**: Lucide React icons for consistent UI elements

## 🛠️ Tech Stack

### Frontend Framework
- **React 18** with TypeScript
- **Vite** for build tooling and development server
- **React Router** for client-side routing

### Styling & Animation
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations
- **Custom CSS** for advanced animations and effects

### Development Tools
- **TypeScript** for type safety
- **ESLint** for code linting
- **Jest** for testing
- **React Testing Library** for component testing

### Performance & Optimization
- **React.lazy()** for code splitting
- **Font preloading** for optimized typography
- **Lazy loading** for performance
- **Bundle optimization** with Vite

### Analytics & SEO
- **Google Analytics 4** integration
- **JSON-LD structured data** for rich snippets
- **Meta tags** for social media sharing
- **XML sitemap** for search engines

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── __tests__/       # Component tests
│   ├── __mocks__/       # Mock files for testing
│   ├── About.tsx        # About section
│   ├── Certifications.tsx
│   ├── Contact.tsx      # Contact form with validation
│   ├── Experience.tsx   # Professional experience with dashboard
│   ├── Footer.tsx
│   ├── Hero.tsx         # Hero section with animations
│   ├── Layout.tsx       # Main layout component
│   ├── Navbar.tsx       # Navigation with active section tracking
│   ├── Profiles.tsx     # Social media profiles
│   ├── Projects.tsx     # Project showcase
│   ├── Section.tsx      # Section wrapper component
│   └── Skills.tsx       # Skills with proficiency visualization
├── data/                # Static data files
│   ├── about.ts         # About section data
│   ├── certifications.ts
│   ├── contact.ts       # Contact form data and validation
│   ├── experience.ts    # Professional experience data
│   ├── profiles.ts      # Social media profiles
│   └── projects.ts      # Project data
├── hooks/               # Custom React hooks
│   ├── useAnalytics.ts  # Google Analytics integration
│   └── useDarkMode.ts   # Dark mode management
├── tests/               # Test utilities
├── types/               # TypeScript type definitions
└── styles/
    ├── fonts.css        # Font loading optimization
    └── (CSS animations)

public/
├── sitemap.xml          # XML sitemap for SEO
├── robots.txt           # Robots.txt for crawlers
└── assets/              # Static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ayushrai-hub/ayush.me.git
   cd ayush.me
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your Google Analytics measurement ID
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

### Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## 🔧 Configuration

### Google Analytics
1. Create a GA4 property at [Google Analytics](https://analytics.google.com)
2. Copy your Measurement ID (G-XXXXXXXXXX)
3. Add it to your `.env` file:
   ```env
   VITE_GA_MEASUREMENT_ID=G-YOUR-MEASUREMENT-ID
   ```

### Deployment

#### Vercel (Recommended)
1. Connect your GitHub repository
2. Deploy automatically on push
3. Environment variables are auto-configured

#### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Configure environment variables

## 📊 Performance Metrics

- **Bundle Size**: 169KB total (55KB gzipped)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Lighthouse Score**: 90+ (Performance, Accessibility, SEO, Best Practices)

## 🎨 Design System

### Colors
- **Primary**: Electric Blue (#3b82f6)
- **Accent**: Electric Blue variations
- **Background**: Gray-900 (dark) / White (light)
- **Text**: Gray-50 (dark) / Gray-900 (light)

### Typography
- **Headings**: Poppins (Google Fonts)
- **Body**: Inter (Google Fonts)
- **Code**: JetBrains Mono (system)

### Animations
- **Duration**: 300ms (default), 500ms (page transitions)
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1)
- **Libraries**: Framer Motion for complex animations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React** - A JavaScript library for building user interfaces
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - A utility-first CSS framework
- **Framer Motion** - Production-ready motion library for React
- **Lucide React** - Beautiful & consistent icon toolkit

## 📞 Contact

Ayush Rai - [ayushrai0211@gmail.com](mailto:ayushrai0211@gmail.com)

Project Link: [https://github.com/ayushrai-hub/ayush.me](https://github.com/ayushrai-hub/ayush.me)

## 📈 Roadmap

- [ ] Three.js 3D elements integration
- [x] Advanced particle animations (CSS-based)
- [x] Professional metrics dashboard
- [x] Enhanced contact form validation
- [x] Google Analytics 4 integration
- [x] SEO optimization with structured data
- [ ] CMS integration for content management
- [ ] Multi-language support
- [ ] PWA (Progressive Web App) features

---

⭐ **Star this repo** if you found it helpful!
