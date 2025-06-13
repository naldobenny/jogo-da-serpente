let cobra = [{x:10, y:10}];
let comida = geraComida();
letcdirecao = 'DIREITA';
let velocidade = 150;
let pontos = 0;
let intervalo;


function iniciar(){
    criarTabuleiro();
    document.addEventListener('keydown', mudaDirecao);
    intervalo = setIntervalo(moveCobra, velocidade);
}
 
function criarTabuleiro(){
    const tabuleiro = document.getElementById('game-board');
    tabuleiro.innerHTML = '';

    cobra.forEach(segmento => {
        const elemento = document.createElement('div');
        elemento.style.gridRowStart = segmento.y;
        elemento.style.gridColumnStart = segmento.x;
        elemento.classList.add('snake');
        tabuleiro.appendChild(elemento);
    });
    function geraComida(){
        let novaComida;
        while (!novaComida || posicaoOcupada(novaComida)){
            novaComida = {
                x:Math.floor(Math.random()*18)+2,
                y:Math.floor(Math.random()*18)+2
            };

        }
    }
}
