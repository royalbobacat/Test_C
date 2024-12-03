const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;
let direction = 1; // 1 for forward, -1 for backward

// Function to show a slide
const showSlide = (index) => {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    slide.style.transform = `translateX(${100 * (i - index)}%)`;
  });
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
};

// Initialize slides
showSlide(currentSlide);

// Add spacebar interaction
document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    // Calculate the next slide based on direction
    currentSlide += direction;

    // Reverse direction if at the ends
    if (currentSlide >= slides.length || currentSlide < 0) {
      direction *= -1; // Change direction
      currentSlide += direction * 2; // Adjust slide index
    }

    // Show the calculated slide
    showSlide(currentSlide);
  }
});

// Add navigation functionality for dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    direction = 1; // Reset to forward direction
    showSlide(currentSlide);
  });
});

// Auto-slide functionality (optional)
setInterval(() => {
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  showSlide(currentSlide);
}, 5000);
