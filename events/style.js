/* ===============================
   1. Event | Website line
   =============================== */
/*document.addEventListener("DOMContentLoaded", function () {
    // Get the current page URL
    const currentPage = window.location.pathname.split("/").pop();

    // Get all navigation links
    const navLinks = document.querySelectorAll(".nav-link");

    // Remove active class from all links
    navLinks.forEach(link => {
        link.classList.remove("active");

        // Add active class to the current page link
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // Add click handlers for animation
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // No need to remove/add classes here since the page will reload
            // But you could add this if you're using AJAX for page navigation
        });
    });
});*/

/* ===============================
2. Events slider
=============================== */
/*document.addEventListener("DOMContentLoaded", function () {
    // Get all event content elements
    const eventContents = document.querySelectorAll(".event-content");
    const totalEvents = eventContents.length;
    let currentEventIndex = 0;

    // Get navigation buttons
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

    // Function to show specific event
    function showEvent(index) {
        // Hide all events
        eventContents.forEach(event => {
            event.style.display = "none";
        });

        // Show the selected event
        eventContents[index].style.display = "block";

        // Update current index
        currentEventIndex = index;
    }

    // Add click event for previous button
    prevButton.addEventListener("click", function () {
        // Calculate previous index with wrap-around
        let prevIndex = currentEventIndex - 1;
        if (prevIndex < 0) {
            prevIndex = totalEvents - 1;
        }

        // Show previous event with fade transition
        fadeTransition(function () {
            showEvent(prevIndex);
        });
    });

    // Add click event for next button
    nextButton.addEventListener("click", function () {
        // Calculate next index with wrap-around
        let nextIndex = (currentEventIndex + 1) % totalEvents;

        // Show next event with fade transition
        fadeTransition(function () {
            showEvent(nextIndex);
        });
    });

    // Function to create a smooth transition effect
    function fadeTransition(callback) {
        const container = document.querySelector(".events-container");

        // Fade out
        container.style.opacity = 0;

        // Execute callback after short delay
        setTimeout(function () {
            callback();
            // Fade in
            container.style.opacity = 1;
        }, 300);
    }

    // Add this to your CSS to enable transitions
    const style = document.createElement("style");
    style.textContent = `
        .events-container {
            transition: opacity 0.3s ease;
        }
    `;
    document.head.appendChild(style);

    // Show the first event initially
    showEvent(0);
});*/

/* ===============================
3. Countdown timer
=============================== */
document.addEventListener("DOMContentLoaded", function () {
    // Target date: May 16th, 2025
    const targetDate = new Date("May 16, 2025 00:00:00").getTime();

    // DOM elements
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    // Update countdown function
    function updateCountdown() {
        // Get current date and time
        const now = new Date().getTime();

        // Calculate the time remaining
        const timeRemaining = targetDate - now;

        // Check if the target date has passed
        if (timeRemaining < 0) {
            daysElement.textContent = "0";
            hoursElement.textContent = "00";
            minutesElement.textContent = "00";
            secondsElement.textContent = "00";
            return;
        }

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Update DOM elements
        daysElement.textContent = days;
        hoursElement.textContent = hours.toString().padStart(2, "0");
        minutesElement.textContent = minutes.toString().padStart(2, "0");
        secondsElement.textContent = seconds.toString().padStart(2, "0");
    }

    // Initial call to display the countdown right away
    updateCountdown();

    // Set interval to update countdown every second
    const countdown = setInterval(updateCountdown, 1000);
});
