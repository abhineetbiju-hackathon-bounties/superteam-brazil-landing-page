document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
            mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // Scroll Animations (Simple Fade Up)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('fade-up-init');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach(el => {
        el.classList.add('fade-up-init'); // Hide for animation only if JS runs
        observer.observe(el);
    });


    // Stats Counter Animation
    const stats = document.querySelectorAll('.stat-counter');
    const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.getAttribute('data-value'));
                const duration = 2000; // 2 seconds
                let startTimestamp = null;

                const step = (timestamp) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    target.innerHTML = Math.floor(progress * finalValue) + (target.getAttribute('data-suffix') || '');
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    }
                };

                window.requestAnimationFrame(step);
                observer.unobserve(target);
            }
        });
    }, observerOptions);

    stats.forEach(stat => {
        statsObserver.observe(stat);
    });

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-bg-primary/90', 'backdrop-blur-md', 'shadow-md');
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.remove('bg-bg-primary/90', 'backdrop-blur-md', 'shadow-md');
            navbar.classList.add('bg-transparent');
        }
    });


    // Swiper Initialization
    if (document.querySelector('.events-swiper')) {
        const swiper = new Swiper('.events-swiper', {
            slidesPerView: 1.2,
            spaceBetween: 20,
            centeredSlides: false,
            loop: false,
            navigation: {
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2.2,
                },
                1024: {
                    slidesPerView: 3.2,
                    spaceBetween: 30,
                }
            }
        });
    }

    // FAQ Accordion
    const faqButtons = document.querySelectorAll('.faq-btn');
    faqButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('span:last-child');

            // Close other items
            document.querySelectorAll('.faq-content').forEach(item => {
                if (item !== content) {
                    item.style.height = '0px';
                    item.previousElementSibling.querySelector('span:last-child').style.transform = 'rotate(0deg)';
                }
            });

            // Toggle current
            if (content.style.height === '0px' || !content.style.height) {
                content.style.height = content.scrollHeight + 'px';
                icon.style.transform = 'rotate(45deg)';
            } else {
                content.style.height = '0px';
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });

});
