const p1Btn = document.querySelector("#p1Btn");
const p2Btn = document.querySelector("#p2Btn");
const resetBtn = document.querySelector("#resetBtn");

const p1Disp = document.querySelector("#p1Disp");
const p2Disp = document.querySelector("#p2Disp");
const maxScoreSelect = document.querySelector('#playto')

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

p1Btn.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      isGameOver = true;
    }
    p1Disp.textContent = p1Score;
  }
});

p2Btn.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameOver = true;
    }
    p2Disp.textContent = p2Score;
  }
});

resetBtn.addEventListener("click", function () {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;

  p1Disp.textContent = 0;
  p2Disp.textContent = 0;
});

maxScoreSelect.addEventListener('change', function(){
    
})