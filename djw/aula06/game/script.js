       // Variáveis do jogo
       let playerHealth = 100;
       let enemyHealth = 100;

       // Atualizar a posição dos quadrados com base na saúde
       function updateSquarePositions() {
document.getElementById('hero').style.backgroundColor = `rgba(52, 152, 219, ${playerHealth / 100})`;
document.getElementById('enemy').style.backgroundColor = `rgba(231, 76, 60, ${enemyHealth / 100})`;
       }

       // Função para atualizar a saída do jogo
       function updateOutput(message) {
           document.getElementById('output').textContent = message;
       }
       function updateOutput2(message) {
           document.getElementById('output2').textContent = message;
       }

       // Função para tomar decisões com base nas escolhas do jogador
       function makeChoice(choice) {
           let playerDamage = Math.floor(Math.random() * 10) + 1;
           let enemyDamage = Math.floor(Math.random() * 10) + 1;

           switch (choice) {
               case 'attack':
                   enemyHealth -= playerDamage;
                   playerHealth -= enemyDamage;
    updateOutput2(`Você atacou e causou ${playerDamage} de dano. 
    O inimigo retaliou com ${enemyDamage} de dano.`);
                   break;
               case 'defend':
                   playerHealth -= enemyDamage / 2;
                   updateOutput2(`Você se defendeu, mas ainda sofreu ${enemyDamage / 2} de dano.`);
                   break;
               case 'run':
                   updateOutput2('Você tentou fugir, mas o inimigo te alcançou.');
                   break;
               default:
                   updateOutput2('Escolha inválida. Tente novamente.');
           }

           // Verificar o estado da batalha
           if (playerHealth <= 0) {
               updateOutput('Você foi derrotado. Game Over!');
               disableButtons();
           } else if (enemyHealth <= 0) {
               updateOutput('Você derrotou o inimigo! Parabéns!');
               disableButtons();
           } else {
               updateOutput(`Seu HP: ${playerHealth} | HP Inimigo: ${enemyHealth}`);
               updateSquarePositions();
           }
       }

       // Função para desativar os botões após o fim da batalha
       function disableButtons() {
           document.querySelectorAll('button').forEach(button => {
               button.disabled = true;
           });
       }