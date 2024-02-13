const quadrado = document.getElementById('quadrado');
const direcaoTexto = document.getElementById('direcaoTexto');

function moverQuadrado(direcao) {
  const posicaoAtual = parseFloat(getComputedStyle(quadrado).left) || 0;
  const novaPosicao = direcao === 'esquerda' ? posicaoAtual - 50 : posicaoAtual + 50;
  quadrado.style.left = `${novaPosicao}px`;
}

function exibirDirecao(direcao) {
  direcaoTexto.textContent = `O quadrado está se movendo para ${direcao}`;
}

document.getElementById('setaEsquerda').addEventListener('click', () => {
  moverQuadrado('esquerda');
  exibirDirecao('esquerda');
});

document.getElementById('setaDireita').addEventListener('click', () => {
  moverQuadrado('direita');
  exibirDirecao('direita');
});
