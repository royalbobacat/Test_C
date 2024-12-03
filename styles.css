/* General styles */
body {
  margin: 0;
  overflow: hidden;
  background-color: #f7f7f7;
  font-family: sans-serif;
}

/* Game container */
.game-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(to bottom, #ffffff, #d3d3d3);
}

/* Dino character */
.dino {
  position: absolute;
  bottom: 20px;
  left: 50px;
  width: 50px;
  height: 50px;
  background-color: #333;
  border-radius: 5px;
  animation: run-animation 0.5s steps(4) infinite;
}

/* Dino running animation */
@keyframes run-animation {
  0% { background-position: 0; }
  100% { background-position: -200px; }
}

/* Dino jump animation */
.dino.jump {
  animation: jump 0.5s ease-out;
}

@keyframes jump {
  0% { bottom: 20px; }
  50% { bottom: 150px; }
  100% { bottom: 20px; }
}

/* Obstacle */
.obstacle {
  position: absolute;
  bottom: 20px;
  right: -50px;
  width: 20px;
  height: 40px;
  background-color: #555;
  animation: obstacle-move 2s linear infinite;
}

/* Obstacle movement */
@keyframes obstacle-move {
  0% { transform: translateX(100vw); }
  100% { transform: translateX(-120vw); }
}

/* Score display */
.score {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
}
