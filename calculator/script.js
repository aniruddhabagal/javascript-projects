function display(val) {
  document.getElementById("result").value += val;

  return val;
}

function solve() {
  let x = document.getElementById("result").value;

  let y = // Search how eval() function works and apply it.
    (document.getElementById("result").value = y);

  return y;
}

function clearScreen() {
  document.getElementById("result").value = "";
}
