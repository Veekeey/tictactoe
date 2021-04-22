
// capturing elements

let statusDisplay = document.querySelector(".status-display");
let restart = document.querySelector(".restart");

let gameActive = true;
let currentPlayer = "X";
let gameState = [" ", " ", " ", " ", " ", " ", " ", " ", " "];


const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
const winningMessage = ()=> `${currentPlayer} has won`;
const drawMessage = ()=> `its a draw!`;
statusDisplay.innerHTML = currentPlayerTurn();


// click section

const handleBlockClick = (clickedBlockEvent) => {

  const clickedBlock = clickedBlockEvent.target;
  const clickedBlockIndex = parseInt(clickedBlock.getAttribute("data-cell-index"));

    // check if block has been played or game not active

    if (gameState[clickedBlockIndex] !== "" || !gameActive) {
      return;
    }   
      handleBlockPlayed(clickedBlock, clickedBlockIndex);
      resultValidation()

}

  let handleBlockPlayed = (clickedBlock, clickedBlockIndex) => {
    gameState[clickedBlockIndex] = currentPlayer;
    clickedBlock.innerHTML = currentPlayer;
  }

document.querySelectorAll(".block").forEach(block => block.addEventListener("click", handleBlockClick));



const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];


function resultValidation(){
  let roundWon = false;

    for (let i = 0; i <= 7; i++){

      const winCondition = winningConditions[i];
      let a = gameState[winCondition[0]];
      let b = gameState[winCondition[1]];
      let c = gameState[winCondition[2]];

        if (a === "" || b === "" || c === ""){
          continue;
        }

          if (a === b && b === c){
            roundWon = true;
            break;
          }

    }

    if (roundWon) {
      statusDisplay.innerHTML = winningMessage();
      gameActive = false;
      return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }
           

}

  function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
  }

  function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    block.forEach(block => block.innerHTML = " ");
  }

  


restart.addEventListener("click", handleRestartGame);
