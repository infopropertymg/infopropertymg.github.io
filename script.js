document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    // You can add more functionality here, like sending the form data to a server.
});
// Get all images with the class 'zoom-image'
const zoomImages = document.querySelectorAll('.zoom-image');
const zoomedImageContainer = document.getElementById('zoomed-image-container');
const zoomedImage = document.getElementById('zoomed-image');

// Add event listeners to each image
zoomImages.forEach((image) => {
    image.addEventListener('mouseenter', () => {
        zoomedImage.src = image.src; // Set the zoomed image source
        zoomedImageContainer.style.display = 'flex'; // Show the zoomed image container
    });

    image.addEventListener('mouseleave', () => {
        zoomedImageContainer.style.display = 'none'; // Hide the zoomed image container
    });
});
