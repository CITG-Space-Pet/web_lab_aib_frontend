const btnRed = document.getElementById("btn-red");
const btnGreen = document.getElementById("btn-green");
const btnBlue = document.getElementById("btn-blue");
const body = document.querySelector("body");

btnRed.addEventListener("click", function () {
  body.style.backgroundColor = "red";
});

btnGreen.addEventListener("click", function () {
  body.style.backgroundColor = "green";
});

btnBlue.addEventListener("click", function () {
  body.style.backgroundColor = "blue";
});