const dino = document.querySelector('.dino');
const obstacle = document.querySelector('.obstacle');
const scoreDisplay = document.querySelector('.score');

let score = 0;
let isGameOver = false;

// Dino jump functionality
document.addEventListener('keydown', (event) => {
  if ((event.code === 'Space' || event.code === 'ArrowUp') && !isGameOver) {
    if (!dino.classList.contains('jump')) {
      dino.classList.add('jump');
      setTimeout(() => {
        dino.classList.remove('jump');
      }, 500); // Match the jump animation duration
    }
  }
});

// Update score
const updateScore = () => {
  if (!isGameOver) {
    score += 1;
    scoreDisplay.textContent = `Score: ${score}`;
    setTimeout(updateScore, 100);
  }
};

// Collision detection
const checkCollision = setInterval(() => {
  const dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue('bottom'));
  const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));

  if (obstacleLeft > 0 && obstacleLeft < 60 && dinoBottom < 40) {
    // Collision detected
    isGameOver = true;
    alert(`Game Over! Your score is ${score}`);
    obstacle.style.animation = 'none'; // Stop the obstacle
    obstacle.style.display = 'none';  // Hide the obstacle
  }
}, 10);

// Restart game
document.addEventListener('keydown', (event) => {
  if (event.code === 'Enter' && isGameOver) {
    location.reload(); // Reload the page to restart the game
  }
});

// Start the game
updateScore();
