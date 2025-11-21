// Menu Page Logic

// Smooth Scroll for Pills
const pills = document.querySelectorAll('.menu-pill');

pills.forEach(pill => {
    pill.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = pill.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offset = 100; // Adjust for sticky header
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = targetSection.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active State for Pills on Scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    pills.forEach(pill => {
        pill.classList.remove('active');
        if (pill.getAttribute('href').includes(current)) {
            pill.classList.add('active');
            pill.style.backgroundColor = 'var(--color-gold)';
            pill.style.color = 'var(--color-charcoal)';
            pill.style.borderColor = 'var(--color-gold)';
        } else {
            pill.style.backgroundColor = '';
            pill.style.color = '';
            pill.style.borderColor = '';
        }
    });
});
