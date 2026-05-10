document.addEventListener('DOMContentLoaded', () => {

    // ── Navbar scroll effect ──────────────────────────────────────
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 60);
        }, { passive: true });
    }

    // ── Smooth scrolling ─────────────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
        });
    });

    // ── Scroll reveal ─────────────────────────────────────────────
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // ── Hamburger menu ────────────────────────────────────────────
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            const open = navLinks.style.display === 'flex';
            navLinks.style.display = open ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'rgba(8,10,12,0.98)';
            navLinks.style.padding = '2rem';
            navLinks.style.gap = '1.5rem';
        });
    }

    // ── Coffee bag subtle parallax on hover ───────────────────────
    document.querySelectorAll('.coffee-bag').forEach(bag => {
        bag.addEventListener('mousemove', e => {
            const rect = bag.getBoundingClientRect();
            const cx = (e.clientX - rect.left) / rect.width - 0.5;
            const cy = (e.clientY - rect.top) / rect.height - 0.5;
            bag.style.transform = `translateY(-8px) rotate(${cx * 3}deg) rotateX(${-cy * 4}deg)`;
        });
        bag.addEventListener('mouseleave', () => {
            bag.style.transform = '';
        });
    });

    // ── Add-to-cart feedback ──────────────────────────────────────
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', function () {
            const original = this.textContent;
            this.textContent = 'Added ✓';
            this.style.background = '#22c55e';
            this.style.color = '#fff';
            this.style.border = '1px solid #22c55e';
            setTimeout(() => {
                this.textContent = original;
                this.style.background = '';
                this.style.color = '';
                this.style.border = '';
            }, 1600);
        });
    });

});