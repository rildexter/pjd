// script.js
let position = 0;

function moveLeft() {
  position -= 10;
  updatePosition();
}

function moveRight() {
  position += 10;
  updatePosition();
}

function updatePosition() {
  const gameElement = document.getElementById('game-element');
  gameElement.style.transform = `translateX(${position}px)`;
}
