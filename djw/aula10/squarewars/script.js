const gameContainer = document.getElementById('game-container');
let isJumping = false;
let player = document.getElementById('player');

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && !isJumping) {
        jump();
    }
});
function jump() {
    isJumping = true;
    let position = 0;

    const jumpInterval = setInterval(() => {
        if (position >= 100) {
            clearInterval(jumpInterval);
            fall();
        } else {
            position += 5;
            player.style.bottom = 50 + position + 'px';
        }
    }, 20);
}
function fall() {
    let position = 100;

    const fallInterval = setInterval(() => {
        if (position === 0) {
            clearInterval(fallInterval);
            isJumping = false;
            player.style.bottom = '50px';
        } else {
            position -= 5;
            player.style.bottom = 50 + position + 'px';
        }
    }, 20);
}