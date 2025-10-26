# WARCHARGE Landing Page - Deployment Guide

Complete step-by-step guide to deploy your WARCHARGE landing page to GitHub Pages.

## 📋 Pre-Deployment Checklist

### 1. Prepare Your Images

Before deploying, you need to add images to the `assets/` folder. You have two options:

#### Option A: Use the Placeholder Generator (Quick Start)
1. Open `placeholder-generator.html` in your browser
2. Download all the generated placeholder images
3. Save them to the `assets/` folder
4. This gives you a working site immediately, but replace with real images ASAP

#### Option B: Use Real Images (Recommended for Production)
1. Review `assets/IMAGES.md` for the complete list of required images
2. Prepare your product photos, testimonials, and feature images
3. Optimize them (compress to reduce file size)
4. Name them exactly as specified in `IMAGES.md`
5. Place them in the `assets/` folder

### 2. Customize Content

Before going live, personalize the content:

**In `index.html`:**
- [ ] Update product name and descriptions
- [ ] Add your actual price in section 4
- [ ] Update testimonial names and quotes
- [ ] Add your social media links in the footer
- [ ] Verify all links (Terms & Conditions, Privacy Policy, etc.)

**In `script.js`:**
- [ ] Update the testimonials array with real client information
- [ ] Verify the cart functionality meets your needs

**In `styles.css`:**
- [ ] Adjust colors if needed (currently black, gray, red theme)
- [ ] Fine-tune responsive breakpoints for your content

### 3. Test Locally

1. Open `index.html` in multiple browsers:
   - Chrome
   - Firefox
   - Safari (if on Mac)
   - Edge

2. Test responsive design:
   - Desktop (1920px)
   - Tablet (768px)
   - Mobile (375px)

3. Test all interactive features:
   - [ ] Hamburger menu opens/closes
   - [ ] Language switcher works
   - [ ] Testimonial carousel navigates
   - [ ] FAQ accordion expands/collapses
   - [ ] Video testimonials carousel auto-rotates
   - [ ] Smooth scroll on anchor links
   - [ ] Sticky footer CTA appears on scroll
   - [ ] Navbar hides/shows correctly

## 🚀 Deployment Steps

### Method 1: GitHub Desktop (Easiest for Beginners)

1. **Download GitHub Desktop**
   - Go to [desktop.github.com](https://desktop.github.com)
   - Download and install

2. **Create Repository**
   - Open GitHub Desktop
   - File → New Repository
   - Name: `warcharge-landing-page`
   - Local Path: Select your `warchargev2` folder
   - Click "Create Repository"

3. **Make Initial Commit**
   - GitHub Desktop will show all your files
   - Add commit message: "Initial commit: WARCHARGE landing page"
   - Click "Commit to main"

4. **Publish to GitHub**
   - Click "Publish repository"
   - Uncheck "Keep this code private" (must be public for GitHub Pages)
   - Click "Publish Repository"

5. **Enable GitHub Pages**
   - Click "View on GitHub" in GitHub Desktop
   - In the browser, go to repository Settings
   - Scroll to "Pages" in the left sidebar
   - Under "Source", select branch: **main**
   - Click Save
   - Wait 1-2 minutes for deployment

6. **Access Your Site**
   - Your site will be at: `https://yourusername.github.io/warcharge-landing-page/`
   - GitHub will show the URL in the Pages settings

### Method 2: GitHub Web Interface (No Git Installation Required)

1. **Create New Repository**
   - Go to [github.com](https://github.com) and log in
   - Click the "+" icon → "New repository"
   - Repository name: `warcharge-landing-page`
   - Description: "WARCHARGE Peak Performance Nutrition Landing Page"
   - Set to **Public**
   - DO NOT check "Initialize with README"
   - Click "Create repository"

2. **Upload Files**
   - On the repository page, click "uploading an existing file"
   - Drag and drop ALL files:
     - `index.html`
     - `styles.css`
     - `script.js`
     - `README.md`
     - `DEPLOYMENT.md`
     - `.gitignore`
   - Commit message: "Initial commit"
   - Click "Commit changes"

3. **Upload Assets Folder**
   - Click "Add file" → "Upload files"
   - Create folder by typing: `assets/` then dragging images
   - Or drag the entire `assets/` folder
   - Commit changes

4. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Source: **main** branch
   - Folder: **/ (root)**
   - Click Save
   - Wait 1-2 minutes

5. **Verify Deployment**
   - Green checkmark will appear when ready
   - Click the URL to view your live site

### Method 3: Command Line (For Developers)

```bash
# Navigate to your project folder
cd warchargev2

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: WARCHARGE landing page"

# Create repository on GitHub first, then:
git remote add origin https://github.com/yourusername/warcharge-landing-page.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

Then enable GitHub Pages in repository settings.

## 🔧 Post-Deployment Configuration

### Custom Domain (Optional)

If you want to use your own domain (e.g., `warcharge.com`):

1. **Buy a domain** from a registrar (Namecheap, GoDaddy, etc.)

2. **Configure DNS** at your registrar:
   ```
   Type: CNAME
   Host: www
   Value: yourusername.github.io
   
   Type: A (multiple records)
   Host: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```

3. **Update GitHub Pages settings**:
   - Go to Settings → Pages
   - Under "Custom domain", enter: `www.warcharge.com`
   - Check "Enforce HTTPS"
   - Save

4. **Wait for DNS propagation** (can take 24-48 hours)

### Google Analytics (Optional)

To track visitors:

1. Create a Google Analytics account
2. Get your tracking ID (e.g., `G-XXXXXXXXXX`)
3. Add before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🔄 Updating Your Site

### Using GitHub Desktop:

1. Make changes to your files locally
2. Open GitHub Desktop
3. It will show all changed files
4. Add a commit message describing changes
5. Click "Commit to main"
6. Click "Push origin"
7. Wait 1-2 minutes for GitHub Pages to rebuild

### Using GitHub Web Interface:

1. Go to your repository on GitHub
2. Navigate to the file you want to edit
3. Click the pencil icon (Edit)
4. Make changes
5. Scroll down, add commit message
6. Click "Commit changes"
7. Site updates automatically in 1-2 minutes

### Using Command Line:

```bash
# Make your changes to files

# Stage changes
git add .

# Commit with message
git commit -m "Update product description"

# Push to GitHub
git push
```

## 🐛 Troubleshooting

### Site Not Loading

**Problem:** After enabling GitHub Pages, site shows 404

**Solutions:**
- Wait 2-5 minutes for initial deployment
- Make sure repository is Public (Settings → General → Danger Zone)
- Verify `index.html` is in root directory (not in a subfolder)
- Check GitHub Actions tab for build errors

### Images Not Showing

**Problem:** Site loads but images are broken

**Solutions:**
- Verify all images are in the `assets/` folder
- Check image filenames match exactly (case-sensitive)
- Ensure images were committed and pushed to GitHub
- Clear browser cache and hard refresh (Ctrl+Shift+R)

### Navbar Not Hiding/Showing

**Problem:** Conditional navbar visibility not working

**Solutions:**
- Open browser console (F12) and check for JavaScript errors
- Verify `script.js` is loading (check Network tab in DevTools)
- Make sure you're scrolling through multiple sections
- Test in different browsers

### Language Not Switching

**Problem:** German/English toggle not working

**Solutions:**
- Check browser console for errors
- Verify you're clicking the language toggle in the hamburger menu
- Make sure `data-en` and `data-de` attributes are present in HTML

### Sticky Footer Not Appearing

**Problem:** Sticky footer CTA doesn't show when scrolling

**Solutions:**
- Scroll past the hero section (first section)
- Check browser console for JavaScript errors
- Test in different browsers
- Verify `script.js` is loaded

## 📊 Performance Optimization

After deployment, optimize your site:

1. **Compress Images**
   - Use [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app)
   - Target: < 200KB per image

2. **Test Performance**
   - Use [PageSpeed Insights](https://pagespeed.web.dev)
   - Aim for 90+ score

3. **Enable Caching**
   - GitHub Pages automatically handles this

4. **Check Mobile Performance**
   - Test on actual devices
   - Use Chrome DevTools device emulation

## 📱 Testing Checklist

Before announcing your site:

### Desktop (1920px)
- [ ] All sections load correctly
- [ ] Images display properly
- [ ] Navbar hides between sections 2-6
- [ ] Sticky footer appears on scroll
- [ ] All CTAs work
- [ ] Testimonial carousel navigates smoothly
- [ ] FAQ accordion works
- [ ] Video thumbnails display
- [ ] Footer displays correctly

### Tablet (768px)
- [ ] Layout adjusts properly
- [ ] Text remains readable
- [ ] Images scale correctly
- [ ] All interactive elements work
- [ ] Menu hamburger functions

### Mobile (375px)
- [ ] Single column layout works
- [ ] Text is readable without zooming
- [ ] Buttons are tap-friendly
- [ ] Navigation menu usable
- [ ] Forms are functional

### Browsers
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Functionality
- [ ] All links work
- [ ] Forms submit (test email signup)
- [ ] Shopping cart counter increments
- [ ] Language toggle works
- [ ] Smooth scroll functions
- [ ] No console errors

## 🎉 Launch!

Once everything is tested and working:

1. Announce on social media
2. Share the link with your audience
3. Monitor Google Analytics (if installed)
4. Gather feedback and iterate

## 🆘 Need Help?

Common resources:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Bootstrap Documentation](https://getbootstrap.com/docs)
- [MDN Web Docs](https://developer.mozilla.org)

---

**Good luck with your launch!** 🔥

