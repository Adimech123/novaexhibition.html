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
});