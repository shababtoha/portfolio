# GitHub Actions Workflows

This portfolio project includes two automated GitHub Actions workflows for continuous integration and deployment.

## 📋 Workflows Overview

### 1. **CI - Build and Lint** (`.github/workflows/ci.yml`)
Runs on every push and pull request to ensure code quality.

**Triggers:**
- Push to `main`, `master`, or `develop` branches
- Pull requests to `main`, `master`, or `develop` branches

**What it does:**
- ✅ Tests on multiple Node.js versions (18.x and 20.x)
- ✅ Installs dependencies with Yarn
- ✅ Runs ESLint to check code quality
- ✅ Runs TypeScript type checking
- ✅ Builds the project to ensure no build errors
- ✅ Uploads build artifacts (from Node 20.x)

**Matrix Strategy:** Tests on both Node.js 18 and 20 to ensure compatibility.

---

### 2. **Deploy to GitHub Pages** (`.github/workflows/deploy.yml`)
Automatically deploys your portfolio to GitHub Pages on every push to main/master.

**Triggers:**
- Push to `main` or `master` branch
- Manual trigger via GitHub Actions UI (`workflow_dispatch`)

**What it does:**
- ✅ Runs full CI checks (lint, type check)
- ✅ Builds production-optimized bundle
- ✅ Deploys to GitHub Pages
- ✅ Provides deployment URL

**Two Jobs:**
1. **Build** - Lint, type check, and build the project
2. **Deploy** - Deploy the built files to GitHub Pages

---

## 🚀 Setup Instructions

### Enable GitHub Pages Deployment

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Add portfolio site with CI/CD"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Build and deployment":
     - Source: **GitHub Actions**
   - Save

3. **Workflow runs automatically:**
   - Every push to `main` triggers deployment
   - Check the **Actions** tab to see progress
   - Your site will be live at: `https://yourusername.github.io/repository-name`

### Manual Deployment

You can also trigger deployment manually:
1. Go to **Actions** tab in your repository
2. Select "Deploy to GitHub Pages"
3. Click **Run workflow**
4. Select branch and run

---

## 📊 Workflow Status Badges

Add these badges to your README.md to show build status:

```markdown
![CI](https://github.com/USERNAME/REPO/workflows/CI%20-%20Build%20and%20Lint/badge.svg)
![Deploy](https://github.com/USERNAME/REPO/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)
```

Replace `USERNAME` and `REPO` with your GitHub username and repository name.

---

## 🔧 Customizing Workflows

### Change Node.js Versions (CI workflow)

Edit `.github/workflows/ci.yml`:
```yaml
strategy:
  matrix:
    node-version: [18.x, 20.x, 22.x]  # Add more versions
```

### Change Deployment Branch

Edit `.github/workflows/deploy.yml`:
```yaml
on:
  push:
    branches: [ main, master, production ]  # Add your branches
```

### Add More Checks

You can add more steps to either workflow:

**Example: Add test step**
```yaml
- name: Run tests
  run: yarn test
```

**Example: Add code coverage**
```yaml
- name: Run tests with coverage
  run: yarn test --coverage

- name: Upload coverage to Codecov
  uses: codecov/codecov-action@v3
```

---

## 🐛 Troubleshooting

### CI Workflow Fails

**"yarn lint" fails:**
- Fix ESLint errors locally: `yarn lint --fix`
- Commit and push the fixes

**"yarn tsc --noEmit" fails:**
- Fix TypeScript errors shown in the logs
- Ensure all imports are correct

**"yarn build" fails:**
- Test build locally: `yarn build`
- Check for missing dependencies

### Deployment Fails

**Pages not enabled:**
- Go to Settings → Pages
- Set Source to "GitHub Actions"

**Permission errors:**
- The workflow already has correct permissions defined
- Check repository settings if issues persist

**Build succeeds but site doesn't update:**
- Wait 1-2 minutes for propagation
- Clear browser cache
- Check the Pages URL in repository settings

---

## 📦 What Gets Deployed

The deployment workflow builds your React app and deploys the contents of the `dist/` folder to GitHub Pages.

**Deployed files include:**
- `index.html` - Main HTML file
- `assets/` - JavaScript, CSS, and other assets
- All optimized and minified for production

---

## ⚡ Performance

- **CI Workflow**: ~2-3 minutes per run
- **Deploy Workflow**: ~3-4 minutes per deployment
- **Caching**: Yarn cache speeds up subsequent runs

---

## 🎯 Best Practices

1. **Always run CI locally first:**
   ```bash
   yarn lint
   yarn tsc --noEmit
   yarn build
   ```

2. **Create feature branches** and use pull requests
   - CI runs on PRs automatically
   - Merge only when CI passes

3. **Use conventional commits:**
   - `feat: add new section`
   - `fix: resolve navigation bug`
   - `docs: update README`

4. **Monitor workflow runs** in the Actions tab

---

## 🔐 Security

- Workflows run in isolated environments
- No secrets needed for basic deployment
- GitHub provides automatic GITHUB_TOKEN
- Permissions are scoped to minimum required

---

Your portfolio now has **enterprise-grade CI/CD** ready to go! 🚀

