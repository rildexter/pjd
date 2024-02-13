function hitBomb(player, bomb) {
    decreaseHealth(20);

    // ... (outros códigos)

    if (health <= 0) {
        this.physics.pause();
        player.anims.play('turn');
        gameOver = true;

        // ... (outros códigos)

        // Criação do texto 'Game Over'
        var gameOverText = this.add.text(400, 170, 'Game Over', 
        { fontSize: '64px', fill: '#ff0000' }).setOrigin(0.5);

        // Criação do botão de restart
        var restartButton = this.add.image(400, 250, 'restart').setInteractive();
        restartButton.setScale(0.5);

        // Adição do evento de clique no botão de restart
        restartButton.on('pointerdown', function () {
            gameOver = false;
            health = 100;
            score = 0;
            heartsCollected = 0;
            updateHealthBar();
            scoreText.setText('Score: 0');
            gameOverText.destroy();
            restartButton.destroy();
            this.scene.restart();
        }, this);
    } else {
        // ... (outros códigos)
    }
}
