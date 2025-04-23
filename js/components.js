document.addEventListener('DOMContentLoaded', function() {
    // Load navigation component
    loadComponent('nav-component', 'components/nav.html');
    
    // Load background component
    loadComponent('background-component', 'components/background.html');
});

// Function to load HTML components
function loadComponent(elementId, url) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${url}: ${response.status} ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            element.innerHTML = html;
        })
        .catch(error => {
            console.error(`Error loading component: ${error}`);
            element.innerHTML = `<div class="alert alert-danger">Failed to load component</div>`;
        });
}