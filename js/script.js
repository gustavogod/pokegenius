let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul
const colorArr = ['green', 'red', 'yellow', 'blue'];

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');


//cria ordem aletoria de cores
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for(let i in order) {
      let elementColor = returnColorElement(order[i]);
      lightColor(elementColor, Number(i) + 1);
  }
}

//acende a proxima cor
let lightColor = (element, number) => {
  number = number * 1500;
  setTimeout(() => {
      element.classList.add('selected');
  }, number - 250);
  setTimeout(() => {
      element.classList.remove('selected');
  }, number + 500);
}

//checa se os botões clicados são iguais os da ordem gerada no jogo
let checkOrder = () => {
  for(let i in clickedOrder) {
    if(clickedOrder[i] != order[i]){
      gameOver();
      return;
    }
  }

  if(clickedOrder.length == order.length){
    alert(`Você acertou!\n\nPontuação: ${score}\n\nIniciando próximo nível!`);
    nextLevel();
  }
}

//reage ao clique do usuário
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  returnColorElement(color).classList.add('selected');

  setTimeout(() => {
    returnColorElement(color).classList.remove('selected');
    checkOrder();
  }, 1000);
}

//retorna a cor
let returnColorElement = (color) => {
  if(color == 0) {
    return green;
  }
  else if(color == 1) {
    return red;
  }
  else if(color == 2) {
    return yellow;
  }
  else if(color == 3) {
    return blue;
  }
}

//vai para o próximo nível do jogo
let nextLevel = () => {
  score++;
  shuffleOrder();
}

//função para game over
let gameOver = () => {

  blue.classList.add('game-over');
  red.classList.add('game-over');
  green.classList.add('game-over');
  yellow.classList.add('game-over');
  
  setTimeout(() => {
    blue.classList.remove('game-over');
    red.classList.remove('game-over');
    green.classList.remove('game-over');
    yellow.classList.remove('game-over');
    alert(`Pontuação: ${score-1}!\n\nVocê perdeu o jogo!\n\nClique em OK para iniciar um novo jogo`);
    startGame();
  }, 2000);
  
}

let startGame = () => {
  order = [];
  clickedOrder = [];
  score = 0;
  alert('Bem vindo ao Genius! Iniciando novo jogo!');

  nextLevel();
}

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//inicia o jogo
startGame();