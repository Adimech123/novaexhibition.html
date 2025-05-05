document.addEventListener('DOMContentLoaded', function () {
    // Get carousel elements
    const carouselImages = document.querySelectorAll('.carousel-image');
    const thumbnails = document.querySelectorAll('.carousel-thumbnails .thumbnail');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    const prevArrow = document.querySelector('.carousel-arrow.prev-arrow');
    const nextArrow = document.querySelector('.carousel-arrow.next-arrow');

    let currentIndex = 0;
    let autoSlideInterval;

    // Initialize the carousel
    initCarousel();

    function initCarousel() {
        // Show first image
        showImage(0);

        // Set up automatic sliding
        startAutoSlide();

        // Add event listeners
        prevArrow.addEventListener('click', showPrevImage);
        nextArrow.addEventListener('click', showNextImage);

        // Add event listeners to thumbnails
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function () {
                const index = parseInt(this.getAttribute('data-index'));
                showImage(index);
            });
        });

        // Add event listeners to dots
        dots.forEach(dot => {
            dot.addEventListener('click', function () {
                const index = parseInt(this.getAttribute('data-index'));
                showImage(index);
            });
        });

        // Pause auto-slide on hover
        document.querySelector('.carousel-display').addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });

        // Resume auto-slide on mouse leave
        document.querySelector('.carousel-display').addEventListener('mouseleave', () => {
            startAutoSlide();
        });

        // Add keyboard navigation
        document.addEventListener('keydown', function (e) {
            if (e.key === 'ArrowLeft') {
                showPrevImage();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            }
        });
    }

    // Start automatic sliding
    function startAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(showNextImage, 5000); // Change image every 5 seconds
    }

    // Show specific image by index
    function showImage(index) {
        // Remove active class from all images, thumbnails and dots
        carouselImages.forEach(img => img.classList.remove('active'));
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Add active class to current image, thumbnail and dot
        carouselImages[index].classList.add('active');
        if (thumbnails[index]) thumbnails[index].classList.add('active');
        if (dots[index]) dots[index].classList.add('active');

        // Ensure thumbnail is visible in the scroll area
        if (thumbnails[index]) {
            thumbnails[index].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }

        // Update current index
        currentIndex = index;

        // Reset auto-slide timer
        startAutoSlide();
    }

    // Show previous image
    function showPrevImage() {
        let index = currentIndex - 1;
        if (index < 0) {
            index = carouselImages.length - 1;
        }
        showImage(index);
    }

    // Show next image
    function showNextImage() {
        let index = currentIndex + 1;
        if (index >= carouselImages.length) {
            index = 0;
        }
        showImage(index);
    }
});



// Artist Navigation JavaScript (arrrows: previos artist and next artist)
document.addEventListener('DOMContentLoaded', function () {
    // Array of artist pages - update this with your actual artist pages
    const artistPages = [
        'artist1.html',
        'artist2.html',
        'kristabelle-agius.html', // Assuming this is the current artist page
        'artist4.html',
        'artist5.html'
        // Add all your artist pages here
    ];

    // Find current artist in the array
    const currentPage = window.location.pathname.split('/').pop();
    const currentIndex = artistPages.indexOf(currentPage);

    const prevArtistLink = document.querySelector('.prev-artist');
    const nextArtistLink = document.querySelector('.next-artist');

    // Set previous artist link
    if (currentIndex > 0) {
        prevArtistLink.href = artistPages[currentIndex - 1];
    } else {
        // If this is the first artist, link to the last artist
        prevArtistLink.href = artistPages[artistPages.length - 1];
    }

    // Set next artist link
    if (currentIndex < artistPages.length - 1) {
        nextArtistLink.href = artistPages[currentIndex + 1];
    } else {
        // If this is the last artist, link to the first artist
        nextArtistLink.href = artistPages[0];
    }
});