// Get the carousel container and the carousel track
const carouselContainer = document.querySelector(".carousel-container");
const carouselTrack = document.querySelector(".carousel-track");
const carouselSlides = document.querySelectorAll(".carousel-slide");
const swingBarThumb = document.querySelector(".swing-bar-thumb");
const autoScrollSwitch = document.getElementById("auto-scroll-toggle");

// Variables for carousel navigation
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let currentSlide = 0;
let slideWidth = carouselSlides[0].clientWidth;
let autoScrollInterval;

// Function to set the carousel track position based on the current slide
function setPositionByIndex() {
  currentTranslate = currentSlide * -slideWidth;
  carouselTrack.style.transform = `translateX(${currentTranslate}px)`;
}

// Function to handle touch and drag events for the swing bar
function handleDragStart(e) {
  isDragging = true;
  startPosition = e.clientX - swingBarThumb.offsetLeft;
  prevTranslate = currentTranslate;
}

function handleDragEnd() {
  isDragging = false;
  const movedSlide = -Math.round(currentTranslate / slideWidth);
  currentSlide = Math.min(Math.max(movedSlide, 0), carouselSlides.length - 1);
  setPositionByIndex();
}

function handleDrag(e) {
  if (isDragging) {
    const x = e.clientX - swingBarThumb.offsetLeft;
    const moveBy = x - startPosition;
    currentTranslate = prevTranslate + moveBy;
    carouselTrack.style.transform = `translateX(${currentTranslate}px)`;
  }
}

// Add event listeners for swing bar drag
swingBarThumb.addEventListener("mousedown", handleDragStart);
document.addEventListener("mouseup", handleDragEnd);
document.addEventListener("mousemove", handleDrag);

swingBarThumb.addEventListener("touchstart", handleDragStart);
document.addEventListener("touchend", handleDragEnd);
document.addEventListener("touchmove", handleDrag);

// Function to update slideWidth and carousel positioning on window resize
function updateCarousel() {
  slideWidth = carouselSlides[0].clientWidth;
  setPositionByIndex();
}

window.addEventListener("resize", updateCarousel);

// Function to start or stop the auto-scrolling based on the switch state
function toggleAutoScroll() {
  if (autoScrollSwitch.checked) {
    // Start auto-scrolling
    autoScrollInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % carouselSlides.length;
      setPositionByIndex();
    }, 3000); // Change the duration as per your requirement (e.g., 3000ms = 3 seconds)
  } else {
    // Stop auto-scrolling
    clearInterval(autoScrollInterval);
  }
}

// Add event listener for auto-scroll switch change
autoScrollSwitch.addEventListener("change", toggleAutoScroll);

// Initial setup: Set the carousel position and start auto-scrolling
setPositionByIndex();
toggleAutoScroll();
