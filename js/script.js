document.addEventListener('DOMContentLoaded', () => {
    const elements = {
        days: document.getElementById("days"),
        hours: document.getElementById("hours"),
        minutes: document.getElementById("minutes"),
        seconds: document.getElementById("seconds")
    };
    
    // Check if all required elements exist
    if (Object.values(elements).every(el => el)) {
        // Store target date once (reduces calculations)
        const targetDate = new Date("May 16, 2025 00:00:00").getTime();
        const timeUnits = {
            days: 86400000,    // 1000 * 60 * 60 * 24
            hours: 3600000,    // 1000 * 60 * 60
            minutes: 60000,    // 1000 * 60
            seconds: 1000      // 1000
        };
        
        const updateCountdown = () => {
            const diff = targetDate - Date.now();
            
            // If countdown is complete
            if (diff <= 0) {
                Object.values(elements).forEach(el => el.innerText = '00');
                clearInterval(timerInterval);
                return;
            }
            
            // Calculate and format time units
            elements.days.innerText = String(Math.floor(diff / timeUnits.days)).padStart(2, '0');
            elements.hours.innerText = String(Math.floor(diff % timeUnits.days / timeUnits.hours)).padStart(2, '0');
            elements.minutes.innerText = String(Math.floor(diff % timeUnits.hours / timeUnits.minutes)).padStart(2, '0');
            elements.seconds.innerText = String(Math.floor(diff % timeUnits.minutes / timeUnits.seconds)).padStart(2, '0');
        };
        
        // Initial call
        updateCountdown();
        
        // Store interval reference for cleanup if needed
        const timerInterval = setInterval(updateCountdown, 1000);
    }

     // Photo gallery logic
     const photos = document.querySelectorAll('.photo-gallery img');
    
     // Only set up gallery if photos exist
     if (photos.length > 0) {
         let currentIndex = 0;
         
         // Make sure first photo is active initially
         if (!photos[0].classList.contains('active')) {
             photos[0].classList.add('active');
         }
         
         // Create a function for the rotation to make it easier to manage
         const rotatePhotos = () => {
             photos[currentIndex].classList.remove('active');
             currentIndex = (currentIndex + 1) % photos.length;
             photos[currentIndex].classList.add('active');
         };
         
         // Use requestAnimationFrame to ensure smooth transitions
         // and avoid layout thrashing
         const galleryInterval = setInterval(() => {
             requestAnimationFrame(rotatePhotos);
         }, 2000);
         
         // Clean up interval if page is hidden/inactive
         document.addEventListener('visibilitychange', () => {
             if (document.hidden) {
                 clearInterval(galleryInterval);
             } else {
                 // Restart interval when page becomes visible again
                 clearInterval(galleryInterval); // Clear any existing interval
                 setInterval(rotatePhotos, 2000);
             }
         });
     }
});