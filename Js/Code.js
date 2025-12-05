/* ============================================
   COSMIC JS - ANIMATIONS & INTERACTIONS
   ============================================ */

// ============ PARTICLES BACKGROUND ============

class ParticleSystem {
    constructor(container) {
        this.container = container;
        this.particles = [];
        this.init();
    }

    init() {
        const particleCount = 50;
        for (let i = 0; i < particleCount; i++) {
            this.createParticle();
        }
    }

    createParticle() {
        const particle = {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.5 + 0.3
        };
        this.particles.push(particle);
    }

    update() {
        this.particles.forEach((particle, index) => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.opacity += (Math.random() - 0.5) * 0.02;

            if (particle.opacity <= 0 || particle.opacity >= 1) {
                particle.opacity = Math.max(0.3, Math.min(1, particle.opacity));
            }

            if (particle.x < 0) particle.x = window.innerWidth;
            if (particle.x > window.innerWidth) particle.x = 0;
            if (particle.y < 0) particle.y = window.innerHeight;
            if (particle.y > window.innerHeight) particle.y = 0;
        });
    }
}

// ============ COSMIC CURSOR ============

class CosmicCursor {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.trail = [];
        this.init();
    }

    init() {
        document.addEventListener('mousemove', (e) => {
            this.x = e.clientX;
            this.y = e.clientY;
            this.createTrail();
        });
    }

    createTrail() {
        const trail = document.createElement('div');
        trail.style.cssText = `
            position: fixed;
            left: ${this.x}px;
            top: ${this.y}px;
            width: 8px;
            height: 8px;
            background: radial-gradient(circle, rgba(216, 191, 136, 0.8), rgba(179, 150, 100, 0.4), transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            box-shadow: 0 0 15px rgba(216, 191, 136, 0.7), 0 0 25px rgba(179, 150, 100, 0.3);
        `;

        document.body.appendChild(trail);

        let opacity = 1;
        const interval = setInterval(() => {
            opacity -= 0.08;
            trail.style.opacity = opacity;

            if (opacity <= 0) {
                clearInterval(interval);
                trail.remove();
            }
        }, 30);
    }
}

// ============ SCROLL ANIMATIONS ============

class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'slide-in 0.8s ease-out forwards';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe cards and cosmic boxes
        document.querySelectorAll('.card, .cosmic-box').forEach(el => {
            observer.observe(el);
        });
    }
}

// ============ FLOATING ELEMENTS ============

class FloatingElements {
    constructor() {
        this.elements = document.querySelectorAll('.float-element');
        this.init();
    }

    init() {
        this.elements.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.2}s`;
        });
    }
}

// ============ PARALLAX EFFECT ============

class ParallaxEffect {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const parallaxElements = document.querySelectorAll('[data-parallax]');
            
            parallaxElements.forEach(el => {
                const speed = el.getAttribute('data-parallax');
                el.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }
}

// ============ GLOW EFFECTS ============

class GlowEffects {
    constructor() {
        this.init();
    }

    init() {
        const glowElements = document.querySelectorAll('.glow-text, .btn, a');
        
        glowElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.addGlow(el);
            });

            el.addEventListener('mouseleave', () => {
                this.removeGlow(el);
            });
        });
    }

    addGlow(element) {
        element.style.textShadow = '0 0 20px rgba(216, 191, 136, 0.8), 0 0 40px rgba(179, 150, 100, 0.5)';
        element.style.transition = 'all 0.3s ease';
    }

    removeGlow(element) {
        element.style.textShadow = '';
    }
}

// ============ TYPING EFFECT ============

class TypingEffect {
    constructor(element, text, speed = 50) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.index = 0;
        this.start();
    }

    start() {
        this.type();
    }

    type() {
        if (this.index < this.text.length) {
            this.element.innerHTML += this.text.charAt(this.index);
            this.index++;
            setTimeout(() => this.type(), this.speed);
        }
    }
}

// ============ COUNTER ANIMATION ============

class CounterAnimation {
    constructor(element, target, duration = 2000) {
        this.element = element;
        this.target = target;
        this.duration = duration;
        this.start = 0;
        this.count = 0;
        this.animate();
    }

    animate() {
        const self = this;
        const startTime = Date.now();

        function update() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / self.duration, 1);
            self.count = Math.floor(self.target * progress);
            self.element.textContent = self.count;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }
}

// ============ DARK MODE TOGGLE ============

class ThemeToggle {
    constructor() {
        this.init();
    }

    init() {
        const toggle = document.getElementById('theme-toggle');
        if (toggle) {
            toggle.addEventListener('click', () => {
                document.body.classList.toggle('dark-mode');
                localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
            });

            // Load saved theme
            if (localStorage.getItem('theme') === 'dark') {
                document.body.classList.add('dark-mode');
            }
        }
    }
}

// ============ SMOOTH SCROLL ============

class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href !== '#') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }
}

// ============ INITIALIZATION ============

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all effects
    new ScrollAnimations();
    new FloatingElements();
    new ParallaxEffect();
    new GlowEffects();
    new CosmicCursor();
    new ThemeToggle();
    new SmoothScroll();

    // Animate counters if present
    document.querySelectorAll('[data-counter]').forEach(el => {
        const target = parseInt(el.getAttribute('data-counter'));
        new CounterAnimation(el, target);
    });

    // Typing effect for titles
    const typingElements = document.querySelectorAll('[data-typing]');
    typingElements.forEach(el => {
        const text = el.textContent;
        el.textContent = '';
        new TypingEffect(el, text);
    });
});

// ============ WINDOW RESIZE HANDLER ============

window.addEventListener('resize', () => {
    // Reinitialize effects on resize if needed
});

// ============ EXPORT FOR USE ============

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ParticleSystem,
        CosmicCursor,
        ScrollAnimations,
        FloatingElements,
        ParallaxEffect,
        GlowEffects,
        TypingEffect,
        CounterAnimation,
        ThemeToggle,
        SmoothScroll
    };
}
