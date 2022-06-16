//dice game ---

//select all the elements from html using query selector.

const playingToBtn = document.querySelector(".playingTo");
const form = document.querySelector("form");
const inputElm = document.querySelector("#inputScore");
const p1Btn = document.querySelector("#p1Btn");
const p2Btn = document.querySelector("#p2Btn");
const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");
const resetBtn = document.querySelector("#resetBtn");
const resetBtnAll = document.querySelector("#resetBtnAll");
const diceELm = document.querySelector("#Dice");
//
const setPlayerName = document.querySelector("#setPlayerName");
const nameSet1 = document.querySelector(".nameSet1");
const nameSet2 = document.querySelector(".nameSet2");
const nameSet3 = document.querySelector(".nameSet3");
const nameSet4 = document.querySelector(".nameSet4");
//
const totalMatch = document.querySelector(".playedMatch");
const player1WonMatch = document.querySelector(".MatchWon1");
const player2WonMatch = document.querySelector(".MatchWon2");

// set the initial values

let winningScore = 6;
let p1ScoreValue = 0;
let p2ScoreValue = 0;
let playersInArray = ["p1", "p2"];
let playStart =
  playersInArray[Math.floor(Math.random() * playersInArray.length)];
let diceRandomGenerator;
let gameOver = false;
//
let totalMatchPlayed = 0;
let p1WonScoreValue = 0;
let p2WonScoreValue = 0;

//add winning value with playingToBtn
playingToBtn.textContent = winningScore;

function inputValidation(score) {
  if (score < 1) {
    alert("please provide value greater than zero!");
  }
}

//set Event listener submit in form element.
form.addEventListener("submit", (evet) => {
  evet.preventDefault();
  const getInputValue = +inputElm.value;
  inputValidation(getInputValue);
  playingToBtn.textContent = getInputValue;
  winningScore = getInputValue;
  inputElm.value = "";
});

// create a game over function which check the current value and turn gameover into true and show the winner through alert. and  disable players buttons.
function gameOverFunc() {
  if (p1ScoreValue >= winningScore) {
    gameOver = true;
    p1Btn.setAttribute("disabled", "disabled");
    p2Btn.setAttribute("disabled", "disabled");
    totalMatchPlayed++;
    p1WonScoreValue++;
    totalMatch.textContent = totalMatchPlayed;
    player1WonMatch.textContent = p1WonScoreValue;

    alert("player-1 won the match");
  } else if (p2ScoreValue >= winningScore) {
    gameOver = true;
    p1Btn.setAttribute("disabled", "disabled");
    p2Btn.setAttribute("disabled", "disabled");
    totalMatchPlayed++;
    p2WonScoreValue++;
    totalMatch.textContent = totalMatchPlayed;
    player2WonMatch.textContent = p2WonScoreValue;
    alert("player-2 won the match");
  }
}

// set event listener to the p1 button and check some conditions. if conditions is true then it increase the value of p1 score. call disable button function and also gameover function.

p1Btn.addEventListener("click", (evtp1) => {
  if (!gameOver && playStart == "p1" && p1ScoreValue <= winningScore) {
    diceRandomGenerator = diceELm.textContent = Math.ceil(Math.random() * 6);
    p1ScoreValue += diceRandomGenerator;
    p1Score.textContent = p1ScoreValue;
    playStart = "p2";
    p1Btn.setAttribute("disabled", "disabled");
    p2Btn.removeAttribute("disabled");

    // disableButton(p1Btn, p2Btn, "p2");
    gameOverFunc();
  }
});

p2Btn.addEventListener("click", (evtp2) => {
  if (!gameOver && playStart == "p2" && p1ScoreValue <= winningScore) {
    diceRandomGenerator = diceELm.textContent = Math.ceil(Math.random() * 6);
    p2ScoreValue += diceRandomGenerator;
    p2Score.textContent = p2ScoreValue;
    // disableButton(p2Btn, p1Btn, "p1");
    playStart = "p1";
    p2Btn.setAttribute("disabled", "disabled");
    p1Btn.removeAttribute("disabled");

    gameOverFunc();
  }
});

setPlayerName.addEventListener("click", (eventName) => {
  let Player1name = prompt("set player-1 name");
  let Player2name = prompt("set player-2 name");
  nameSet1.textContent = Player1name;
  nameSet2.textContent = Player2name;
  nameSet3.textContent = Player1name;
  nameSet4.textContent = Player2name;
});

resetBtn.addEventListener("click", (evnt) => {
  p1ScoreValue = 0;
  p2ScoreValue = 0;
  gameOver = false;
  p1Score.textContent = p1ScoreValue;
  p2Score.textContent = p2ScoreValue;
  let diceRandomGenerator;
  diceELm.textContent = diceRandomGenerator;
  //   disableButton(p1Btn, p2Btn, "p2");
  //   disableButton(p2Btn, p1Btn, "p1");
  p1Btn.removeAttribute("disabled");
  p2Btn.removeAttribute("disabled");
  playStart = playersInArray[Math.floor(Math.random() * 2)];
});

resetBtnAll.addEventListener("click", (evntAll) => {
  winningScore = 6;
  p1ScoreValue = 0;
  p2ScoreValue = 0;
  totalMatchPlayed = 0;
  p1WonScoreValue = 0;
  p2WonScoreValue = 0;
  gameOver = false;
  playingToBtn.textContent = winningScore;
  p1Score.textContent = p1ScoreValue;
  p2Score.textContent = p2ScoreValue;
  let diceRandomGenerator;
  diceELm.textContent = diceRandomGenerator;
  totalMatch.textContent = totalMatchPlayed;
  player1WonMatch.textContent = p1WonScoreValue;
  player2WonMatch.textContent = p2WonScoreValue;
  //   disableButton(p1Btn, p2Btn, "p2");
  //   disableButton(p2Btn, p1Btn, "p1");
  p1Btn.removeAttribute("disabled");
  p2Btn.removeAttribute("disabled");
  playStart = playersInArray[Math.floor(Math.random() * 2)];
});
