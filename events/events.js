
document.addEventListener('DOMContentLoaded', function () {
    // Get the current page URL
    const currentPage = window.location.pathname.split('/').pop();

    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    // Remove active class from all links
    navLinks.forEach(link => {
        link.classList.remove('active');

        // Add active class to the current page link
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Add click handlers for animation
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // No need to remove/add classes here since the page will reload
            // But you could add this if you're using AJAX for page navigation
        });
    });
});
