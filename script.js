// ========================================
// Mobile Navigation Toggle
// ========================================
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ========================================
// Smooth Scrolling
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Active Navigation Link on Scroll
// ========================================
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ========================================
// Scroll Reveal Animation
// ========================================
function revealOnScroll() {
    const reveals = document.querySelectorAll('.skill-card, .project-card, .contact-item, .about-text, .stat-item');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('scroll-reveal', 'active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ========================================
// Header Background on Scroll
// ========================================
function updateHeaderBackground() {
    const header = document.querySelector('.header');

    if (window.scrollY > 50) {
        header.style.background = 'rgba(15, 23, 42, 0.95)';
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(15, 23, 42, 0.8)';
        header.style.boxShadow = 'none';
    }
}

window.addEventListener('scroll', updateHeaderBackground);

// ========================================
// Typing Effect for Hero Subtitle (Optional)
// ========================================
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.txtElement.innerHTML = this.txt;

        let typeSpeed = 150;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// ========================================
// Initialize on DOM Load
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize scroll reveal
    revealOnScroll();

    // Optional: Add typing effect to subtitle
    // Uncomment the code below if you want a dynamic typing effect
    /*
    const txtElement = document.querySelector('.hero-subtitle');
    if (txtElement) {
        const words = [
            'Desenvolvedor Full Stack',
            'Análise de Dados',
            'Desenvolvedor Web',
            'Desenvolvedor Mobile'
        ];
        new TypeWriter(txtElement, words, 2000);
    }
    */

    // Add fade-in animation to elements
    const animatedElements = document.querySelectorAll('.skill-card, .project-card');
    animatedElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });

    // Console welcome message
    console.log(
        '%c👋 Olá! Bem-vindo ao meu portfólio!',
        'color: #3b82f6; font-size: 20px; font-weight: bold;'
    );
    console.log(
        '%cInteressado em colaborar? Entre em contato: viniciusnoli2016@gmail.com',
        'color: #60a5fa; font-size: 14px;'
    );
});

// ========================================
// Performance Optimization: Throttle Scroll Events
// ========================================
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttle to scroll events for better performance
const throttledScroll = throttle(() => {
    updateActiveNavLink();
    revealOnScroll();
    updateHeaderBackground();
}, 100);

window.addEventListener('scroll', throttledScroll);

// ========================================
// Project Card Hover Effects
// ========================================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ========================================
// Skill Card Interactive Effects
// ========================================
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// ========================================
// Back to Top Button (Optional Enhancement)
// ========================================
function createBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'back-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-color);
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s, transform 0.3s;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
    `;

    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
            button.style.transform = 'scale(1)';
        } else {
            button.style.opacity = '0';
            button.style.transform = 'scale(0.8)';
        }
    });

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
        button.style.background = 'var(--primary-dark)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
        button.style.background = 'var(--primary-color)';
    });
}

// Initialize back to top button
createBackToTopButton();

// ========================================
// Animate Stats Counter
// ========================================
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');

    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        const increment = target / 50;
        let current = 0;

        const updateCounter = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = stat.textContent.includes('+') ? `${target}+` : target;
                clearInterval(updateCounter);
            } else {
                stat.textContent = Math.ceil(current) + (stat.textContent.includes('+') ? '+' : '');
            }
        }, 30);
    });
}

// Trigger stats animation when section is in view
const aboutSection = document.querySelector('.about');
if (aboutSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(aboutSection);
}
