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
// Hide icons after 6 seconds
setTimeout(() => {
    document.getElementById("floating-icons").classList.add("hidden");
    document.getElementById("show-icons-btn").style.display = "block";
}, 6000);

// Function to show icons when button is clicked
function showIcons() {
    document.getElementById("floating-icons").classList.remove("hidden");
    document.getElementById("show-icons-btn").style.display = "none";

    // Hide again after 6 seconds
    setTimeout(() => {
        document.getElementById("floating-icons").classList.add("hidden");
        document.getElementById("show-icons-btn").style.display = "block";
    }, 6000);
}
