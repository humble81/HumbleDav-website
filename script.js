// ============================================================
// script.js – Shared interactivity for all pages
// ============================================================

document.addEventListener('DOMContentLoaded', function () {
    // ---- Cash Back badges: click to "Claim" ----
    document.querySelectorAll('.service-card__cash, .testimonial-card__cash, .portfolio-card__cash').forEach(el => {
        el.addEventListener('click', function () {
            const original = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check"></i> Claimed!';
            this.style.background = 'rgba(34,197,94,0.15)';
            this.style.borderColor = 'rgba(34,197,94,0.3)';
            this.style.color = '#22c55e';
            setTimeout(() => {
                this.innerHTML = original;
                this.style.background = '';
                this.style.borderColor = '';
                this.style.color = '';
            }, 1200);
        });
    });

    // ---- CTA "Let's Talk To Him" ----
    const talkBtn = document.getElementById('ctaMainBtn');
    if (talkBtn) {
        talkBtn.addEventListener('click', function (e) {
            e.preventDefault();
            window.open('https://wa.me/qr/F5JDKPJ3DZVTI1', '_blank');
        });
    }

    // ---- AI Modified button ----
    const aiBtn = document.getElementById('ctaAIBtn');
    if (aiBtn) {
        aiBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const msgs = [
                '🧠 AI analysis complete. Your site will be 2x faster.',
                '✨ AI suggests adding a dark mode toggle. Done.',
                '📈 AI predicts 40% higher engagement with this layout.',
                '🎯 AI optimized your CTAs for better conversion.'
            ];
            const random = msgs[Math.floor(Math.random() * msgs.length)];
            alert(random);
        });
    }

    // ---- Contact form submission (demo) ----
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('✅ Thank you! Your message has been sent. (Demo)');
            this.reset();
        });
    }

    // ---- Highlight active nav link ----
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav__links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });

    console.log('%c🔥 Humble Dav — Web Developer & Digital Creator', 'font-size:20px; font-weight:bold; color:#fbbf24;');
    console.log('%c📞 +123 814 512 4446  |  Starting at $150', 'font-size:14px; color:#9aa3b0;');
});
