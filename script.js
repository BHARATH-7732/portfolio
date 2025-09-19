document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio website loaded.");
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add typing effect to the hero section (optional enhancement)
    const heroTitle = document.querySelector('.hero-section h2');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        const typeWriter = () => {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }

    // Add fade-in animation for sections when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('.section-container');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add click analytics (basic tracking)
    const trackClicks = (element, eventName) => {
        element.addEventListener('click', () => {
            console.log(`Analytics: ${eventName} clicked`);
        });
    };

    // Track important interactions
    const resumeBtn = document.querySelector('a[href="CV.pdf"]');
    if (resumeBtn) trackClicks(resumeBtn, 'Resume Download');

    const projectLinks = document.querySelectorAll('.project a');
    projectLinks.forEach((link, index) => {
        trackClicks(link, `Project Link ${index + 1}`);
    });

    const socialLinks = document.querySelectorAll('#contact a');
    socialLinks.forEach(link => {
        const linkText = link.textContent.trim();
        trackClicks(link, `Social Link: ${linkText}`);
    });
});
  