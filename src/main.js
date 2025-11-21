// Global Logic

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', () => {
        const isExpanded = navLinks.style.display === 'flex';

        if (isExpanded) {
            navLinks.style.display = ''; // Reset to CSS control
            navLinks.classList.remove('mobile-active');
            mobileMenuToggle.textContent = '☰';
        } else {
            navLinks.style.display = 'flex';
            navLinks.classList.add('mobile-active');
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
        navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.98)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
    }
});
