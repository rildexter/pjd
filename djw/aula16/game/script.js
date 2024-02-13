     // vamos melhorar a disposição dos personagens criando um Array
     const personagens = [
        { nome: 'Guerreiro', habilidade: 'Força Bruta' },
        { nome: 'Mago', habilidade: 'Magias Poderosas' },
        { nome: 'Arqueiro', habilidade: 'Precisão com Arco e Flecha' }
    ];

    // Função para escolher o personagem atualizada
    //agora adicionamos uma estrutura de decisão para melhorar a logica
    function escolherPersonagem(escolha) {
        const personagemEscolhido = personagens.find(personagem => personagem.nome === escolha);

        if (personagemEscolhido) {
            const dialogo = document.getElementById('dialogo');
            dialogo.innerText = `Você escolheu o ${personagemEscolhido.nome}. Prepare-se para usar sua habilidade: ${personagemEscolhido.habilidade}!`;

            // Exibe a imagem correspondente ao personagem escolhido
            const imagemPath = `img/${personagemEscolhido.nome.toLowerCase()}.jpg`;
            const personagemImagem = document.getElementById('personagemImagem');
            personagemImagem.src = imagemPath;
            personagemImagem.style.display = 'block';

            // Exibe o botão "Continue" e configura o redirecionamento
            //agora o botão deve ser gerado para a devida pagina do personagem escolhido
            const continueButton = document.getElementById('continueButton');
            continueButton.style.display = 'block';

            if (personagemEscolhido.nome !== '') {
                continueButton.setAttribute('onclick', `continuarJogo('${personagemEscolhido.nome.toLowerCase()}')`);
            } else {
                //gerar tratamento de erro
                ;
            }

            // Adiciona a escolha do personagem à sessão de armazenamento local
            localStorage.setItem('personagemEscolhido', personagemEscolhido.nome);
        } else {
            const dialogo = document.getElementById('dialogo');
            dialogo.innerText = "NPC: Opção inválida. Por favor, escolha um personagem válido.";
        }

        // Desabilita os botões após a escolha
        document.querySelectorAll('button').forEach(button => button.disabled = true);
    }

    // Função para continuar o jogo
    function continuarJogo(personagem) {
        const escolha = localStorage.getItem('personagemEscolhido');
        window.location.href = `escolher_arma_${escolha}.html`;
    }
    function fim() {
        // Aqui você pode adicionar lógica para continuar o jogo após a escolha do personagem
        alert('O Jogo irá continuar!');
    }

    // Obtém o personagem escolhido da sessão de armazenamento local
    const personagemEscolhido = localStorage.getItem('personagemEscolhido');

      //armas dos personagens
      function escolherArma(tipoArma) {
        const dialogoElement = document.getElementById('dialogo');
        dialogoElement.innerText = `Você escolheu a arma: ${tipoArma}. Prepare-se para a batalha!`;
    
        // Exibe a imagem correspondente à arma escolhida
        const imagemPath = `img/${tipoArma.toLowerCase().replace()}.jpg`;
        const armaImagem = document.getElementById('armaImagem');
        armaImagem.src = imagemPath;
        armaImagem.style.display = 'block';
    
        // Exibe o botão "Continue" apenas após a escolha da arma
        const continueLink = document.getElementById('continueLink');
        continueLink.style.display = 'block';
    }