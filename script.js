// =================================
// WARCHARGE Landing Page JavaScript
// =================================

// Handle missing images gracefully
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.hasAttribute('onerror')) {
            img.onerror = function() {
                this.style.opacity = '0.3';
                this.style.border = '2px dashed #444';
                console.warn('Image not found:', this.src);
            };
        }
    });
});

// Language detection and switching
let currentLanguage = 'en';

// Detect DACH region (Germany, Austria, Switzerland)
function detectLanguage() {
    const userLanguage = navigator.language || navigator.userLanguage;
    const countryCode = userLanguage.split('-')[1];
    
    // DACH region codes
    const dachRegions = ['DE', 'AT', 'CH'];
    
    if (dachRegions.includes(countryCode)) {
        currentLanguage = 'de';
    } else {
        currentLanguage = 'en';
    }
    
    applyLanguage(currentLanguage);
}

// Apply language to all elements
function applyLanguage(lang) {
    currentLanguage = lang;
    
    document.querySelectorAll('[data-en]').forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            if (element.tagName === 'INPUT') {
                element.placeholder = text;
            } else {
                element.textContent = text;
            }
        }
    });
    
    // Update placeholders
    document.querySelectorAll('input[data-en-placeholder]').forEach(input => {
        const placeholder = input.getAttribute(`data-${lang}-placeholder`);
        if (placeholder) {
            input.placeholder = placeholder;
        }
    });
}

// Toggle language manually
document.addEventListener('DOMContentLoaded', () => {
    detectLanguage();
    
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLanguage = currentLanguage === 'en' ? 'de' : 'en';
            applyLanguage(currentLanguage);
        });
    }
});

// =================================
// NAVBAR CONDITIONAL VISIBILITY
// =================================

const navbar = document.getElementById('navbar');
let lastScrollPosition = 0;
let isNavbarVisible = true;

function handleNavbarVisibility() {
    const currentScroll = window.pageYOffset;
    const heroSection = document.getElementById('hero');
    const finalCTASection = document.getElementById('final-cta');
    
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    const finalCTATop = finalCTASection.offsetTop;
    
    // Visible at hero section
    if (currentScroll < heroBottom) {
        navbar.classList.remove('hidden');
        isNavbarVisible = true;
    }
    // Hidden between hero and section 7 (final CTA)
    else if (currentScroll >= heroBottom && currentScroll < finalCTATop - 100) {
        if (isNavbarVisible) {
            navbar.classList.add('hidden');
            isNavbarVisible = false;
        }
    }
    // Visible from section 7 onwards
    else if (currentScroll >= finalCTATop - 100) {
        navbar.classList.remove('hidden');
        isNavbarVisible = true;
    }
    
    lastScrollPosition = currentScroll;
}

// =================================
// STICKY FOOTER CTA
// =================================

const stickyFooterCTA = document.getElementById('stickyFooterCTA');

function handleStickyFooter() {
    const scrollPosition = window.pageYOffset;
    const heroSection = document.getElementById('hero');
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    
    // Show sticky footer after scrolling past hero
    if (scrollPosition > heroBottom + 200) {
        stickyFooterCTA.classList.add('visible');
    } else {
        stickyFooterCTA.classList.remove('visible');
    }
}

// =================================
// HAMBURGER MENU
// =================================

const hamburgerBtn = document.getElementById('hamburgerBtn');
const sideMenu = document.getElementById('sideMenu');
const closeMenuBtn = document.getElementById('closeMenuBtn');

if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
        sideMenu.classList.add('active');
    });
}

if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', () => {
        sideMenu.classList.remove('active');
    });
}

// Close menu when clicking on menu items
document.querySelectorAll('.menu-list a').forEach(link => {
    link.addEventListener('click', () => {
        sideMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!sideMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        sideMenu.classList.remove('active');
    }
});

// =================================
// TESTIMONIALS CAROUSEL
// =================================

const testimonials = [
    {
        name: "MARCUS K.",
        quote: "WARCHARGE transformed my entire approach to health and performance. Within two weeks, I noticed dramatic improvements in energy, focus, and recovery. This isn't just a supplement - it's a complete game-changer for any man serious about optimizing his life.",
        credentials: "Former Navy SEAL · Entrepreneur",
        image: "assets/testimonial-marcus.jpg"
    },
    {
        name: "JAMES R.",
        quote: "As a competitive athlete and business owner, I need to perform at the highest level every single day. WARCHARGE delivers on every promise. My testosterone levels are up, my stress is down, and I'm operating at a level I didn't think was possible at 42.",
        credentials: "Professional Athlete · CEO",
        image: "assets/testimonial-james.jpg"
    },
    {
        name: "ALEX M.",
        quote: "I've tried countless supplements over the years, and most deliver marginal results at best. WARCHARGE is different. The comprehensive formula addresses everything - gut health, hormones, energy, cognition. After 90 days, I'm a completely different version of myself.",
        credentials: "Fitness Coach · Health Advocate",
        image: "assets/testimonial-alex.jpg"
    }
];

let currentTestimonialIndex = 0;

function loadTestimonial(index) {
    const testimonial = testimonials[index];
    const content = document.querySelector('.testimonial-content');
    
    // Fade out
    content.classList.add('fade-out');
    
    setTimeout(() => {
        // Update content
        document.querySelector('.testimonial-quote').textContent = testimonial.quote;
        document.querySelector('.testimonial-signature').textContent = testimonial.name;
        document.querySelector('.testimonial-credentials').textContent = testimonial.credentials;
        document.querySelector('.testimonial-image').src = testimonial.image;
        document.querySelector('.testimonial-image').alt = testimonial.name;
        
        // Fade in
        content.classList.remove('fade-out');
        content.classList.add('fade-in');
        
        // Update active button
        document.querySelectorAll('.testimonial-nav-btn').forEach((btn, i) => {
            btn.classList.toggle('active', i === index);
        });
    }, 300);
}

// Navigation buttons
document.querySelectorAll('.testimonial-nav-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        currentTestimonialIndex = index;
        loadTestimonial(index);
    });
});

// Arrow controls
document.querySelector('.testimonial-prev')?.addEventListener('click', () => {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    loadTestimonial(currentTestimonialIndex);
});

document.querySelector('.testimonial-next')?.addEventListener('click', () => {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    loadTestimonial(currentTestimonialIndex);
});

// Load first testimonial on page load
window.addEventListener('DOMContentLoaded', () => {
    loadTestimonial(0);
});

// =================================
// VIDEO TESTIMONIALS CAROUSEL
// =================================

let currentVideoSlide = 0;
const videoCarouselTrack = document.querySelector('.video-carousel-track');
const dots = document.querySelectorAll('.carousel-pagination .dot');

function updateVideoCarousel() {
    const slideWidth = 100; // percentage
    if (videoCarouselTrack) {
        videoCarouselTrack.style.transform = `translateX(-${currentVideoSlide * slideWidth}%)`;
    }
    
    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentVideoSlide);
    });
}

// Auto-rotate video carousel
let videoCarouselInterval = setInterval(() => {
    currentVideoSlide = (currentVideoSlide + 1) % dots.length;
    updateVideoCarousel();
}, 5000);

// Manual dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentVideoSlide = index;
        updateVideoCarousel();
        
        // Reset auto-rotate
        clearInterval(videoCarouselInterval);
        videoCarouselInterval = setInterval(() => {
            currentVideoSlide = (currentVideoSlide + 1) % dots.length;
            updateVideoCarousel();
        }, 5000);
    });
});

// =================================
// FAQ ACCORDION
// =================================

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
        
        // Update icon
        const icon = question.querySelector('.faq-icon');
        if (icon) {
            icon.textContent = isActive ? '+' : '×';
        }
    });
});

// =================================
// EMAIL SIGNUP FORM
// =================================

const signupForm = document.querySelector('.signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = signupForm.querySelector('input[type="email"]').value;
        
        // Here you would typically send the email to your backend
        console.log('Email submitted:', email);
        
        // Show success message
        alert(currentLanguage === 'en' 
            ? 'Thank you for subscribing! Check your email for confirmation.' 
            : 'Vielen Dank für Ihre Anmeldung! Überprüfen Sie Ihre E-Mail zur Bestätigung.');
        
        // Reset form
        signupForm.reset();
    });
}

// =================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// =================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 100; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// =================================
// SCROLL EVENT HANDLERS
// =================================

let scrollTimeout;

window.addEventListener('scroll', () => {
    // Clear timeout on scroll
    clearTimeout(scrollTimeout);
    
    // Set timeout to run functions
    scrollTimeout = setTimeout(() => {
        handleNavbarVisibility();
        handleStickyFooter();
    }, 10);
});

// Initial check on page load
window.addEventListener('load', () => {
    handleNavbarVisibility();
    handleStickyFooter();
});

// =================================
// SCROLL ANIMATIONS
// =================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-element');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections for fade-in animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// =================================
// CART FUNCTIONALITY (Basic)
// =================================

let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');

// Add to cart buttons
document.querySelectorAll('.btn-cta, .btn-hero, .btn-choose').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Don't add to cart if it's a link
        if (btn.tagName === 'A') return;
        
        cartCount++;
        if (cartCountElement) {
            cartCountElement.textContent = cartCount;
            
            // Add animation
            cartCountElement.style.transform = 'scale(1.5)';
            setTimeout(() => {
                cartCountElement.style.transform = 'scale(1)';
            }, 200);
        }
        
        // Show success message (you can replace with a better notification)
        const message = currentLanguage === 'en' 
            ? 'Added to cart!' 
            : 'Zum Warenkorb hinzugefügt!';
        
        // Create temporary notification
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background-color: #e50914;
            color: white;
            padding: 15px 25px;
            border-radius: 5px;
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 2000);
    });
});

// Add animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// =================================
// VIDEO PLAY FUNCTIONALITY
// =================================

document.querySelectorAll('.play-button, .play-button-small').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Here you would typically open a modal with the video
        // For now, we'll just show an alert
        const message = currentLanguage === 'en' 
            ? 'Video player would open here' 
            : 'Videoplayer würde sich hier öffnen';
        
        alert(message);
    });
});

// =================================
// RESPONSIVE ADJUSTMENTS
// =================================

function handleResponsive() {
    const width = window.innerWidth;
    
    // Adjust video carousel for mobile
    if (width < 768) {
        document.querySelectorAll('.video-card').forEach(card => {
            card.style.minWidth = '100%';
        });
    } else if (width < 992) {
        document.querySelectorAll('.video-card').forEach(card => {
            card.style.minWidth = 'calc(50% - 15px)';
        });
    } else {
        document.querySelectorAll('.video-card').forEach(card => {
            card.style.minWidth = 'calc(33.333% - 20px)';
        });
    }
}

window.addEventListener('resize', handleResponsive);
window.addEventListener('load', handleResponsive);

/*
// Custom Cursor Click Animation
let clickAnimationTimeout = null;

document.addEventListener('click', function(e) {
    // Check if click target is or is within a .btn-cta element
    const ctaButton = e.target.closest('.btn-cta');
    
    if (ctaButton) {
        // Clear any existing animation timeout to restart animation
        if (clickAnimationTimeout) {
            clearTimeout(clickAnimationTimeout);
        }
        
        // Add click cursor class
        document.body.classList.add('cursor-click');
        
        // Remove after 260ms and return to hover cursor
        clickAnimationTimeout = setTimeout(function() {
            document.body.classList.remove('cursor-click');
            clickAnimationTimeout = null;
        }, 260);
    }
});
*/

// =================================
// PERFORMANCE OPTIMIZATION
// =================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// =================================
// CONSOLE BRANDING
// =================================

console.log('%c🔥 WARCHARGE', 'font-size: 24px; font-weight: bold; color: #e50914;');
console.log('%cPeak Performance Nutrition', 'font-size: 14px; color: #b3b3b3;');
console.log('%cWebsite developed with warrior precision', 'font-size: 12px; font-style: italic; color: #666;');

