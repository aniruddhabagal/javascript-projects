const p1 = {
  score: 0,
  button: document.querySelector("#p1Btn"),
  disp: document.querySelector("#p1Disp"),
}

const p2 = {
  score: 0,
  button: document.querySelector("#p2Btn"),
  disp: document.querySelector("#p2Disp"),
}

const resetBtn = document.querySelector("#resetBtn");
const maxScoreSelect = document.querySelector("#playto");

let winningScore = 5;
let isGameOver = false;

function updatesScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.disp.classList.add("winner");
      opponent.disp.classList.add("loser");
      player.button.disabled = true;
      opponent.disabled = true;
    }
    player.disp.textContent = player.score;
  }
}


p1.button.addEventListener("click", function () {

  updatesScores(p1, p2);
});

p2.button.addEventListener("click", function () {

  updatesScores(p2, p1);
});


maxScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

resetBtn.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.disp.textContent = 0;
    p.disp.classList.remove("winner", "loser");
    p.button.disabled = false;
  }
}
