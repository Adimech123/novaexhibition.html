document.addEventListener('DOMContentLoaded', () => {
    // Countdown Timer Logic
    const countdownElements = {
        days: document.getElementById("days"),
        hours: document.getElementById("hours"),
        minutes: document.getElementById("minutes"),
        seconds: document.getElementById("seconds")
    };

    const targetDate = new Date("May 16, 2025 00:00:00").getTime();
    const timeUnits = {
        days: 86400000,
        hours: 3600000,
        minutes: 60000,
        seconds: 1000
    };

    let countdownInterval;

    const updateCountdown = () => {
        const diff = targetDate - Date.now();
        if (diff <= 0) {
            Object.values(countdownElements).forEach(el => el.innerText = '00');
            clearInterval(countdownInterval);
            return;
        }

        countdownElements.days.innerText = String(Math.floor(diff / timeUnits.days)).padStart(2, '0');
        countdownElements.hours.innerText = String(Math.floor((diff % timeUnits.days) / timeUnits.hours)).padStart(2, '0');
        countdownElements.minutes.innerText = String(Math.floor((diff % timeUnits.hours) / timeUnits.minutes)).padStart(2, '0');
        countdownElements.seconds.innerText = String(Math.floor((diff % timeUnits.minutes) / timeUnits.seconds)).padStart(2, '0');
    };

    if (Object.values(countdownElements).every(el => el)) {
        updateCountdown();
        countdownInterval = setInterval(updateCountdown, 1000);
    }

    // Photo Gallery Logic
    const photos = document.querySelectorAll('.photo-gallery img');
    let galleryInterval;
    let currentIndex = 0;

    const rotatePhotos = () => {
        if (photos.length === 0) return;
        photos[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % photos.length;
        photos[currentIndex].classList.add('active');
    };

    const startGalleryInterval = () => {
        if (galleryInterval) clearInterval(galleryInterval);
        galleryInterval = setInterval(() => requestAnimationFrame(rotatePhotos), 2000);
    };

    if (photos.length > 0) {
        photos[0].classList.add('active');
        startGalleryInterval();

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                clearInterval(galleryInterval);
                galleryInterval = null;
            } else {
                startGalleryInterval();
            }
        });
    }
});








