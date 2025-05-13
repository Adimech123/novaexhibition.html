// Email - Add this to your existing artist.js file

document.addEventListener('DOMContentLoaded', function () {
    // Find the mail icon in social links
    const mailIcon = document.querySelector('a[href*="kristabelleagius02@gmail.com"]');

    // If mail icon exists, update its behavior
    if (mailIcon) {
        // Update the href to use mailto: protocol if it doesn't already
        if (!mailIcon.href.startsWith('mailto:')) {
            mailIcon.href = 'mailto:kristabelleagius02@gmail.com';
        }

        // Add click event listener (optional, as the mailto: will work automatically)
        mailIcon.addEventListener('click', function (e) {
            // This is optional but can be used for tracking or other functionality
            console.log('Email link clicked');

            // The browser will automatically open the default mail client
            // No need to prevent default behavior as mailto: links are handled by the browser
        });
    }

    // Alternative method if you're adding the mail icon programmatically
    // If you have a specific container where social icons are inserted:
    const socialContainer = document.querySelector('.social-links'); // Update selector as needed
    if (socialContainer) {
        // Find all social links
        const socialLinks = socialContainer.querySelectorAll('a');

        socialLinks.forEach(link => {
            // Check if this is the mail icon by looking at the image or other attributes
            const img = link.querySelector('img');
            if (img && img.src.includes('mail.png')) {
                link.href = 'mailto:kristabelleagius02@gmail.com';
            }
        });
    }
});






















document.addEventListener('DOMContentLoaded', function () {
    // Get carousel elements
    const carouselImages = document.querySelectorAll('.carousel-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    const prevArrow = document.querySelector('.carousel-arrow.prev-arrow');
    const nextArrow = document.querySelector('.carousel-arrow.next-arrow');

    let currentIndex = 0;

    // Initialize the carousel
    initCarousel();

    function initCarousel() {
        // Show first image
        showImage(0);

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
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function () {
                showImage(index);
            });
        });
    }

    // Show specific image by index
    function showImage(index) {
        // Remove active class from all images, thumbnails and dots
        carouselImages.forEach(img => img.classList.remove('active'));
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Add active class to current image, thumbnail and dot
        carouselImages[index].classList.add('active');

        // Check if thumbnails or dots exist before trying to access them
        if (thumbnails.length > 0 && thumbnails[index]) {
            thumbnails[index].classList.add('active');
        }

        if (dots.length > 0 && dots[index]) {
            dots[index].classList.add('active');
        }

        // Update current index
        currentIndex = index;
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






















// Artist Navigation JavaScript (arrows: previous artist and next artist)
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