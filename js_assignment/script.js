const gridContainer = document.querySelector(".grid-container");
const player1Kittens = document.querySelector(".player1 .kittens");
const player2Kittens = document.querySelector(".player2 .kittens");
let currentPlayer = 1;
let activeKitten = null;


function startGame() {
  startTimers();
  playStartSound();
}

function playStartSound() {
  const startSound = document.getElementById('game-start-sound');
  startSound.play();
}

document.getElementById("startButton").addEventListener("click", startGame);

function restartGame() {
  document.querySelectorAll(".grid-item").forEach((gridItem) => {
    if (gridItem.firstChild) {
      gridItem.removeChild(gridItem.firstChild);
    }
  });

  player1Timer = 120;
  player2Timer = 120;
  currentPlayer = 1;
  updateTimerElements();
  
  document.querySelectorAll(".kitten").forEach((kitten) => {
    kitten.remove();
  });

  createKittens();

  player1Score = 0;
  player2Score = 0;
  document.getElementById("player1-score").textContent = player1Score;
  document.getElementById("player2-score").textContent = player2Score;
}

document.getElementById("restartButton").addEventListener("click", restartGame);



function createGrid() {
  for (let i = 0; i < 36; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.addEventListener("click", () => placeKitten(gridItem));
    gridItem.addEventListener("mouseenter", () => {
      if (activeKitten) {
        highlightPushedKittens(gridItem);
      }
    });
    gridItem.addEventListener("mouseleave", resetHighlightedCells);
    gridContainer.appendChild(gridItem);
  }
}

function highlightPushedKittens(gridItem) {
  const index = Array.from(gridContainer.children).indexOf(gridItem);
  const row = Math.floor(index / 6);
  const col = index % 6;
  const directions = [
    [-1, 0], // Up
    [1, 0], // Down
    [0, -1], // Left
    [0, 1], // Right
    [-1, -1], // Diagonal Up-Left
    [-1, 1], // Diagonal Up-Right
    [1, -1], // Diagonal Down-Left
    [1, 1], // Diagonal Down-Right
  ];

  directions.forEach(([dx, dy]) => {
    const newRow = row + dx;
    const newCol = col + dy;

    if (newRow >= 0 && newRow < 6 && newCol >= 0 && newCol < 6) {
      const adjacentIndex = newRow * 6 + newCol;
      const adjacentGridItem = gridContainer.children[adjacentIndex];

      if (adjacentGridItem.childElementCount > 0) {
        const newRowPushed = newRow + dx;
        const newColPushed = newCol + dy;

        if (newRowPushed >= 0 && newRowPushed < 6 && newColPushed >= 0 && newColPushed < 6) {
          const pushedIndex = newRowPushed * 6 + newColPushed;
          const pushedGridItem = gridContainer.children[pushedIndex];

          if (pushedGridItem.childElementCount === 0) {
            pushedGridItem.classList.add("highlight");
          }
        }
      }
    }
  });
}

function resetHighlightedCells() {
  const highlightedCells = document.querySelectorAll(".grid-item.highlight");

  highlightedCells.forEach((cell) => {
    cell.classList.remove("highlight");
  });
}

function createKittens() {
  for (let i = 0; i < 8; i++) {
    const kitten1 = document.createElement("img");
    kitten1.classList.add("kitten");
    kitten1.setAttribute("src", "kitten1.png");
    kitten1.setAttribute("data-player", 1);
    kitten1.addEventListener("click", setActiveKitten);
    player1Kittens.appendChild(kitten1);

    const kitten2 = document.createElement("img");
    kitten2.classList.add("kitten");
    kitten2.setAttribute("src", "kitten2.png");
    kitten2.setAttribute("data-player", 2);
    kitten2.addEventListener("click", setActiveKitten);
    player2Kittens.appendChild(kitten2);
  }
}

function playCatAddSound() {
  const catAddSound = document.getElementById('cat-add-sound');
  catAddSound.play();
}

function setActiveKitten(event) {
  const selectedKitten = event.target;
  const player = parseInt(selectedKitten.getAttribute("data-player"), 10);

  if (player === currentPlayer) {
    if (!activeKitten) {
      activeKitten = selectedKitten;
      playCatAddSound(); 
    } else if (activeKitten === selectedKitten) {
      activeKitten = null;
    } else {
      activeKitten = selectedKitten;
      playCatAddSound(); 
    }
  }
}



function setKittenColor(kitten, player) {
    if (player === 1) {
      kitten.style.backgroundColor = "green";
    } else if (player === 2) {
      kitten.style.backgroundColor = "blue";
    }
  }

  function playCatPushSound() {
    const catPushSound = document.getElementById('cat-push-sound');
    catPushSound.play();
}

  function pushAdjacentKittens(gridItem) {
    const index = Array.from(gridContainer.children).indexOf(gridItem);
    const row = Math.floor(index / 6);
    const col = index % 6;
    const directions = [
      [-1, 0], // Up
      [1, 0], // Down
      [0, -1], // Left
      [0, 1], // Right
      [-1, -1], // Diagonal Up-Left
      [-1, 1], // Diagonal Up-Right
      [1, -1], // Diagonal Down-Left
      [1, 1], // Diagonal Down-Right
    ];
  
    directions.forEach(([dx, dy]) => {
      const newRow = row + dx;
      const newCol = col + dy;
  
      if (newRow >= 0 && newRow < 6 && newCol >= 0 && newCol < 6) {
        const adjacentIndex = newRow * 6 + newCol;
        const adjacentGridItem = gridContainer.children[adjacentIndex];
  
        if (adjacentGridItem.childElementCount > 0) {
          const newRowPushed = newRow + dx;
          const newColPushed = newCol + dy;
  
          if (newRowPushed >= 0 && newRowPushed < 6 && newColPushed >= 0 && newColPushed < 6) {
            const pushedIndex = newRowPushed * 6 + newColPushed;
            const pushedGridItem = gridContainer.children[pushedIndex];
  
            if (pushedGridItem.childElementCount === 0) {
              const kittenToMove = adjacentGridItem.firstChild;
              kittenToMove.classList.add('animate-push');
              kittenToMove.style.transform = `translate(${dy * 100}%, ${dx * 100}%)`;
    
              setTimeout(() => {
                pushedGridItem.appendChild(kittenToMove);
                kittenToMove.style.transform = '';
                kittenToMove.classList.remove('animate-push');
              }, 500);
            }
          } else {
          const pushedKitten = adjacentGridItem.firstChild;
          const pushedKittenPlayer = parseInt(pushedKitten.getAttribute("data-player"), 10);
          const playerBench = pushedKittenPlayer === 1 ? player1Kittens : player2Kittens;

          playerBench.appendChild(pushedKitten);

         playCatPushSound();
          }
        }
      }
    });
}
  
let player1Score = 0;
let player2Score = 0;

function checkForThreeInARow() {
  const grid = Array.from(gridContainer.children);
  const checkWin = (index1, index2, index3) => {
    const item1 = grid[index1].firstChild;
    const item2 = grid[index2].firstChild;
    const item3 = grid[index3].firstChild;

    if (item1 && item2 && item3) {
      const player1 = parseInt(item1.getAttribute("data-player"), 10);
      const player2 = parseInt(item2.getAttribute("data-player"), 10);
      const player3 = parseInt(item3.getAttribute("data-player"), 10);

      if (player1 === player2 && player2 === player3) {
        return { winningPlayer: player1, indexes: [index1, index2, index3] };
      }
    }

    return null;
  };

  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 6; col++) {
      const index = row * 6 + col;

      if (col < 4) {
        const result = checkWin(index, index + 1, index + 2);
        if (result) return result;
      }

      if (row < 4) {
        const result = checkWin(index, index + 6, index + 12);
        if (result) return result;
      }

      if (row < 4 && col < 4) {
        const result = checkWin(index, index + 7, index + 14);
        if (result) return result;
      }

      if (row < 4 && col >= 2) {
        const result = checkWin(index, index + 5, index + 10);
        if (result) return result;
      }
    }
  }

  return null;
}

const player1ScoreElement = document.getElementById("player1-score");
const player2ScoreElement = document.getElementById("player2-score");

function playWinSound() {
  const winSound = document.getElementById('win-sound');
  winSound.play();
}

function updateScoreDisplay() {
  const prevPlayer1Score = parseInt(player1ScoreElement.textContent, 10);
  const prevPlayer2Score = parseInt(player2ScoreElement.textContent, 10);

  player1ScoreElement.textContent = player1Score;
  player2ScoreElement.textContent = player2Score;

  if (player1Score !== prevPlayer1Score || player2Score !== prevPlayer2Score) {
    playWinSound();
  }
}

function handleWin(result) {
  const { winningPlayer, indexes } = result;
  const playerBench = winningPlayer === 1 ? player1Kittens : player2Kittens;

  indexes.forEach((index) => {
    const gridItem = gridContainer.children[index];
    const kitten = gridItem.firstChild;
    playerBench.appendChild(kitten);
  });

  if (winningPlayer === currentPlayer) {
    currentPlayer === 1 ? player1Score++ : player2Score++;
  } else {
    currentPlayer === 1 ? player2Score++ : player1Score++;
  }

  updateScoreDisplay();
}

const targetScore = 5; 

function checkGameOver() {
  if (player1Score >= targetScore) {
    alert("Player 1 wins!");
    return true;
  }

  if (player2Score >= targetScore) {
    alert("Player 2 wins!");
    return true;
  }

  const player1KittensOnField = Array.from(gridContainer.children).filter(
    (item) => item.childElementCount > 0 && parseInt(item.firstChild.getAttribute("data-player"), 10) === 1
  ).length;

  const player2KittensOnField = Array.from(gridContainer.children).filter(
    (item) => item.childElementCount > 0 && parseInt(item.firstChild.getAttribute("data-player"), 10) === 2
  ).length;

  if (player1KittensOnField === 8) {
    alert("Player 1 has all kittens on the field and loses!");
    return true;
  }

  if (player2KittensOnField === 8) {
    alert("Player 2 has all kittens on the field and loses!");
    return true;
  }

  return false;
}

//Timer
let player1Timer = 120;
let player2Timer = 120;
let intervalId = null;

const player1TimerElement = document.createElement("div");
const player2TimerElement = document.createElement("div");

function updateTime() {
  if (currentPlayer === 1) {
    player1Timer--;

    if (player1Timer === 0) {
      clearInterval(intervalId);
      alert("Player 1 ran out of time and loses!");
      return;
    }
  } else {
    player2Timer--;

    if (player2Timer === 0) {
      clearInterval(intervalId);
      alert("Player 2 ran out of time and loses!");
      return;
    }
  }

  updateTimerElements();
}

function updateTimerElements() {
  player1TimerElement.textContent = `Time: ${player1Timer}s`;
  player2TimerElement.textContent = `Time: ${player2Timer}s`;
}

function startTimers() {
  intervalId = setInterval(updateTime, 1000);
}

function stopTimers() {
  clearInterval(player1Interval);
  clearInterval(player2Interval);
}

function checkForWinner() {
  if (player1Score === targetScore || player2Score === targetScore) {
    stopTimers();
    let winner = player1Score === targetScore ? 1 : 2;
    alert(`Player ${winner} wins!`);
  }
}

function placeKitten(gridItem) {
  if (gridItem.childElementCount === 0 && activeKitten) {
    const activeKittenPlayer = parseInt(activeKitten.getAttribute("data-player"), 10);

    if (activeKittenPlayer === currentPlayer) {
      setKittenColor(activeKitten, currentPlayer);
      gridItem.appendChild(activeKitten);
      pushAdjacentKittens(gridItem);

      const result = checkForThreeInARow();
      if (result) {
        handleWin(result);
      }

      if (!checkGameOver()) {
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        activeKitten = null;
      }
    }
  }
}

player1TimerElement.classList.add("timer");
player1TimerElement.style.marginTop = "10px";
player1TimerElement.style.marginBottom = "10px";
player2TimerElement.classList.add("timer");
player2TimerElement.style.marginTop = "10px";
player2TimerElement.style.marginBottom = "10px";

document.querySelector(".player1").insertBefore(player1TimerElement, player1Kittens);
document.querySelector(".player2").insertBefore(player2TimerElement, player2Kittens);

updateTimerElements();
//startTimers();
createGrid();
createKittens();
