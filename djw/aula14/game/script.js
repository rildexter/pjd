function escolherPersonagem(personagem) {
    // Atualiza o diálogo com base na escolha do personagem
    document.getElementById('dialogo').innerText =
        `Você escolheu o ${personagem}. Prepare-se para a aventura como ${personagem}!`;

    // Exibe a imagem correspondente ao personagem
    const imagemPath = `img/${personagem.toLowerCase()}.jpg`;
    document.getElementById('personagemImagem').src = imagemPath;
    document.getElementById('personagemImagem').style.display = 'block';

    // Exibe o botão "Continue"
    document.getElementById('continueButton').style.display = 'block';
}

function continuarJogo() {
    // Aqui você pode adicionar lógica para continuar o jogo após a escolha do personagem
    alert('Jogo continuado!');
}


