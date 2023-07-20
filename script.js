// script.js

// Get the carousel container and the carousel track
const carouselContainer = document.querySelector(".carousel-container");
const carouselTrack = document.querySelector(".carousel-track");

// Get the individual images in the carousel
const carouselImages = carouselTrack.querySelectorAll("img");

// Calculate the total width of the carousel track
const carouselWidth = carouselContainer.clientWidth;

// Set the initial position of the carousel track
let position = 0;

// Function to move the carousel track
function moveCarousel() {
  // Move the carousel track to the left
  position -= 1;
  carouselTrack.style.transition = "transform 0.3s ease-in-out";
  carouselTrack.style.transform = `translateX(${position}px)`;

  // Check if the first image is no longer visible on the left
  if (position <= -carouselWidth) {
    // Calculate the total width of all images combined
    const totalWidth = carouselImages.length * carouselWidth;
    // Reset the position back to the beginning
    position = position % carouselWidth;
    carouselTrack.style.transition = "none"; // Disable transition when resetting
    carouselTrack.style.transform = `translateX(${position}px)`;
  }

  // Call this function again after a short delay (e.g., 10ms)
  requestAnimationFrame(moveCarousel);
}

// Call the moveCarousel function to start the animation
moveCarousel();
