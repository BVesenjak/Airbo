# Product Page - Cyber-Zen Quick-Buy Landing

A single-product quick-buy landing page built with plain HTML, CSS, and vanilla JavaScript.

## Files

- `product.html` - Main HTML structure
- `styles_product.css` - Cyber-Zen themed stylesheet
- `script_product.js` - Interactive functionality

## Aesthetic

**Cyber-Zen Theme:**
- Soft neutrals (grays, whites)
- Muted teal accent (#5ba3a0)
- Rounded corners (8-16px)
- Subtle shadows
- Gentle motion & transitions

**Slogan:** "buy your health"

## Sections

1. **Hero Buy Block** (#hero-buy)
   - Product video/image
   - Price with savings badge
   - Variant selectors (size, color, bundle)
   - Quantity stepper
   - Gift wrap option
   - Add to Cart + Buy Now CTAs

2. **Benefits** (#benefits)
   - 4 icon cards: Fast Shipping, Premium Materials, Secure Checkout, 30-Day Returns

3. **Hero Product Featured** (#hero-product)
   - Image gallery with thumbnails
   - Feature list
   - Technical specifications
   - "What's in the box"

4. **Brand Video** (#brand-video)
   - Play overlay video
   - Mission statement
   - Credibility badges

5. **Our DNA** (#our-dna)
   - 3 value tiles: Craftsmanship, Sustainability, Performance

6. **Product Categories** (#categories)
   - Collection cards (Jackets, Accessories, Limited Editions)

7. **Story** (#story)
   - Two-column narrative
   - Founder quote

8. **Gallery** (#gallery)
   - Lifestyle images with lightbox
   - "Shop the Look" variant preselect tags

9. **FAQ** (#faq)
   - Dark-themed accordion
   - 6 common questions

10. **Sticky Cart** (#sticky-cart)
    - Persistent footer after scrolling past hero
    - Product thumbnail, variant, price
    - Quantity controls
    - Quick-add buttons (+1, +2, +12)
    - Buy Now CTA
    - Mini cart count badge

## JavaScript Features

- **State Management:** Tracks selected variant, cart items, quantity, gift wrap
- **Variant Selection:** Interactive pills update price and display
- **Cart System:** Add items, update count, show toast notifications
- **Checkout Builder:** Generates deep-link URLs with variant & quantity
- **Accordion:** Smooth expand/collapse with height animation
- **Lightbox:** Full-screen image viewer with ESC/click-outside close
- **Sticky Cart:** Appears after scrolling past hero (IntersectionObserver)
- **Video Controls:** Auto-play on scroll, pause when out of view
- **Smooth Scroll:** For all anchor links
- **Accessibility:** ARIA attributes, focus management, keyboard support

## Variant System

**Mock Data:**
- Sizes: S, M, L, XL
- Colors: Black, Stone, Sage
- Bundles: Solo ($79.99), Duo ($135.98 - save 15%), Family ($239.97 - save 25%)

**Variant IDs:** Generated as `{size}-{color}-{bundle}` (e.g., `m-black-solo`)

## Accessibility Features

- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard navigation support
- Focus-visible styles
- Reduced motion support (`prefers-reduced-motion`)
- Focus trap in lightbox

## Responsive Design

- Mobile-first approach
- Breakpoint: 768px for tablet/desktop
- Flexible grid layouts (CSS Grid + Flexbox)
- Touch-friendly targets (48px+)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires IntersectionObserver support
- Falls back gracefully for video autoplay restrictions

## Setup

1. Place all files in the same directory
2. Create an `assets/` folder with required images:
   - product-hero.jpg / .mp4
   - product-main.jpg
   - product-detail-1/2/3.jpg
   - product-thumb.jpg
   - brand-video-poster.jpg / brand-video.mp4
   - category-jackets/accessories/limited.jpg
   - gallery-1 through gallery-6.jpg
3. Open `product.html` in browser

## Integration with Main Site

Link from main page CTA buttons:
```html
<a href="product.html" class="btn-cta">GET WARCHARGE NOW</a>
```

## Checkout Integration

Update `buildCheckoutUrl()` in `script_product.js` with your Shopify/payment gateway URL:

```javascript
const baseUrl = 'https://warcharge.store/checkout';
```

## Customization

All design tokens are in `:root` of `styles_product.css`:
- Colors
- Spacing scale
- Border radius
- Shadows
- Timing functions

## Performance

- Lazy-loaded images (loading="lazy")
- Deferred JavaScript (defer)
- Poster frames for videos
- IntersectionObserver for on-demand features
- Minimal external dependencies (only Google Fonts)

---

**Built for:** WARCHARGE
**Theme:** Cyber-Zen
**Tech Stack:** HTML5 + CSS3 + Vanilla JS

