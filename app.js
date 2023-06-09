let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("#btn");
let equal = document.getElementById("btn-equal");
let clear = document.getElementById("btn-clear");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    let value = e.target.dataset.num;
    screen.value += value;
  });
});

equal.addEventListener("click", function (e) {
  if (screen.value === "") {
    screen.value = "please enter value";
  } else {
    let answer = eval(screen.value);
    screen.value = answer;
  }
});

clear.addEventListener("click", function (e) {
  screen.value = "";
});
