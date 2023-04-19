const task1 = document.querySelector('#task1');
const task2 = document.querySelector('#task2');
const task3 = document.querySelector('#task3');
const task4 = document.querySelector('#task4');

const game = [
  "XXOO",
  "O OX",
  "OOO ",
];

//Task1
function checkRowLengths(game) {
  const firstRowLength = game[0].length;
  for (let i = 1; i < game.length; i++) {
    if (game[i].length !== firstRowLength) {
      return false;
    }
  }
  return true;
}

const task1Element = document.getElementById('task1');
task1Element.textContent = checkRowLengths(game);

//Task2
function checkFirstRowCharacters(row) {
  for (let i = 0; i < row.length; i++) {
    if (row[i] !== 'X' && row[i] !== 'O') {
      return false;
    }
  }
  return true;
}

const task2Element = document.getElementById('task2');
task2Element.textContent = checkFirstRowCharacters(game[0]);


//Task3
function countXOCharacters(game) {
  let countX = 0;
  let countO = 0;
  for (let i = 0; i < game.length; i++) {
    for (let j = 0; j < game[i].length; j++) {
      if (game[i][j] === 'X') {
        countX++;
      } else if (game[i][j] === 'O') {
        countO++;
      }
    }
  }
  return `X / O = ${countX} / ${countO}`;
}

const task3Element = document.getElementById('task3');
task3Element.textContent = countXOCharacters(game);


//Task4
function findConsecutiveRow(game) {
  for (let i = 0; i < game.length; i++) {
    if (game[i].includes('XXX') || game[i].includes('OOO')) {
      return i;
    }
  }
  return -1; // Return -1 if no such row exists (though it's assumed at least one such row exists)
}

const task4Element = document.getElementById('task4');
task4Element.textContent = findConsecutiveRow(game);

