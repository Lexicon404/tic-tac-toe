const board = document.getElementById('board');
const grids = board.querySelectorAll('.grid');

const boardArray = [
  0, 1, 2,
  3, 4, 5,
  6, 7, 8];

const player1 = 'X';

const player2 = 'O';

let moveCount = 0;

for (let i = 0; i < grids.length; i++) {
  grids[i].addEventListener('click', () => {
    moveCount++;
    if (moveCount % 2 === 0) {
      grids[i].textContent = player2;
      boardArray.splice(grids[i].id, 1, player2);
      if (winCondition()) {
        console.log('Player O Won!');
      }
    } else {
      grids[i].textContent = player1;
      boardArray.splice(grids[i].id, 1, player1);
      if (winCondition()) {
        console.log('Player X Won!');
      }
    }
  }, { once: true });
}

const winCondition = function () {
  if ((boardArray[0] === boardArray[1] && boardArray[0] === boardArray[2])
    || (boardArray[3] === boardArray[4] && boardArray[3] === boardArray[5])
    || (boardArray[6] === boardArray[7] && boardArray[6] === boardArray[8])
    || (boardArray[0] === boardArray[3] && boardArray[0] === boardArray[6])
    || (boardArray[1] === boardArray[4] && boardArray[1] === boardArray[7])
    || (boardArray[2] === boardArray[5] && boardArray[2] === boardArray[8])
    || (boardArray[0] === boardArray[4] && boardArray[0] === boardArray[8])
    || (boardArray[2] === boardArray[4] && boardArray[2] === boardArray[6])) {
    return true;
  }
};
