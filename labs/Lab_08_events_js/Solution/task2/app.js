function updateColor() {
  var inputRed = parseInt(document.getElementById("input-red").value);
  var inputGreen = parseInt(document.getElementById("input-green").value);
  var inputBlue = parseInt(document.getElementById("input-blue").value);

  if (!isNaN(inputRed) && !isNaN(inputGreen) && !isNaN(inputBlue)) {
    if (inputRed >= 0 && inputRed <= 255 && inputGreen >= 0 && inputGreen <= 255 && inputBlue >= 0 && inputBlue <= 255) {
      var colorArea = document.getElementById("color-area");
      colorArea.style.backgroundColor = "rgb(" + inputRed + "," + inputGreen + "," + inputBlue + ")";
    }
  }
}

document.getElementById("input-red").addEventListener("input", updateColor);
document.getElementById("input-green").addEventListener("input", updateColor);
document.getElementById("input-blue").addEventListener("input", updateColor);
