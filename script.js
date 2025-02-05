document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    // You can add more functionality here, like sending the form data to a server.
});
// Slideshow functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.slideshow-prev');
const nextButton = document.querySelector('.slideshow-next');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Event listeners for navigation buttons
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Show the first slide initially
showSlide(currentSlide);

// Zoom functionality (existing code)
const zoomImages = document.querySelectorAll('.zoom-image');
const zoomedImageContainer = document.getElementById('zoomed-image-container');
const zoomedImage = document.getElementById('zoomed-image');

zoomImages.forEach((image) => {
    image.addEventListener('mouseenter', () => {
        zoomedImage.src = image.src;
        zoomedImageContainer.style.display = 'flex';
    });

    image.addEventListener('mouseleave', () => {
        zoomedImageContainer.style.display = 'none';
    });
});
