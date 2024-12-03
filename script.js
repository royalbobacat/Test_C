const dino = document.querySelector('.dino');

// Add jump functionality
document.addEventListener('keydown', (event) => {
  if (event.code === 'Space' || event.code === 'ArrowUp') {
    if (!dino.classList.contains('jump')) {
      dino.classList.add('jump');
      setTimeout(() => {
        dino.classList.remove('jump');
      }, 500); // Match the jump animation duration
    }
  }
});
