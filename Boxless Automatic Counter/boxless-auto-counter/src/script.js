let autoIncrement = document.getElementById('autoIncrement');
let numberToReach = 50;
let numberToStart = autoIncrement.textContent;

let counter = setInterval(function() {
  numberToStart++;
  autoIncrement.textContent = numberToStart;
  if (numberToStart == numberToReach) {
    clearInterval(counter);
  }
}, 50)