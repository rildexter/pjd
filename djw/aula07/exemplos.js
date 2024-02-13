//Funções em JavaScript
function calcularPontuacao(vitorias, derrotas) {
    return vitorias * 3 - derrotas * 2;
  }
  
  const pontuacaoFinal = calcularPontuacao(5, 2);
  console.log(`A pontuação final do jogador é: ${pontuacaoFinal}`);

  
  //Funções Anônimas e Closures
  const criarContador = () => {
    let contagem = 0;
  
    return {
      incrementar: () => {
        contagem++;
        console.log(`Contagem atual: ${contagem}`);
      },
    };
  };
  
  const contador = criarContador();
  contador.incrementar();
  contador.incrementar();

  
  //Callbacks e Promises
  function carregarRecursos(callback) {
    setTimeout(() => {
      console.log('Recursos carregados com sucesso!');
      callback();
    }, 2000);
  }
  
  carregarRecursos(() => {
    console.log('Continuando a inicialização do jogo...');
  });

  
  //Arrays Multidimensionais
  const mapaJogo = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 1, 1],
  ];
  
  console.log(mapaJogo[1][2]); // Acessando elemento do mapa

//Objetos e Prototipagem
function Personagem(nome, vida) {
    this.nome = nome;
    this.vida = vida;
  }
  Personagem.prototype.atacar = function () {
    console.log(`${this.nome} atacou!`);
  };
  const jogador1 = new Personagem('Herói', 100);
  jogador1.atacar();

  
  //JSON e Armazenamento de Dados
  const progressoJogador = {
    nivel: 5,
    itensColetados: ['espada', 'escudo', 'poção'],
  };// Salvando progresso
  const dadosSalvos = JSON.stringify(progressoJogador);
  // Carregando progresso
  const progressoCarregado = JSON.parse(dadosSalvos);
  console.log(progressoCarregado.nivel); // Saída: 5
  

  //Algoritmos Avançados em Jogos
  // Implementação simplificada do algoritmo A*
function encontrarCaminho(inicio, destino) {
    // Lógica do algoritmo A* aqui
    console.log(`Caminho encontrado de ${inicio} para ${destino}`);
  }
  encontrarCaminho('A', 'D');

  //Design Patterns em Jogos
  class EventoJogo {
    constructor() {
      this.observadores = [];
    }
    adicionarObservador(observador) {
      this.observadores.push(observador);
    }
    notificarEvento(evento) {
      this.observadores.forEach((observador) => observador.lidarComEvento(evento));
    }
  }
  const eventoJogo = new EventoJogo();
  // aqui implenta o Observador
  const observadorExemplo = {
    lidarComEvento: (evento) => console.log(`Evento detectado: ${evento}`),
  };
  eventoJogo.adicionarObservador(observadorExemplo);
  eventoJogo.notificarEvento('ColisaoDetectada');
  
  