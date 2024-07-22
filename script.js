document.addEventListener("DOMContentLoaded", function() {
    const animatedSection = document.querySelector('.animated-section');

    // Check if the section is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Add class 'visible' when the section is in the viewport
    function handleScroll() {
        if (isInViewport(animatedSection)) {
            animatedSection.classList.add('visible');
        }
    }

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Initial check
    handleScroll();
});
