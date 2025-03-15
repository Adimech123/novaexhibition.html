// Event, Website line

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






// Countdown timer

document.addEventListener('DOMContentLoaded', function () {
    // Target date: May 16th, 2025
    const targetDate = new Date('May 16, 2025 00:00:00').getTime();

    // DOM elements
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const currentTimeElement = document.getElementById('current-time');

    // Update countdown function
    function updateCountdown() {
        // Get current date and time
        const now = new Date().getTime();

        // Calculate the time remaining
        const timeRemaining = targetDate - now;

        // Check if the target date has passed
        if (timeRemaining < 0) {
            daysElement.textContent = '0';
            hoursElement.textContent = '0';
            minutesElement.textContent = '0';
            secondsElement.textContent = '0';
            clearInterval(countdown);
            return;
        }

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Update DOM elements
        daysElement.textContent = days;
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');

        // Update current time display
        const currentTime = new Date();
        currentTimeElement.textContent = `Current time: ${currentTime.toLocaleString()}`;
    }

    // Initial call to display the countdown right away
    updateCountdown();

    // Set interval to update countdown every second
    const countdown = setInterval(updateCountdown, 1000);
});
