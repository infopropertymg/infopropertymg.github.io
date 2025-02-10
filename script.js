document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    // You can add more functionality here, like sending the form data to a server.
});
// Function to open the full-screen image viewer
function openFullScreen(imageSrc) {
    const fullscreenViewer = document.getElementById('fullscreen-viewer');
    const fullscreenImage = document.getElementById('fullscreen-image');

    // Set the image source
    fullscreenImage.src = imageSrc;

    // Display the full-screen viewer
    fullscreenViewer.style.display = 'block';
}

// Function to close the full-screen image viewer
function closeFullScreen() {
    const fullscreenViewer = document.getElementById('fullscreen-viewer');
    fullscreenViewer.style.display = 'none';
}
document.getElementById("toggle-map-btn").addEventListener("click", function () {
    var mapContainer = document.getElementById("map-container");
    var button = document.getElementById("toggle-map-btn");

    if (mapContainer.classList.contains("hidden")) {
        mapContainer.classList.remove("hidden");
        button.textContent = "Hide Map";
    } else {
        mapContainer.classList.add("hidden");
        button.textContent = "Show Map";
    }
});
