const gameContainer = document.getElementById('game-container');
        let isJumping = false;
        //inicio do jogo adicionado
        let gameStarted = false;
        let player = document.getElementById('player');
        //background adicionado
        let background = document.getElementById('background');
        

        //agora temos um obstaculo sendo iniciado
        document.addEventListener('keydown', (event) => {
            if (event.code === 'Space' && !gameStarted) {
                gameStarted = true;
                background.style.animationPlayState = 'running';
                createObstacle();
            } else if (event.code === 'Space' && !isJumping && gameStarted) {
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
                    checkCollision();
                } else {
                    position -= 5;
                    player.style.bottom = 50 + position + 'px';
                }
            }, 20);
        }
       // gerando obstaculo
       function createObstacle() {
            const obstacle = document.createElement('div');
            obstacle.classList.add('obstacle');
            obstacle.style.left = '400px';
            obstacle.style.backgroundColor = "red";
            gameContainer.appendChild(obstacle);
        
            const moveObstacleInterval = setInterval(() => {
                const obstacleLeft = parseInt(obstacle.style.left);
                if (obstacleLeft <= 0) {
                    clearInterval(moveObstacleInterval);
                    gameContainer.removeChild(obstacle);
                    createObstacle();

                } else {
                    obstacle.style.left = obstacleLeft - 5 + 'px';

                }
            }, 20);
        }
     