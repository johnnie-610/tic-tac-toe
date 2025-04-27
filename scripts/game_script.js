/*
 *
 * This is a tic-tac-toe game
 * The game features: 3x3, 4x4, and 5x5 boards
 * The game features single player and multiplayer modes
 * The selected board size and mode are injected into the HTML and saved in local storage
 */

"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const footerHML = `
    <p>&copy; <span id="year"></span> JG. All rights reserved.</p>
    <p>Created with <span class="heart">❤</span> by <a href="https://github.com/Johnnie" target="_blank" rel="noopener noreferrer">Johnnie</a></p>
    `;
  const footerElement = document.querySelector("footer");
  footerElement.innerHTML = footerHML;
  const yearElement = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;

  const gameModal = document.getElementById("game-dialog");
  const gameButton = document.getElementById("new-game-button");
  const startButton = document.getElementById("start-game-button");
  const closeButton = document.getElementById("close-dialog-button");
  const gameContainer = document.querySelector(".game-container");

  gameButton.addEventListener("click", function () {
    gameModal.style.display = "block";
  });
  closeButton.addEventListener("click", function () {
    gameModal.style.display = "none";
  });
  startButton.addEventListener("click", function () {
    const boardSize = document.getElementById("board-size").value;
    const gameMode = document.getElementById("game-mode").value;
    const symbol = document.getElementById("symbol").value;
    // save as cache
    localStorage.setItem("boardSize", boardSize);
    localStorage.setItem("gameMode", gameMode);
    localStorage.setItem("symbol", symbol);

    gameContainer.innerHTML = "";
    if (gameMode === "player-vs-computer") {
      Game(boardSize, symbol, gameContainer);
    } else {
      window.alert("Multiplayer mode not implemented yet; please check back later.");
    }

  });
});

function Game(boardSize, gameContainer, symbol) {
  const computerSymbol = symbol === "X" ? "O" : "X";

  const titleDiv = document.createElement("div");
  const scoreDiv = document.createElement("div");
  const turnDiv = document.createElement("div");
  const boardDiv = document.createElement("div");
  const newGameButton = document.createElement("button");

  titleDiv.textContent = "Tic Tac Toe";
  const playerDiv = document.createElement("div");
  const computerDiv = document.createElement("div");

  scoreDiv.appendChild(playerDiv);
  scoreDiv.appendChild(computerDiv);

  gameContainer.appendChild(titleDiv);
  gameContainer.appendChild(scoreDiv);
  gameContainer.appendChild(turnDiv);
  gameContainer.appendChild(boardDiv);
  gameContainer.appendChild(newGameButton);

  newGameButton.textContent = "New Game";

  boardDiv.innerHTML = getBoard(boardSize);

  let playerScore = 0;
  let computerScore = 0;

  let turn = getTurn();
  let p  = `
  Player (${symbol})
  Score: ${playerScore}
  `
  let c = `
  Computer (${computerSymbol})
  Score: ${computerScore}
  `
  playerDiv.innerHTML = p;
  computerDiv.innerHTML = c;

  // add event listener to each cell
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.addEventListener("click", function () {
      if (cell.textContent === "") {
        cell.textContent = turn;
        turn = turn === "X" ? "O" : "X";
        turnDiv.textContent = `Turn: ${turn}`;
        if (checkWin(boardSize, gameContainer)) {
          if (turn === computerSymbol) {
            computerScore++;
            c = `
            Computer (${computerSymbol})
            Score: ${computerScore}
            `
            computerDiv.innerHTML = c;
          } else {
            playerScore++;
            p = `
            Player (${symbol})
            Score: ${playerScore}
            `
            playerDiv.innerHTML = p;
          }
          window.alert("Game Over");
          newGameButton.addEventListener("click", function () {
            Game(boardSize, gameContainer, symbol);
          });
        }
      }
    });
  });

}


function getComputerMove() {
  const cells = document.querySelectorAll(".cell");
  const emptyCells = [];
  cells.forEach(cell => {
    if (cell.textContent === "") {
      emptyCells.push(cell);
    }
  });
  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  return emptyCells[randomIndex];
}



function getTurn() {
  let turn = Math.floor(Math.random() * 2);
  if (turn === 0) {
    return "X";
  } else {
    return "O";
  }
}

function getBoard(boardSize) {
  // generate html for the board
  let board = ``;
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      board += `<div class="cell" id="${i}-${j}"></div>`;
    }
  }
  return board;
}

