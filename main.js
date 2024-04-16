atual = "O"

function verificarGanhador() {
    const squares = document.querySelectorAll('.square');

    const combinacoesVencedoras = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let combinacao of combinacoesVencedoras) {
        const [a, b, c] = combinacao;
        if (squares[a].innerHTML && 
            squares[a].innerHTML === squares[b].innerHTML &&
            squares[a].innerHTML === squares[c].innerHTML) {
            return squares[a].innerHTML; 
        }
    }

    return null;
}

function verificarEmpate() {
    const squares = document.querySelectorAll('.square');

    for (let square of squares) {
        if (!square.innerHTML) {
            return false;
        }
    }

    return true;
}

function set(element) {
    if (!element.innerHTML) {
        element.innerHTML = atual;

        const ganhador = verificarGanhador();
        if (ganhador) {
            window.alert(`O jogador ${ganhador} venceu!`);
        } else if (verificarEmpate()) {
            window.alert("O jogo terminou em empate!");
        } else {
            // Alternar o símbolo para o próximo jogador
            atual = atual === 'X' ? 'O' : 'X';
        }
    }
}
