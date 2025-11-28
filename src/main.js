// Global Logic

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', () => {
        const isExpanded = navLinks.classList.contains('active');

        if (isExpanded) {
            navLinks.classList.remove('active');
            navLinks.style.display = ''; // Clear inline style to revert to CSS
            mobileMenuToggle.textContent = '☰';
        } else {
            navLinks.classList.add('active');
            // Inline styles for mobile menu active state
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'fixed';
            navLinks.style.top = '80px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.height = 'calc(100vh - 80px)';
            navLinks.style.backgroundColor = 'rgba(26, 26, 26, 0.98)';
            navLinks.style.padding = '40px';
            navLinks.style.alignItems = 'center';
            navLinks.style.gap = '40px';
            navLinks.style.zIndex = '999';
            mobileMenuToggle.textContent = '✕';
        }
    });
}

// Header Scroll Effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Hero Carousel
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function nextSlide() {
    if (slides.length === 0) return;
    
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Change slide every 5 seconds
if (slides.length > 0) {
    setInterval(nextSlide, 5000);
}

// Scroll Animations (Intersection Observer)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});
