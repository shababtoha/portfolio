# ⚡ Quick Reference Guide

## 🚀 Essential Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## 📁 File Quick Access

### Need to Edit?

**Your Name:**
- `src/components/Navigation.tsx` (Line 48)
- `src/components/Hero.tsx` (Line 29)
- `src/App.tsx` (Line 36)

**Your Title:**
- `src/components/Hero.tsx` (Line 41)

**Bio/About:**
- `src/components/About.tsx` (Lines 44-50)

**Skills:**
- `src/components/Skills.tsx` (Lines 14-28)

**Projects:**
- `src/components/Projects.tsx` (Lines 17-70)

**Contact Info:**
- `src/components/Contact.tsx` (Lines 27-41)

**Colors:**
- `tailwind.config.js` (Lines 7-10)

**Meta Tags:**
- `index.html` (Head section)

---

## 🎨 Quick Customizations

### Change Primary Color
`tailwind.config.js`:
```javascript
primary: '#00f5ff', // ← Change this
```

### Add New Skill
`src/components/Skills.tsx`:
```typescript
{ name: 'Your Skill', level: 90, category: 'Frontend' },
```

### Add New Project
`src/components/Projects.tsx`:
```typescript
{
  title: 'Project Name',
  description: 'Description...',
  tags: ['React', 'Node'],
  image: 'URL',
  demoUrl: 'https://...',
  githubUrl: 'https://...',
  featured: true,
},
```

### Update Social Links
`src/components/Contact.tsx` (Lines 37-41):
```typescript
{ icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
```

---

## 🎯 Component Props Quick Reference

### Framer Motion Common Props
```typescript
initial={{ opacity: 0, y: 20 }}    // Start state
animate={{ opacity: 1, y: 0 }}     // End state
transition={{ duration: 0.6 }}     // Animation timing
whileHover={{ scale: 1.05 }}       // Hover effect
whileTap={{ scale: 0.95 }}         // Click effect
```

### Tailwind Common Classes
```css
glass              /* Glass morphism effect */
text-gradient      /* Gradient text */
glow-text         /* Glowing text shadow */
```

---

## 🐛 Common Issues & Fixes

### Issue: Port already in use
```bash
# Kill process on port 5173
npx kill-port 5173
# Or change port in vite.config.ts
```

### Issue: Module not found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Build fails
```bash
# Check for TypeScript errors
npm run lint
```

---

## 📦 Project Structure at a Glance

```
Portfolio/
├── src/
│   ├── components/          ← Edit these for content
│   │   ├── Navigation.tsx   ← Header
│   │   ├── Hero.tsx         ← Landing
│   │   ├── About.tsx        ← Bio
│   │   ├── Skills.tsx       ← Skills
│   │   ├── Projects.tsx     ← Projects
│   │   └── Contact.tsx      ← Contact
│   ├── App.tsx              ← Main app
│   ├── main.tsx             ← Entry
│   └── index.css            ← Global styles
├── public/                  ← Static assets
├── index.html               ← HTML template
├── tailwind.config.js       ← Colors & theme
├── package.json             ← Dependencies
└── Documentation files      ← Guides
```

---

## 🎨 Color Palette Quick Copy

```css
Primary (Cyan):    #00f5ff
Secondary (Purple): #7c3aed
Dark Background:    #0a0a0f
Dark Lighter:       #1a1a2e
```

---

## 📱 Breakpoints

```css
sm:   640px   /* Small tablets */
md:   768px   /* Tablets */
lg:   1024px  /* Laptops */
xl:   1280px  /* Desktops */
```

---

## 🔗 Useful Links

- Dev server: http://localhost:5173
- Tailwind docs: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion
- React docs: https://react.dev
- Lucide icons: https://lucide.dev

---

## ✅ Pre-Deployment Checklist

- [ ] Updated all personal information
- [ ] Added real projects
- [ ] Updated skills and percentages
- [ ] Changed contact information
- [ ] Updated social media links
- [ ] Tested on mobile/tablet/desktop
- [ ] Ran `npm run build` successfully
- [ ] Replaced placeholder content
- [ ] Updated meta tags
- [ ] Changed favicon

---

## 🚀 Deploy Commands

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run deploy
```

---

**Keep this file handy for quick reference!** 📌

