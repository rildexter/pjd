const gameContainer = document.getElementById('game-container');
        let isJumping = false;
        let gameStarted = false;
        let player = document.getElementById('player');
        let background = document.getElementById('background');
        /*criando as variaveis para os scores*/
        let score = 0;
        let highScore = 0;
        
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
        
       function createObstacle() {
            const obstacle = document.createElement('div');
            obstacle.classList.add('obstacle');
            obstacle.style.left = '400px';
            /*randomizar as cores*/
            obstacle.style.backgroundColor = getRandomColor();
            gameContainer.appendChild(obstacle);
        
            const moveObstacleInterval = setInterval(() => {
                const obstacleLeft = parseInt(obstacle.style.left);
                if (obstacleLeft <= 0) {
                    clearInterval(moveObstacleInterval);
                    gameContainer.removeChild(obstacle);
                    createObstacle();
                    /*função score*/
                    increaseScore();
                } else {
                    obstacle.style.left = obstacleLeft - 5 + 'px';
                    /*função colisão*/
                    checkCollision();
                }
            }, 20);
        }
       /*adicionar função score*/  
        function increaseScore() {
            score++;
            document.getElementById('score').innerText = 'Score: ' + score;
        
            if (score > highScore) {
                highScore = score;
                document.getElementById('high-score').innerText = 'High Score: ' + highScore;
            }
        }
        /*adicionar função colisão*/  
        function checkCollision() {
            const obstacles = document.querySelectorAll('.obstacle');
            obstacles.forEach((obstacle) => {
                const playerRect = player.getBoundingClientRect();
                const obstacleRect = obstacle.getBoundingClientRect();
        
                if (
                    playerRect.bottom >= obstacleRect.top &&
                    playerRect.top <= obstacleRect.bottom &&
                    playerRect.right >= obstacleRect.left &&
                    playerRect.left <= obstacleRect.right
                ) {
                    endGame();
                }
            });
        }
       /*adicionar função fim de jogo e reiniciar jogo*/   
        function endGame() {
            alert('Game Over! Your score: ' + score);
            restartGame();
        }
        
        function restartGame() {
            gameContainer.innerHTML = '<div id="background"></div><div id="player"></div>';
            isJumping = false;
            score = 0;
            gameStarted = false;
            player = document.getElementById('player');
            background = document.getElementById('background');
            document.getElementById('score').innerText = 'Score: 0';
        }
        /*adicionar função randomizar cores do inimigo*/  
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }