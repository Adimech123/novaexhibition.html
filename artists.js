document.addEventListener('DOMContentLoaded', function () {
    // Get the gallery trigger image and modal
    const galleryTrigger = document.querySelector('.gallery-trigger');
    const galleryModal = document.getElementById('imageGallery');

    // Get gallery elements
    const featuredImage = document.getElementById('featured-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const dots = document.querySelectorAll('.dot');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const fullscreenBtn = document.querySelector('.fullscreen-btn');

    let currentIndex = 0;

    // Open gallery when trigger image is clicked
    galleryTrigger.addEventListener('click', function () {
        galleryModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });

    // Close gallery when clicking outside the image
    galleryModal.addEventListener('click', function (e) {
        if (e.target === galleryModal) {
            closeGallery();
        }
    });

    // Close gallery with ESC key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeGallery();
        }

        // Navigate with arrow keys
        if (galleryModal.style.display === 'block') {
            if (e.key === 'ArrowRight') {
                showNextImage();
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            }
        }
    });

    // Function to close the gallery
    function closeGallery() {
        galleryModal.style.display = 'none';
        document.body.style.overflow = '';
    }

    // Update displayed image
    function updateImage(index) {
        // Update main image
        featuredImage.src = thumbnails[index].src;

        // Update active thumbnail and dot
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        thumbnails[index].classList.add('active');

        // Ensure thumbnail is visible in the row
        thumbnails[index].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });

        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[index]) {
            dots[index].classList.add('active');
        }

        currentIndex = index;
    }

    // Navigate to next image
    function showNextImage() {
        let newIndex = currentIndex + 1;
        if (newIndex >= thumbnails.length) newIndex = 0;
        updateImage(newIndex);
    }

    // Navigate to previous image
    function showPrevImage() {
        let newIndex = currentIndex - 1;
        if (newIndex < 0) newIndex = thumbnails.length - 1;
        updateImage(newIndex);
    }

    // Add click events to thumbnails
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => updateImage(index));
    });

    // Add click events to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => updateImage(index));
    });

    // Previous and next navigation
    prevArrow.addEventListener('click', showPrevImage);
    nextArrow.addEventListener('click', showNextImage);

    // Fullscreen functionality
    fullscreenBtn.addEventListener('click', () => {
        if (featuredImage.requestFullscreen) {
            featuredImage.requestFullscreen();
        } else if (featuredImage.mozRequestFullScreen) { /* Firefox */
            featuredImage.mozRequestFullScreen();
        } else if (featuredImage.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            featuredImage.webkitRequestFullscreen();
        } else if (featuredImage.msRequestFullscreen) { /* IE/Edge */
            featuredImage.msRequestFullscreen();
        }
    });
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