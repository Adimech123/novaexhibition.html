// Add this to your existing JavaScript file (1.js)

document.addEventListener('DOMContentLoaded', function () {
    // Only initialize the scroll detection on mobile devices
    if (window.innerWidth <= 768) {
        const portraitContainers = document.querySelectorAll('.portrait-container');

        // Initial check for elements that are already in viewport on page load
        checkElementsInViewport();

        // Check elements on scroll
        window.addEventListener('scroll', checkElementsInViewport);

        function checkElementsInViewport() {
            portraitContainers.forEach(container => {
                if (isElementInViewport(container)) {
                    container.classList.add('in-view');
                } else {
                    container.classList.remove('in-view');
                }
            });
        }

        // Helper function to check if element is in viewport
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();

            // Consider element in view when it's at least 40% visible
            const threshold = 0.4;

            // Element height
            const elementHeight = rect.bottom - rect.top;

            // Visible portion
            let visibleTop = Math.max(0, rect.top);
            let visibleBottom = Math.min(window.innerHeight, rect.bottom);

            // If visible area is negative, element is not visible
            if (visibleBottom <= visibleTop) {
                return false;
            }

            // Calculate visible height percentage
            const visibleHeight = visibleBottom - visibleTop;
            const visiblePercentage = visibleHeight / elementHeight;

            return visiblePercentage > threshold;
        }

        // Optional: Add tap/click functionality for mobile
        portraitContainers.forEach(container => {
            container.addEventListener('click', function () {
                // Toggle in-view class on tap/click
                this.classList.toggle('in-view');
            });
        });
    }
});