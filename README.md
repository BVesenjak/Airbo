# WARCHARGE Landing Page

A high-converting, modern landing page for WARCHARGE - Peak Performance Nutrition.

## 🔥 Features

- **Conditional Navigation**: Smart navbar that appears at the hero section, hides on scroll, and reappears from section 7 onwards for an immersive experience
- **Sticky Footer CTA**: Appears after scrolling past the hero section to maximize conversions
- **Bilingual Support**: Automatically detects DACH region (Germany, Austria, Switzerland) and displays German, otherwise shows English
- **Responsive Design**: Fully responsive across all devices (desktop, tablet, mobile)
- **Interactive Elements**:
  - Testimonial carousel with fade animations
  - Video testimonial slider with auto-rotation
  - Accordion-style FAQ section
  - Email signup with glowing effects
  - Shopping cart functionality
  - Smooth scroll animations

## 🎨 Design

**Color Scheme:**
- Primary: Black (#000000)
- Secondary: Gray shades (#1a1a1a, #2a2a2a, #3a3a3a)
- Accent: Red (#e50914)
- CTA Buttons: White background with black text

**Typography:**
- Mixed-weight display typography for impact
- Pixel-style text for tech aesthetic
- Clean sans-serif for body text

## 📋 Sections

1. **Hero Section** - Product render with tagline and primary CTA
2. **Value Proposition** - MORE-IN-ONE NUTRITION with feature badges
3. **Visual Feature Grid** - 4 benefit cards (Gut Health, High Energy, Mood Balance, Immune Defense)
4. **Product Highlight** - Single product focus with framed imagery
5. **Testimonials** - Interactive carousel with fade transitions
6. **Brand Reinforcement** - 3-column feature grid
7. **Final CTA** - Hero-style section with media frame
8. **Video Testimonials** - Carousel with client reviews
9. **FAQ** - Accordion-style frequently asked questions
10. **Email Signup** - Newsletter subscription with glowing input
11. **Footer** - 4-column layout with social links

## 🚀 Deployment to GitHub Pages

### Method 1: Using GitHub Web Interface

1. **Create a new repository** on GitHub
   - Go to [GitHub](https://github.com) and click "New repository"
   - Name it: `warcharge-landing-page` (or your preferred name)
   - Set to **Public**
   - DO NOT initialize with README (we already have one)

2. **Upload files**
   - Click "uploading an existing file"
   - Drag and drop all files:
     - `index.html`
     - `styles.css`
     - `script.js`
     - `README.md`
     - `assets/` folder with all images
   - Commit the changes

3. **Enable GitHub Pages**
   - Go to repository **Settings**
   - Scroll to **Pages** section (left sidebar)
   - Under "Source", select **main** branch
   - Click **Save**
   - Your site will be live at: `https://yourusername.github.io/warcharge-landing-page/`

### Method 2: Using Git Command Line

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: WARCHARGE landing page"

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/yourusername/warcharge-landing-page.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in repository settings as described above.

## 📁 File Structure

```
warchargev2/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── README.md           # This file
└── assets/             # Images and media
    ├── product-hero.png
    ├── product-detail.png
    ├── product-main.png
    ├── product-lifestyle.png
    ├── gut-health.jpg
    ├── high-energy.jpg
    ├── mood-balance.jpg
    ├── immune-defense.jpg
    ├── video-thumb.jpg
    ├── testimonial-1.jpg
    ├── testimonial-2.jpg
    ├── testimonial-3.jpg
    ├── testimonial-marcus.jpg
    ├── testimonial-james.jpg
    └── testimonial-alex.jpg
```

## 🖼️ Adding Real Images

Replace the placeholder images in the `assets/` folder with your actual product images:

1. **Product Images:**
   - `product-hero.png` - Main hero product render (transparent background recommended)
   - `product-detail.png` - Detailed product shot
   - `product-main.png` - Product for section 4
   - `product-lifestyle.png` - Lifestyle/action shot

2. **Feature Images:**
   - `gut-health.jpg` - Image representing gut health
   - `high-energy.jpg` - Image representing energy/vitality
   - `mood-balance.jpg` - Image representing mental wellness
   - `immune-defense.jpg` - Image representing immune health

3. **Testimonial Images:**
   - `testimonial-marcus.jpg` - Portrait of Marcus K.
   - `testimonial-james.jpg` - Portrait of James R.
   - `testimonial-alex.jpg` - Portrait of Alex M.
   - `testimonial-1.jpg`, `testimonial-2.jpg`, `testimonial-3.jpg` - Video testimonial thumbnails

**Recommended Image Sizes:**
- Product renders: 1000x1000px (PNG with transparency)
- Feature images: 1200x800px (JPG, high quality)
- Testimonial portraits: 800x800px (JPG)
- Video thumbnails: 640x480px (JPG)

## 🌐 Language Support

The site automatically detects the user's location:
- **German (DE)**: Shown to users from Germany, Austria, Switzerland
- **English (EN)**: Shown to all other users

Users can manually toggle between languages using the language switcher in the hamburger menu.

To add or modify translations, update the `data-en` and `data-de` attributes in `index.html`.

## 🛠️ Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --black: #000000;
    --red: #e50914;
    --white: #ffffff;
    /* etc. */
}
```

### Content
All content is in `index.html`. Search for `data-en` and `data-de` attributes to update bilingual text.

### Testimonials
Edit the testimonials array in `script.js`:
```javascript
const testimonials = [
    {
        name: "MARCUS K.",
        quote: "Your quote here...",
        credentials: "Title · Company",
        image: "assets/testimonial-marcus.jpg"
    },
    // Add more...
];
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technical Details

- **Framework**: Bootstrap 5.3.0
- **Icons**: Font Awesome 6.4.0
- **No build tools required**: Pure HTML, CSS, and vanilla JavaScript
- **Performance**: Lazy loading images, optimized animations
- **SEO**: Semantic HTML structure, proper meta tags

## 📄 License

This project is proprietary. All rights reserved.

## 🤝 Support

For issues or questions, please contact the development team.

---

**Built with warrior precision** 🔥

