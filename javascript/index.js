const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const scores = document.querySelectorAll('.score');
const board = document.querySelector('.game-board');
const blocks = document.querySelectorAll('.block');
let turn = true;
const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const init = () => {
  startButton.addEventListener('click', resetBoard);
  resetButton.addEventListener('click', resetGame);
  board.addEventListener('click', handleBoard);
};

const resetGame = () => {
  resetBoard();
  resetScore();
};

const resetBoard = () => {
  blocks.forEach(block => {
    block.textContent = '';
    block.classList.add('empty');
  });
  board.classList.remove('end');
  board.classList.remove('draw');
};

const resetScore = () => scores.forEach(score => score.textContent = 0);

const endGame = () => board.classList.add('end');

const drawGame = () => board.classList.add('draw');

const handleBoard = ({ target }) => {
  if (!(target.classList.contains('empty'))) {
    return;
  }
  target.textContent = turn ? 'X' : 'O';
  target.classList.toggle('empty');
  checkGame();
};

const checkGame = () => {
  let empty = 0;
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (blocks[a].textContent && blocks[a].textContent === blocks[b].textContent && blocks[a].textContent === blocks[c].textContent) {
      handleScore();
      endGame();
      break;
    }
  }
  for (let i = 0; i < blocks.length; i++) {
    if(blocks[i].classList.contains('empty')) {
      empty++;
    }
  }
  if(!empty) {
    drawGame();
  }
  nextTurn();
};

const nextTurn = () => {
  scores[+turn].classList.toggle('turn');
  turn = !turn;
  scores[+turn].classList.toggle('turn');
}

const handleScore = () => scores[+turn].textContent = Number(scores[+turn].textContent) + 1;

init();