       /* Adicionando funcionalidade para controlar o movimento usando as setas do teclado */
       document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft') { 
            // Se a tecla pressionada for a seta para esquerda
            moveLeft(); // Chama a função para mover para a esquerda
        } else if (event.key === 'ArrowRight') { // Se a tecla pressionada for a seta para direita
            moveRight(); // Chama a função para mover para a direita
        }
    });

    document.addEventListener('keyup', function (event) {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { // Se a tecla pressionada for uma das setas de movimento
            left = false; // Define a flag de movimento para esquerda como falsa
            right = false; // Define a flag de movimento para direita como falsa
        }
    });
       
       //Altura e largura do Canvas
        var canvasWidth = 650;
        var canvasHeight = 250;

        //A altura e largura do Spritesheet
        var spriteWidth = 864;
        var spriteHeight = 280;

        //Temos 2 linhas por 8 colunas no sprite sheet
        var rows = 2;
        var cols = 8;

        //A linha 0 (primeira) é para o movimento da direita
        var trackRight = 0;

        //A linha 1 (segunda) é para o movimento da esquerda
        var trackLeft = 1;

        //Para obter a coluna de um sprite único dividiremos a coluna do sprite pelo número de colunas
        var width = spriteWidth / cols;

        //O mesmo para a altura dividiremos a altura pelo número de linhas 
        var height = spriteHeight / rows;

        //Cada linha contém 8 frames e começará a mostrar o primeiro frame 
        var curFrame = 0;

        //O total de frames é 8 
        var frameCount = 8;

        //x and y coordenadas para renderizar o sprite 
        var x = 0;
        var y = 110;

        //x and y coordenadas do canvas para obter um único frame 
        var srcX;
        var srcY;

        //ajustando o movimento esquerdo 
        var left = false;
        //Assumindo que movimento iniciará para o lado direito 
        var right = true;

        //Velocidade do movimento 
        var speed = 8;

        //Getting the canvas 
        var canvas = document.getElementById('canvas');

        //Configurando largura e altura do canvas 
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        //Estabelecendo conexão com canvas 
        var ctx = canvas.getContext("2d");

        //Criando um objeto da imagem de seu personagem 
        var character = new Image();

        //Informando o nome do arquivo sprite 
        character.src = "./img/pilgrim.png";

        function updateFrame() {
            //Atualizando o frame index  
            curFrame = ++curFrame % frameCount;
            //Calculando a coordenada x do spritesheet  
            srcX = curFrame * width;
            //Limpando o frame desenhado  
            ctx.clearRect(x, y, width, height);
            //Se esquerda for verdadeira o caractere não tiver atingido a borda esquerda  
            if (left && x > 0) {
                //calculate srcY  
                srcY = trackLeft * height;
                //decreasing the x coordinate 
                x -= speed;
            }
            // Se direita for verdadeira o caractere não tiver atingido a borda direita 
            if (right && x < canvasWidth - width) {
                //calculating y coordinate for spritesheet 
                srcY = trackRight * height;
                //increasing the x coordinate  
                x += speed;
            }
        }

        function draw() {
            //Updating the frame  
            updateFrame();

            // Define o novo tamanho do sprite
            var newWidth = width * 0.5; 
            // Substitua 0.5 pelo fator de escala desejado (50% no exemplo)
            var newHeight = height * 0.5;

            //Drawing the image  
            ctx.drawImage(character, srcX, srcY, width, height, x, y, newWidth, newHeight);
        }

        function moveLeft() {
            left = true;
            right = false;
        }

        function moveRight() {
            left = false;
            right = true;
        }

        setInterval(draw, 100);
  