import { App } from '../components/App.js';

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Render the main app
    const appContainer = document.getElementById('app');
    if (appContainer) {
        appContainer.innerHTML = App();
    }

    // Initialize all the functionality after components are rendered
    initializeApp();
});

function initializeApp() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = '#ffffff';
            header.style.backdropFilter = 'none';
        }

        lastScrollTop = scrollTop;
    });

    // Animate elements on scroll - EXCLUDING problem-section to prevent spacing issues
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation - EXCLUDE problem-section
    const animateElements = document.querySelectorAll('.strength-item, .case-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Contact button functionality
    const contactButtons = document.querySelectorAll('.btn-primary');
    contactButtons.forEach(button => {
        button.addEventListener('click', function () {
            // You can replace this with your actual contact form logic
            alert('お問い合わせフォームが開きます。実際の実装では、モーダルやフォームページに遷移してください。');
        });
    });



    // Strength items counter animation
    const strengthNumbers = document.querySelectorAll('.strength-number');
    strengthNumbers.forEach(number => {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumber(number);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(number);
    });

    function animateNumber(element) {
        const targetNumber = parseInt(element.textContent);
        let currentNumber = 0;
        const increment = targetNumber / 20;

        const timer = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= targetNumber) {
                currentNumber = targetNumber;
                clearInterval(timer);
            }
            element.textContent = Math.floor(currentNumber);
        }, 50);
    }

    // Case study cards interaction
    const caseItems = document.querySelectorAll('.case-item');
    caseItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });

    // Parallax effect for hero section - DISABLED to prevent spacing issues
    // const heroBackground = document.querySelector('.hero-background');
    // if (heroBackground) {
    //     window.addEventListener('scroll', function () {
    //         const scrolled = window.pageYOffset;
    //         const rate = scrolled * -0.1;
    //         heroBackground.style.transform = `translateY(${rate}px)`;
    //     });
    // }

    // Mobile menu toggle (for responsive design)
    const mobileMenuToggle = document.createElement('button');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.innerHTML = '☰';

    // Create mobile overlay container
    const mobileOverlay = document.createElement('div');
    mobileOverlay.className = 'mobile-overlay';

    const headerContent = document.querySelector('.header-content');
    const navMenu = document.querySelector('.nav-menu');
    const contactBtn = document.querySelector('.contact-btn');

    if (headerContent && navMenu) {
        // Add hamburger button to header
        headerContent.appendChild(mobileMenuToggle);

        // Clone nav and contact button for overlay
        const navMenuClone = navMenu.cloneNode(true);
        const contactBtnClone = contactBtn ? contactBtn.cloneNode(true) : null;

        // Add cloned elements to overlay
        mobileOverlay.appendChild(navMenuClone);
        if (contactBtnClone) {
            mobileOverlay.appendChild(contactBtnClone);
        }

        // Add overlay to body
        document.body.appendChild(mobileOverlay);

        // Create close button for overlay
        const closeButton = document.createElement('button');
        closeButton.className = 'mobile-close-btn';
        closeButton.innerHTML = '✕';
        mobileOverlay.appendChild(closeButton);

        // Toggle overlay when hamburger is clicked
        mobileMenuToggle.addEventListener('click', function () {
            mobileOverlay.classList.add('active');
        });

        // Close overlay when close button is clicked
        closeButton.addEventListener('click', function () {
            mobileOverlay.classList.remove('active');
        });

        // Close overlay when a nav link is clicked
        const overlayLinks = mobileOverlay.querySelectorAll('.nav-link');
        overlayLinks.forEach(link => {
            link.addEventListener('click', function () {
                mobileOverlay.classList.remove('active');
            });
        });
    }

    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function () {
            this.style.opacity = '1';
        });

        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
    });

    // Smooth reveal animation for sections
    function revealOnScroll() {
        const sections = document.querySelectorAll('section');
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionVisible = 150;

            if (sectionTop < windowHeight - sectionVisible) {
                section.classList.add('active');
            }
        });
    }

    // Add CSS for reveal animation
    const revealCSS = `
        section {
            opacity: 0;
            transform: translateY(50px);
            transition: opacity 0.8s ease, transform 0.8s ease;
            margin: 0;
            padding: 0;
        }
        
        section.active {
            opacity: 1;
            transform: translateY(0);
        }
        
        .hero, .problem-section {
            opacity: 1;
            transform: none;
        }
    `;

    const revealStyle = document.createElement('style');
    revealStyle.textContent = revealCSS;
    document.head.appendChild(revealStyle);

    // Initialize reveal animation
    setTimeout(() => {
        revealOnScroll();
    }, 100);

    window.addEventListener('scroll', revealOnScroll);
}
