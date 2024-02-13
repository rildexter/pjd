var canvas;
        var ctx;
        var dx = 50; // Taxa de variação (velocidade) horizontal do objeto
        var x = 30; // Posição horizontal do objeto (valor inicial)
        var y = 0; // Posição vertical do objeto (valor inicial)
        var WIDTH = 800; // Largura da área retangular
        var HEIGHT = 370; // Altura da área retangular
        var posicao = 0; // Indicador da posição atual do personagem
        var NUM_POSICOES = 7; // Quantidade de imagens que compõem o movimento
        var spriteImages = []; // Array para armazenar as imagens do sprite

        function KeyDown(evt) {
            switch (evt.keyCode) {
                case 39: /* Seta para a direita */
                    if (x + dx < WIDTH) {
                        x += dx;
                        posicao++;
                        if (posicao === NUM_POSICOES) {
                            posicao = 0;
                        }
                    }
                    break;
            }
        }

        function CarregarImagens() {
            // Carregar as imagens do sprite (nome dos arquivos de imagem deve ser 0.png, 1.png, 2.png, etc.)
            for (var i = 0; i < NUM_POSICOES; i++) {
                var image = new Image();
                image.src = "img/" + i + ".png"; // Caminho para a pasta "img"
                spriteImages.push(image);
            }
        }

        function Desenhar() {
            // Desenha a imagem correspondente à posição do sprite no canvas
            ctx.drawImage(spriteImages[posicao], x, y);
        }

        function LimparTela() {
            // Limpa a tela antes de desenhar o próximo quadro
            ctx.fillStyle = "rgb(233,233,233)";
            ctx.beginPath();
            ctx.rect(0, 0, WIDTH, HEIGHT);
            ctx.closePath();
            ctx.fill();
        }

        function Atualizar() {
            // Atualiza a tela: Limpa e desenha o sprite na nova posição
            LimparTela();
            Desenhar();
        }

        function Iniciar() {
            // Inicializa o canvas e carrega as imagens do sprite
            canvas = document.getElementById("canvas");
            ctx = canvas.getContext("2d");
            CarregarImagens(); // Carrega as imagens do sprite
            return setInterval(Atualizar, 100); // Atualiza a cada 100ms
        }

        window.addEventListener('keydown', KeyDown); // Escuta os eventos de teclado
        Iniciar(); // Inicia o jogo ao carregar a página
