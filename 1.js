// Artist Navigation JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // This could be populated from your backend or a JavaScript array
    const artistPages = [
        'artist1.html',
        'artist2.html',
        'artist3.html',
        'artist4.html',
        // Add all your artist pages here
    ];

    // Update navigation arrows on each artist container
    const artistContainers = document.querySelectorAll('.portrait-container');

    artistContainers.forEach((container, index) => {
        const navArrows = container.nextElementSibling;
        if (navArrows && navArrows.classList.contains('artist-navigation')) {
            const prevArrow = navArrows.querySelector('.nav-arrow:first-child');
            const nextArrow = navArrows.querySelector('.nav-arrow:last-child');

            // Set previous artist link (or disable if first)
            if (index > 0) {
                prevArrow.href = artistPages[index - 1];
            } else {
                prevArrow.classList.add('disabled');
                prevArrow.style.opacity = '0.5';
                prevArrow.style.cursor = 'not-allowed';
            }

            // Set next artist link (or disable if last)
            if (index < artistPages.length - 1) {
                nextArrow.href = artistPages[index + 1];
            } else {
                nextArrow.classList.add('disabled');
                nextArrow.style.opacity = '0.5';
                nextArrow.style.cursor = 'not-allowed';
            }
        }
    });
});