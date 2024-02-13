// Evento do Usuário: clique para mudar a cor
document.getElementById('quadradoUsuario').
addEventListener('click', function() {
    this.style.backgroundColor = 'red';
});

// Evento de Navegação: mudança de cor ao carregar a página
window.addEventListener('load', function() {
    document.getElementById('quadradoNavegacao').
    style.backgroundColor = 'green';
});

// Evento de Tempo: mudança de cor após 2 segundos
setTimeout(function() {
    document.getElementById('quadradoTempo').
    style.backgroundColor = 'yellow';
}, 2000);