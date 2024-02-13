// game.js

// Configuração básica do jogo
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 0 },
        debug: false,
      },
    },
    scene: {
      preload: preload,
      create: create,
      update: update,
    },
  };
  
  const game = new Phaser.Game(config);
  
  let hero;
  
  function preload() {
    this.load.spritesheet('hero', 'hero.png', { frameWidth: 64, frameHeight: 64 });
  }
  
  function create() {
    // Adiciona o herói ao jogo
    hero = this.physics.add.sprite(400, 300, 'hero');
  
    // Adiciona animação ao herói (exemplo de movimento para cima e para baixo)
    this.anims.create({
        key: 'moveHero',
        frames: this.anims.generateFrameNumbers('hero', { start: 0, end: 15 }),
        frameRate: 8,
        repeat: -1,
      });
    // Inicia a animação
    hero.anims.play('moveHero', true);
  }
  
  function update() {
    // Lógica de atualização do jogo (se necessário)
  }
  