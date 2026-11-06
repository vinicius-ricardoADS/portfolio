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

// ========================================
// Game Case Study (Cantos GLN)
// ========================================
const GAME_URL = 'https://cantos-r9ki.onrender.com';
const GAME_COLORS = { red: '#d9583f', redNew: '#f08a73', teal: '#1f9e8f', amber: '#e2a32c', violet: '#7a5cc4' };
const GAME_PIECE_COLORS = [GAME_COLORS.red, GAME_COLORS.teal, GAME_COLORS.amber, GAME_COLORS.violet];

const GAME_PIECES = [
    [[0, 0]],
    [[0, 0], [1, 0]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 0], [0, 1], [1, 1]],
    [[0, 0], [1, 0], [2, 0], [3, 0]],
    [[0, 0], [0, 1], [0, 2], [1, 2]],
    [[0, 0], [1, 0], [2, 0], [1, 1]],
    [[1, 0], [2, 0], [0, 1], [1, 1]],
    [[0, 0], [1, 0], [0, 1], [1, 1]],
    [[1, 0], [2, 0], [0, 1], [1, 1], [1, 2]],
    [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]],
    [[0, 0], [0, 1], [0, 2], [0, 3], [1, 3]],
    [[1, 0], [1, 1], [0, 2], [1, 2], [0, 3]],
    [[0, 0], [1, 0], [0, 1], [1, 1], [0, 2]],
    [[0, 0], [1, 0], [2, 0], [1, 1], [1, 2]],
    [[0, 0], [2, 0], [0, 1], [1, 1], [2, 1]],
    [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2]],
    [[0, 0], [0, 1], [1, 1], [1, 2], [2, 2]],
    [[1, 0], [0, 1], [1, 1], [2, 1], [1, 2]],
    [[1, 0], [0, 1], [1, 1], [1, 2], [1, 3]],
    [[0, 0], [1, 0], [1, 1], [1, 2], [2, 2]],
];

const GAME_MINI_BOARDS = {
    start: {
        size: 6,
        alt: 'Peça vermelha cobrindo o canto inferior esquerdo do tabuleiro.',
        pieces: [{ color: 'red', cells: [[0, 5], [0, 4], [0, 3], [1, 5], [2, 5]] }],
    },
    cornerOk: {
        size: 6,
        alt: 'Peça nova encostando na peça vermelha apenas pelo canto: jogada válida.',
        pieces: [
            { color: 'red', cells: [[0, 5], [0, 4], [1, 5]] },
            { color: 'redNew', cells: [[1, 3], [2, 3], [3, 3], [2, 4]] },
        ],
    },
    edgeBad: {
        size: 6,
        alt: 'Peça nova encostando na peça vermelha pelo lado: jogada inválida.',
        pieces: [
            { color: 'red', cells: [[0, 5], [0, 4], [1, 5]] },
            { color: 'redNew', cells: [[1, 4], [2, 4], [3, 4], [2, 3]] },
        ],
        conflict: [[1, 4]],
    },
    rival: {
        size: 6,
        alt: 'Peça vermelha e peça verde encostadas lado a lado: permitido.',
        pieces: [
            { color: 'red', cells: [[1, 4], [2, 4], [3, 4], [2, 3]] },
            { color: 'teal', cells: [[3, 3], [3, 2], [4, 3], [4, 4]] },
        ],
    },
};

function createSvg(tag, attributes = {}) {
    const node = document.createElementNS('http://www.w3.org/2000/svg', tag);
    Object.entries(attributes).forEach(([name, value]) => node.setAttribute(name, value));
    return node;
}

function renderMiniBoard(container) {
    const board = GAME_MINI_BOARDS[container.dataset.miniBoard];
    const svg = createSvg('svg', { viewBox: `0 0 ${board.size} ${board.size}`, class: 'mini-board', role: 'img', 'aria-label': board.alt });

    for (let y = 0; y < board.size; y++) {
        for (let x = 0; x < board.size; x++) {
            svg.append(createSvg('rect', { x, y, width: 1, height: 1, class: 'mini-cell' }));
        }
    }
    board.pieces.forEach(({ color, cells }) => {
        cells.forEach(([x, y]) => {
            svg.append(createSvg('rect', { x: x + 0.05, y: y + 0.05, width: 0.9, height: 0.9, rx: 0.12, fill: GAME_COLORS[color] }));
        });
    });
    (board.conflict || []).forEach(([x, y]) => {
        svg.append(createSvg('rect', { x: x + 0.05, y: y + 0.05, width: 0.9, height: 0.9, rx: 0.12, fill: 'none', stroke: '#dc2626', 'stroke-width': 0.12 }));
    });
    container.append(svg);
}

function renderGamePieces(container) {
    GAME_PIECES.forEach((cells, i) => {
        const width = Math.max(...cells.map(([x]) => x)) + 1;
        const height = Math.max(...cells.map(([, y]) => y)) + 1;
        const side = Math.max(width, height);
        const offsetX = (side - width) / 2;
        const offsetY = (side - height) / 2;
        const color = GAME_PIECE_COLORS[i % GAME_PIECE_COLORS.length];
        const svg = createSvg('svg', { viewBox: `0 0 ${side} ${side}`, role: 'img', 'aria-label': `Peça de ${cells.length} ${cells.length === 1 ? 'bloco' : 'blocos'}` });

        cells.forEach(([x, y]) => {
            svg.append(createSvg('rect', { x: x + offsetX + 0.05, y: y + offsetY + 0.05, width: 0.9, height: 0.9, rx: 0.14, fill: color }));
        });

        const piece = document.createElement('div');
        piece.className = 'game-piece';
        piece.append(svg);
        container.append(piece);
    });
}

function setupRuleBoard() {
    const SIZE = 7;
    const owners = new Map([
        ['2,3', 'red'], ['3,3', 'red'], ['3,4', 'red'], ['2,4', 'red'],
        ['5,1', 'teal'], ['5,2', 'teal'], ['4,2', 'teal'],
    ]);
    const boardEl = document.getElementById('rule-board');
    const result = document.getElementById('rule-result');
    const hint = document.getElementById('rule-hint');
    if (!boardEl || !result || !hint) return;

    const isRed = (x, y) => owners.get(`${x},${y}`) === 'red';
    const touchesSide = (x, y) => isRed(x - 1, y) || isRed(x + 1, y) || isRed(x, y - 1) || isRed(x, y + 1);
    const touchesCorner = (x, y) => isRed(x - 1, y - 1) || isRed(x + 1, y - 1) || isRed(x - 1, y + 1) || isRed(x + 1, y + 1);

    function judge(x, y) {
        if (owners.has(`${x},${y}`)) return { valid: false, text: 'Não vale: essa casa já está ocupada.' };
        if (touchesSide(x, y)) return { valid: false, text: 'Não vale: o bloco encosta no vermelho pelo lado.' };
        if (touchesCorner(x, y)) return { valid: true, text: 'Vale! O bloco toca no vermelho só pelo canto.' };
        return { valid: false, text: 'Não vale: o bloco precisa tocar em uma peça vermelha pelo canto.' };
    }

    const cells = [];
    for (let y = 0; y < SIZE; y++) {
        for (let x = 0; x < SIZE; x++) {
            const cell = document.createElement('button');
            const owner = owners.get(`${x},${y}`);
            const status = owner === 'red' ? ', peça vermelha' : owner === 'teal' ? ', peça verde' : '';
            cell.type = 'button';
            cell.className = 'rule-cell';
            cell.setAttribute('aria-label', `Coluna ${x + 1}, linha ${y + 1}${status}`);
            if (owner) cell.classList.add(`is-${owner}`);
            if (judge(x, y).valid) cell.classList.add('is-anchor');
            cell.addEventListener('click', () => {
                const verdict = judge(x, y);
                cells.forEach(other => other.classList.remove('is-chosen-valid', 'is-chosen-invalid'));
                cell.classList.add(verdict.valid ? 'is-chosen-valid' : 'is-chosen-invalid');
                result.textContent = verdict.text;
                result.classList.toggle('is-valid', verdict.valid);
                result.classList.toggle('is-invalid', !verdict.valid);
            });
            cells.push(cell);
            boardEl.append(cell);
        }
    }

    hint.addEventListener('click', () => {
        const showing = boardEl.classList.toggle('show-hints');
        hint.setAttribute('aria-pressed', String(showing));
        hint.textContent = showing ? 'Ocultar casas válidas' : 'Mostrar casas válidas';
    });
}

function setupGameLightbox() {
    const dialog = document.getElementById('game-lightbox');
    const image = document.getElementById('game-lightbox-image');
    const caption = document.getElementById('game-lightbox-caption');
    const close = document.getElementById('game-lightbox-close');
    if (!dialog || !image || !caption || !close) return;

    document.querySelectorAll('.game-shot').forEach(shot => {
        shot.addEventListener('click', () => {
            image.src = shot.dataset.full;
            image.alt = shot.querySelector('img').alt;
            caption.textContent = shot.dataset.caption;
            dialog.showModal();
        });
    });

    close.addEventListener('click', () => dialog.close());
    // O clique fora do conteúdo atinge o próprio dialog
    dialog.addEventListener('click', event => {
        if (event.target === dialog) dialog.close();
    });
}

// O plano gratuito coloca o servidor em repouso: acorda quando a seção aparece, para o jogo abrir mais rápido
function wakeGameServer() {
    const section = document.getElementById('game');
    if (!section) return;

    const wakeObserver = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) {
            wakeObserver.disconnect();
            fetch(`${GAME_URL}/health`, { mode: 'no-cors' }).catch(() => {});
        }
    }, { rootMargin: '200px' });

    wakeObserver.observe(section);
}

document.querySelectorAll('[data-mini-board]').forEach(renderMiniBoard);
const gamePiecesContainer = document.getElementById('game-pieces');
if (gamePiecesContainer) renderGamePieces(gamePiecesContainer);
setupRuleBoard();
setupGameLightbox();
wakeGameServer();
