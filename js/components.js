document.addEventListener('DOMContentLoaded', function () {
    // Load navigation component
    loadComponent('nav-component', './components/nav.html');

    // Load background component
    loadComponent('background-component', './components/background.html');

    // Load footer component
    loadComponent('footer-component', './components/footer.html');
});

// Function to load HTML components
function loadComponent(elementId, url) {
    const element = document.getElementById(elementId);
    if (!element) return;

    try {
        // Try XMLHttpRequest first (works better with local files in some browsers)
        const xhr = new XMLHttpRequest();

        // Use synchronous request for local files (not recommended for production)
        xhr.open('GET', url, false);

        // Handle potential security errors
        try {
            xhr.send();

            if (xhr.status === 200) {
                element.innerHTML = xhr.responseText;
                return;
            }
        } catch (xhrError) {
            console.warn("XMLHttpRequest failed, falling back to alternative methods:", xhrError);
        }

        const components = {
            './components/nav.html': `
                <!-- Navigation content -->
                <nav class="navbar navbar-expand-lg custom-navbar">
                    <div class="container">
                        <a class="navbar-brand" href="indexfinal.html">
                            <img src="./images/novalogo.png" alt="Logo">
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul class="navbar-nav links">
                                <li class="nav-item">
                                    <a class="nav-link" href="allevents.html">Events</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="artists.html">Artists</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="sponsors.html">Sponsors</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="contacts.html">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            `,
            './components/background.html': `
                <!-- Background content -->
                <div class="background">
                    <div class="circle" id="circle1"></div>
                    <div class="circle" id="circle2"></div>
                    <div class="circle" id="circle3"></div>
                </div>
            `,
            './components/footer.html': `
                <!-- Footer content -->
                <footer class="footer">
                    <div class="social-media-container">
                        <a href="https://instagram.com/nova.bfa" target="_blank">
                            <img class="social-icon" src="./images/instagram.png" alt="Instagram">
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61574121508715" target="_blank">
                            <img class="social-icon" src="./images/facebook.png" alt="Facebook">
                        </a>
                        <a href="https://www.tiktok.com/@nova.bfa" target="_blank">
                            <img class="social-icon" src="./images/tiktok.png" alt="TikTok">
                        </a>
                    </div>
                    
                    <div class="nav-links">
                        <a href="indexfinal.html">Home</a>
                        <a href="allevents.html">Events</a>
                        <a href="artists.html">Artists</a>
                        <a href="sponsors.html">Sponsors</a>
                        <a href="contacts.html">Contact</a>
                    </div>
                    
                    <div class="copyright">
                        NOVA | BFA Digital Arts 2025
                    </div>
                </footer>
            `
        };

        // Check if we have this component defined
        if (components[url]) {
            element.innerHTML = components[url];
            console.log(`Loaded component ${url} from predefined templates`);
            return;
        }

        // If we reach here, all methods failed
        throw new Error("Could not load component");

    } catch (error) {
        console.error(`Error loading component: ${error}`);
        element.innerHTML = `<div class="alert alert-danger">Failed to load component</div>`;
    }
}






function scrollToContent() {
    // Make the navbar visible first
    const navbar = document.getElementById('nav-component');
    if (navbar) {
        navbar.style.display = 'block';
        navbar.classList.add('navbar-visible');

        // Set the navbarShown flag to true (make sure it's accessible)
        if (typeof navbarShown !== 'undefined') {
            navbarShown = true;
        } else {
            // If we can't access the variable directly, we'll set a data attribute instead
            document.body.setAttribute('data-navbar-shown', 'true');
        }

        // Scroll to the navbar
        navbar.scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Align the top of the navbar with the top of the viewport
        });
    }
}