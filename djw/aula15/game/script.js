function escolherPersonagem(personagem) {
    // Atualiza o diálogo com base na escolha do personagem
    document.getElementById('dialogo').innerText =
        `Você escolheu o ${personagem}. Prepare-se para a aventura como ${personagem}!`;

    // Exibe a imagem correspondente ao personagem
    const imagemPath = `img/${personagem.toLowerCase()}.jpg`;
    document.getElementById('personagemImagem').src = imagemPath;

    // Exibe a imagem e o botão "Continue"
    document.getElementById('personagemImagem').style.display = 'block';
    document.getElementById('continueButton').style.display = 'block';

    // Adiciona a escolha do personagem à sessão de armazenamento local
    localStorage.setItem('personagemEscolhido', personagem);
}

function continuarJogo() {
    // Redireciona para a página de escolha do objeto mágico. Aqui teremos somente a escolha do mago
    window.location.href = 'escolher_arma_mago.html';
}

//-->>>>aqui serão os scripts de escolha de arma<<<<----

function escolherObjeto(objeto) {
    // Atualiza o diálogo com base na escolha do objeto mágico
    document.getElementById('dialogoObjeto').innerText =
        `Você escolheu o ${objeto}. Este objeto mágico será fundamental na sua jornada.`;

    // Exibe a imagem correspondente ao objeto mágico
    const imagemPath = `img/${objeto.toLowerCase()}.jpg`;
    const objetoImagem = document.getElementById('objetoImagem');
    objetoImagem.src = imagemPath;
    objetoImagem.style.display = 'block';

    // Exibe o botão "Continue"
    document.getElementById('continueButton').style.display = 'block';

    // Adiciona a escolha do objeto à sessão de armazenamento local
    localStorage.setItem('objetoEscolhido', objeto);
}

// Obtém o personagem escolhido da sessão de armazenamento local
const personagemEscolhido = localStorage.getItem('personagemEscolhido');

// Atualiza a imagem do mago com base na escolha do personagem
document.getElementById('magoImagem').src = `img/${personagemEscolhido.toLowerCase()}.jpg`;

function continuarJogoM() {
    // Aqui você pode adicionar lógica para continuar o jogo após a escolha do objeto mágico
    alert('Jogo continuado!');

    // Por exemplo, redirecionar para a próxima página
    window.location.href = 'proxima.html';
}
