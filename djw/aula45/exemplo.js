
function preload() {
    // ... (código existente)

    this.load.audio('explosionSound', 'assets/explosion.mp3');
    this.load.audio('backgroundMusic', 'assets/tema.mp3');
    this.load.audio('coinSound', 'assets/coin.mp3');
}



function create() {
    // ... (código existente)

    backgroundMusic = this.sound.add('backgroundMusic', { loop: true });
    backgroundMusic.play();
}


function collectCoin(player, coin) {
    // ... (código existente)

    coinSound.play();
}



function hitBomb(player, bomb) {
    // ... (código existente)

    explosionSound = this.sound.add('explosionSound');
    explosionSound.play();

    // ... (código existente)
}
