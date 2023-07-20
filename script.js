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

  carouselTrack.style.transform = `translateX(${position}px)`;

  // Check if the first image is no longer visible on the left
  if (position <= -(carouselWidth * carouselImages.length)) {
    // Move the first image to the end of the track to create the infinite loop effect
    carouselTrack.appendChild(carouselImages[0].cloneNode(true));
    carouselTrack.removeChild(carouselImages[0]);
    position += carouselWidth; // Adjust the position immediately
    carouselTrack.style.transition = "none"; // Disable the transition for immediate position update
    carouselTrack.style.transform = `translateX(${position}px)`; // Move the carousel track to the adjusted position
    setTimeout(() => {
      carouselTrack.style.transition = "transform 0.1s"; // Re-enable the transition after immediate update
    }, 0);
  }

  // Call this function again after a short delay (e.g., 10ms)
  requestAnimationFrame(moveCarousel);
}

// Call the moveCarousel function to start the animation
moveCarousel();


