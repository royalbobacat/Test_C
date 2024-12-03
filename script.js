const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;

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

// Add navigation functionality
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

// Auto-slide functionality (optional)
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);
