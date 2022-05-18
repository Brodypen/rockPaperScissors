const moveStatus = document.getElementById("moveS");
const scoreCount = document.getElementById("scoreC");
const playAgain = document.querySelector(".playAgain");
let yourScore = 0;
let enemyScore = 0;
let won = false;
playAgain.style.display = "none";
function getRandomChoice() {
  return Math.floor(Math.random() * 3);
}
function rockPaperScissors(choice) {
  if (!won) {
    const AiChoosed = getRandomChoice();
    if (AiChoosed == 0) {
      moveStatus.innerHTML = "Draw!";
    }
    if (AiChoosed == 1) {
      moveStatus.innerHTML = "You won!";
      yourScore++;
    }
    if (AiChoosed == 2) {
      moveStatus.innerHTML = "You lost!";
      enemyScore++;
    }
    scoreCount.innerHTML = yourScore + " - " + enemyScore;
    if (yourScore >= 5) {
      moveStatus.innerHTML = "You won the game!";
      won = true;
    }
    if (enemyScore >= 5) {
      moveStatus.innerHTML = "You lost the game!";
      won = true;
    }
  }
  if (won) {
    playAgain.style.display = "block";
    moveStatus.style.display = "none";
  }
}
function reset() {
  yourScore = 0;
  enemyScore = 0;
  won = false;
  playAgain.style.display = "none";
  scoreCount.innerHTML = yourScore + " - " + enemyScore;
  moveStatus.style.display = "block";
  moveStatus.innerHTML = "Your move...";
}
