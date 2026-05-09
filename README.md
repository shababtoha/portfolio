# Shabab Hasnat Toha - Portfolio Website

> **Ultra-modern portfolio site built for landing high-end tech roles at FAANG and top-tier companies**

A comprehensive personal portfolio showcasing full-stack engineering expertise, competitive programming background, leadership impact, and proven results at scale. Built with React, TypeScript, and Tailwind CSS with stunning animations.

![Tech Stack](https://img.shields.io/badge/React-18.3-61DAFB?logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript) ![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css) ![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite)

<!-- Add your own badges after pushing to GitHub:
![CI](https://github.com/USERNAME/REPO/workflows/CI%20-%20Build%20and%20Lint/badge.svg)
![Deploy](https://github.com/USERNAME/REPO/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)
-->

## ✨ What Makes This Portfolio Stand Out

### **Built for Tech Recruiters & Hiring Managers**
Designed specifically to attract **FAANG** and **high-growth tech companies**:
- ✅ Emphasizes **ownership** and **full-stack responsibility**
- ✅ Showcases **measurable business impact** (4B+ events/day, -40% faster incident response)
- ✅ Highlights **data-driven decision making** philosophy
- ✅ Demonstrates **competitive programming** foundation (500+ LeetCode, ACM ICPC)
- ✅ Proves **leadership and mentorship** capabilities across teams
- ✅ Shows **cross-functional collaboration** with Product, Legal, and Data teams
- ✅ Ultra-modern, tech-savvy, clean presentation that stands out

### **Comprehensive Sections**
1. **Hero** - Bold introduction with animated gradients and clear CTAs
2. **About** - Data-driven mindset, ownership mentality, competitive programming background
3. **Experience** - Detailed career timeline from early career to senior role at Agoda
4. **Leadership** - 6 key leadership areas with concrete examples and impact
5. **Competitive Programming** - LeetCode achievements, ACM ICPC, algorithmic strengths
6. **Technical Skills** - Generalist toolkit (no artificial percentages—real capabilities)
7. **Career Impact** - Quantified results and business outcomes
8. **Contact** - Professional contact form with social links

### **Ultra-Modern UX/UI**
- 🎨 Dark theme with neon gradient accents (cyan #00f5ff + purple #7c3aed)
- ✨ Smooth scroll animations with Framer Motion
- 🌊 Glass-morphism design elements throughout
- 📱 Fully responsive across all devices (mobile-first)
- ⚡ Lightning-fast performance with Vite
- 🎭 Animated background blobs and floating elements
- 🖱️ Interactive hover effects and micro-interactions
- 🎯 Smooth section-to-section navigation

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React 18.3 with TypeScript 5.6 |
| **Build Tool** | Vite 6.0 (blazing fast HMR) |
| **Styling** | Tailwind CSS 3.4 |
| **Animations** | Framer Motion 11.15 |
| **Icons** | Lucide React |
| **Package Manager** | Yarn |

## 📦 Getting Started

### Prerequisites
- Node.js 18+ 
- Yarn (or npm)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd Portfolio

# Install dependencies
yarn install

# Start development server
yarn dev

# Open http://localhost:5173 in your browser
```

### Build for Production

```bash
# Create optimized production build
yarn build

# Preview production build locally
yarn preview
```

## 🎯 Project Structure

```
Portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx              # Sticky nav with smooth scroll
│   │   ├── Hero.tsx                   # Landing section with bold intro
│   │   ├── About.tsx                  # Personal story + key stats
│   │   ├── Experience.tsx             # Career timeline (Agoda, Enosis)
│   │   ├── Leadership.tsx             # 6 leadership impact areas
│   │   ├── CompetitiveProgramming.tsx # LeetCode, ACM ICPC achievements
│   │   ├── Skills.tsx                 # Technical toolkit (generalist)
│   │   ├── Projects.tsx               # Career impact & achievements
│   │   └── Contact.tsx                # Contact form + social links
│   ├── App.tsx                        # Main app component
│   ├── main.tsx                       # Entry point
│   └── index.css                      # Global styles + Tailwind config
├── public/                            # Static assets
├── tailwind.config.js                # Tailwind customization
├── postcss.config.js                 # PostCSS setup
├── vite.config.ts                    # Vite configuration
└── package.json                      # Dependencies & scripts
```

## 🎨 Design System

### Color Palette
```css
Primary (Cyan):    #00f5ff  /* Bright, tech-savvy accent */
Secondary (Purple): #7c3aed  /* Deep purple complement */
Background:        #0a0a0f  /* Deep dark background */
Dark Lighter:      #1a1a2e  /* Card/section backgrounds */
```

### Key Design Principles
- **Glass-morphism**: Frosted glass cards with backdrop blur effects
- **Gradient Accents**: Dynamic cyan-to-purple gradients on text and buttons
- **Smooth Animations**: Framer Motion for scroll reveals and interactions
- **Dark Theme**: Modern, tech-savvy dark mode throughout
- **Responsive First**: Mobile-friendly design from the ground up
- **Accessibility**: WCAG 2.1 compliant with proper contrast ratios

## 📝 Customization Guide

### 1. Update Personal Information

Edit these component files with your information:

**Hero.tsx** - Your name, title, and elevator pitch
```typescript
<span className="text-gradient">Your Name Here</span>
<span>Your Role Here</span>
```

**About.tsx** - Personal story, philosophy, stats
```typescript
const stats = [
  { label: 'Production Experience', value: 'X Yrs' },
  { label: 'Events Processed Daily', value: 'XB+' },
  // ... update with your stats
];
```

**Experience.tsx** - Work history and achievements
```typescript
const experiences: ExperienceItem[] = [
  {
    company: 'Your Company',
    role: 'Your Role',
    period: 'Start - End',
    // ... your details
  },
];
```

**Leadership.tsx** - Your leadership examples
**CompetitiveProgramming.tsx** - Your CP achievements
**Projects.tsx** - Your project highlights
**Contact.tsx** - Email, phone, social links

### 2. Modify Theme Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#00f5ff',        // Your primary accent
  secondary: '#7c3aed',      // Your secondary accent
  dark: '#0a0a0f',           // Background color
  'dark-lighter': '#1a1a2e', // Card backgrounds
}
```

### 3. Update Social Links

In `App.tsx` footer and `Contact.tsx`:
```typescript
<a href="https://github.com/yourusername">GitHub</a>
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
```

## 📊 Key Highlights Showcased

### 🏆 Platform Ownership at Scale
- Single owner of Agoda's internal analytics platform
- Processing 4B+ events daily across global teams
- Maintained 99.9%+ uptime while scaling 3x

### 📈 Measurable Business Impact
- Reduced incident response time by 40%
- Improved data accuracy by 20%
- Built testing library reducing defects by 15%

### 👥 Technical Leadership
- Mentored 5+ engineers across backend and analytics
- Led cross-team initiatives (4 teams, multiple time zones)
- Established company-wide testing standards
- Drove GDPR/PDPA compliance for data platforms

### 💻 Competitive Programming Foundation
- 500+ LeetCode problems solved
- ACM ICPC regional competitor
- Strong algorithmic thinking translates to production systems

### 🛠️ Generalist Problem Solver
- Not tied to any single framework or stack
- Learn what's needed to solve the problem
- Full-stack: TypeScript, Node.js, .NET, Python, Kafka, Redis, etc.

## 🚀 Deployment

### GitHub Pages (Automated - Recommended)

Your portfolio includes **automated CI/CD** with GitHub Actions! 🎉

**Setup:**
1. Push your code to GitHub
2. Go to **Settings** → **Pages**
3. Under "Build and deployment", select Source: **GitHub Actions**
4. Every push to `main` will auto-deploy!

Your site will be live at: `https://yourusername.github.io/repository-name`

**Features:**
- ✅ Automatic deployment on every push to main
- ✅ Runs lint and type checks before deploying
- ✅ Manual deployment trigger available
- ✅ Build artifacts saved for 7 days

See [`.github/WORKFLOWS.md`](.github/WORKFLOWS.md) for detailed CI/CD documentation.

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Netlify
1. Connect your GitHub repository
2. Build command: `yarn build`
3. Publish directory: `dist`
4. Deploy!

### GitHub Pages
```bash
# Install gh-pages
yarn add -D gh-pages

# Add to package.json scripts
"deploy": "yarn build && gh-pages -d dist"

# Deploy
yarn deploy
```

## 📧 Contact Information

**Shabab Hasnat Toha**
- 📧 Email: shabab.toha@gmail.com
- 📱 Phone: +66 083 830 9145
- 📍 Location: Bangkok, Thailand
- 💼 Current: Senior Software Engineer at Agoda
- 💼 LinkedIn: [Add your LinkedIn URL]
- 🐱 GitHub: [Add your GitHub URL]

## 📄 License

© 2026 Shabab Hasnat Toha. All rights reserved.

This portfolio is personal property. Feel free to draw inspiration for your own portfolio, but please don't copy directly.

---

<div align="center">

**Built with 💙 for landing high-impact tech roles**

*Generalist problem solver | Full ownership mindset | Data-driven impact*

**Tech Stack:** React • TypeScript • Tailwind CSS • Framer Motion • Vite

</div>


