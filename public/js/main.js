document.addEventListener('DOMContentLoaded', () => {
    // 0. Immersive Preloader
    initPreloader();

    // 1. Navigation Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Hamburger Menu
    initMobileMenu();

    // 2. Canvas Runic Particle System
    if (typeof initRuneCanvas === 'function') {
        initRuneCanvas();
    }

    // 3. Scroll Reveal Animation
    initScrollReveal();

    // 4. Character Codex Switcher
    if (typeof initCharacterCodex === 'function') {
        initCharacterCodex();
    }

    // 5. Cauldron Interactive Hotspots
    if (typeof initCauldronNodes === 'function') {
        initCauldronNodes();
    }

    // 6. Story Season Switcher
    if (typeof initStorySwitcher === 'function') {
        initStorySwitcher();
    }

    // 7. Premium Cursor Trail
    if (typeof initCursorTrail === 'function') {
        initCursorTrail();
    }

    // 8. Gallery Filter and Lightbox
    if (typeof initGalleryFilter === 'function') {
        initGalleryFilter();
    }
    if (typeof initLightbox === 'function') {
        initLightbox();
    }

    // 9. Character Database Search
    if (typeof initRegistrySearch === 'function') {
        initRegistrySearch();
    }

    // 10. Premium 3D Effects
    initHeroParallax();
    init3DTilt();
});

// Scroll Reveal
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Trigger once
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => revealOnScroll.observe(el));
}

// Mobile Hamburger Menu
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger-btn');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Immersive Preloader Handler
function initPreloader() {
    const preloader = document.getElementById('preloader');
    const statusText = document.getElementById('preloader-status');
    if (!preloader) return;

    // List of cultivation-themed status transitions
    const statuses = [
        "Gathering Soul Qi...",
        "Tempering Celestial Body...",
        "Unlocking Nine Dragons...",
        "Sensing Heavenly Dao...",
        "Ascending to Divinity..."
    ];
    let currentIndex = 0;

    // Cycle text animation
    const textInterval = setInterval(() => {
        if (currentIndex < statuses.length - 1) {
            currentIndex++;
            if (statusText) {
                statusText.textContent = statuses[currentIndex];
            }
        }
    }, 400);

    // Lock page scrolling while loading
    document.body.style.overflow = 'hidden';

    // Fade out preloader when window fully loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            clearInterval(textInterval);
            if (statusText) {
                statusText.textContent = "Ascending to Divinity...";
            }
            // Fade out overlay
            preloader.classList.add('fade-out');
            // Restore scrolling
            document.body.style.overflow = '';
        }, 1000);
    });
}

// 3D Mouse Parallax Effect for Hero Section
function initHeroParallax() {
    const hero = document.getElementById('hero');
    const content = document.querySelector('.hero-content');
    const sealWrapper = document.querySelector('.hero-seal-wrapper');
    if (!hero) return;

    hero.addEventListener('mousemove', (e) => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const mouseX = e.clientX - width / 2;
        const mouseY = e.clientY - height / 2;

        // Shift background slightly (3D depth look)
        const bgX = (mouseX / width) * -35;
        const bgY = (mouseY / height) * -35;
        hero.style.backgroundPosition = `calc(50% + ${bgX}px) calc(50% + ${bgY}px)`;

        // Shift content in opposite direction
        if (content) {
            const contentX = (mouseX / width) * 20;
            const contentY = (mouseY / height) * 20;
            content.style.transform = `translate(${contentX}px, ${contentY}px)`;
        }

        // Translate and tilt seal wrapper
        if (sealWrapper) {
            const sealX = (mouseX / width) * -40;
            const sealY = (mouseY / height) * -40;
            const tiltX = (mouseY / height) * 25; // max 25 degrees
            const tiltY = (mouseX / width) * -25;
            sealWrapper.style.transform = `translateY(-50%) translate(${sealX}px, ${sealY}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        }
    });

    // Reset positions on leave
    hero.addEventListener('mouseleave', () => {
        hero.style.backgroundPosition = '';
        if (content) content.style.transform = '';
        if (sealWrapper) sealWrapper.style.transform = 'translateY(-50%)';
    });
}

// 3D Card Hover Tilt Effect (Arsenal & Registry Cards)
function init3DTilt() {
    const cards = document.querySelectorAll('.arsenal-card, .registry-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Calculate rotation degrees (max 10deg)
            const rotateX = ((centerY - y) / centerY) * 10;
            const rotateY = ((x - centerX) / centerX) * 10;

            // Detect card offset requirements
            const translateOffset = card.classList.contains('arsenal-card') ? '-8px' : '-5px';

            // Real-time smooth tracking transition
            card.style.transition = 'transform 0.1s ease-out, border-color 0.4s, box-shadow 0.4s';
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(${translateOffset})`;
        });

        card.addEventListener('mouseleave', () => {
            // Restore default styles
            card.style.transition = '';
            card.style.transform = '';
        });
    });
}
