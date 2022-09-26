let uScore = document.querySelector("#userScoreVal");
let uScorePoint = 0;

let cScore = document.querySelector("#compScoreVal");
let cScorePoint = 0;
cScore.innerHTML = cScorePoint;

let userChoice = document.getElementById("result-user-stat");
let compChoice = document.getElementById("result-comp-stat");
let winnerChoice = document.getElementById("result-final-stat");

let cChoice, uChoice, winner;

let possibleChoices = document.querySelectorAll(".choice");

[...possibleChoices].forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    uChoice = e.target.id;
    userChoice.innerHTML = "User: " + uChoice;
    generateCompChoice();
    getResult();
  })
);

function generateCompChoice() {
  let randomcChoice = Math.floor(Math.random() * 3 + 1);
  if (randomcChoice === 1) {
    cChoice = "r";
  }
  if (randomcChoice === 2) {
    cChoice = "p";
  }
  if (randomcChoice === 3) {
    cChoice = "s";
  }
  compChoice.innerHTML = "Computer: " + cChoice;
}

function getResult() {

  // FOR USER WIN
  if (
    (uChoice === "r" && cChoice === "s") ||
    (uChoice === "p" && cChoice === "r") ||
    (uChoice === "s" && cChoice === "p")
  ) {
    winner = "Winner: USER";
    uScorePoint = uScorePoint + 1;
    uScore.innerHTML = uScorePoint;
  }

  // FOR DRAW
  if (
    (uChoice == "r" && cChoice == "r") ||
    (uChoice == "s" && cChoice == "s") ||
    (uChoice == "p" && cChoice == "p")
  ) {
    winner = "Winner: Draw";
  }


  // FOR COMP WIN
  if (
    (uChoice == "s" && cChoice == "r") ||
    (uChoice == "p" && cChoice == "s") ||
    (uChoice == "r" && cChoice == "p")
  ) {
    winner = "Winner: Computer"
    cScorePoint = cScorePoint + 1;
    cScore.innerHTML = cScorePoint;
  }

  winnerChoice.innerHTML = winner;
}

