const moveStatus = document.getElementById("moveS");
const scoreCount = document.getElementById("scoreC");
let yourScore = 0;
let enemyScore = 0;
let won = false;
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
}
