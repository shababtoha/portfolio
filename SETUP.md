# 🚀 Setup Instructions

Follow these steps to get your ultra-modern portfolio up and running!

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

Check your versions:
```bash
node --version
npm --version
```

## Installation Steps

### Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all the required dependencies:
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React (icons)
- And all development dependencies

### Step 2: Start Development Server

Once installation is complete, start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Step 3: Customize Your Portfolio

Now you can customize the portfolio with your own information:

#### 1. Update Personal Information

**Navigation (`src/components/Navigation.tsx`)**
- Line 48: Change `{'<YourName />'}` to your name/brand

**Hero Section (`src/components/Hero.tsx`)**
- Line 18: Update availability status
- Line 29: Change "Your Name" to your actual name
- Line 41: Update your title/role
- Line 47-49: Update your description

**About Section (`src/components/About.tsx`)**
- Lines 44-50: Update your bio
- Lines 12-15: Update stats (years, projects, etc.)

**Footer (`src/App.tsx`)**
- Line 36: Update copyright with your name
- Lines 39-50: Update social media links

#### 2. Update Skills

Edit `src/components/Skills.tsx`:
- Lines 14-28: Add/remove/modify your skills
- Update skill levels (0-100)
- Change categories if needed

#### 3. Add Your Projects

Edit `src/components/Projects.tsx`:
- Lines 17-70: Replace with your actual projects
- Update titles, descriptions, tags
- Add your demo and GitHub URLs
- Mark featured projects

#### 4. Update Contact Information

Edit `src/components/Contact.tsx`:
- Lines 27-35: Update your email and location
- Lines 37-41: Update social media links
- Lines 95-171: Customize the contact form (integrate with backend if needed)

#### 5. Customize Colors (Optional)

Edit `tailwind.config.js` to change the color scheme:
- `primary`: Main accent color (default: cyan `#00f5ff`)
- `secondary`: Secondary accent color (default: purple `#7c3aed`)
- `dark`: Background color (default: `#0a0a0f`)

### Step 4: Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Step 5: Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## 🎨 Customization Tips

### Changing Animations
- All animations use Framer Motion
- Adjust animation values in component files
- Modify `initial`, `animate`, and `transition` props

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `src/App.tsx`
3. Add navigation link in `src/components/Navigation.tsx`

### Modifying Layout
- All styling uses Tailwind CSS utility classes
- Responsive design uses `sm:`, `md:`, `lg:` prefixes
- Glass morphism effect: `.glass` class

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. New site from Git
4. Build command: `npm run build`
5. Publish directory: `dist`

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

## 🐛 Troubleshooting

### Issue: Dependencies not installing
**Solution:** Delete `node_modules` and `package-lock.json`, then run `npm install` again

### Issue: Port already in use
**Solution:** Change the port in `vite.config.ts` or kill the process using port 5173

### Issue: Build errors
**Solution:** Run `npm run lint` to check for TypeScript errors

## 📚 Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## 🆘 Need Help?

If you encounter any issues:
1. Check the console for error messages
2. Ensure all dependencies are installed correctly
3. Verify Node.js version is 18 or higher
4. Clear browser cache and restart dev server

---

**Happy coding! 🎉**

