// 1. We list all our images here in a list (array)
const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg"
];

// 2. We set up our variables
let currentIndex = 0;
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// 3. Function to open the lightbox when an image is clicked
function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex];
    lightbox.classList.add("active"); // This makes the dark background appear
}

// 4. Function to close the lightbox (when X is clicked)
function closeLightbox() {
    lightbox.classList.remove("active");
}

// 5. Function for the Next and Prev arrows
function changeImage(direction) {
    currentIndex += direction;
    
    // If we go past the last image, loop back to the first one
    if (currentIndex >= images.length) {
        currentIndex = 0;
    } 
    // If we go before the first image, loop to the last one
    else if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    
    lightboxImg.src = images[currentIndex];
}

// --- BONUS: Keyboard Support ---
// This lets you use the Left/Right arrow keys on your keyboard to change images, and Esc to close!
document.addEventListener("keydown", function(event) {
    // Only do this if the lightbox is open
    if (lightbox.classList.contains("active")) {
        if (event.key === "ArrowRight") {
            changeImage(1);
        } else if (event.key === "ArrowLeft") {
            changeImage(-1);
        } else if (event.key === "Escape") {
            closeLightbox();
        }
    }
});