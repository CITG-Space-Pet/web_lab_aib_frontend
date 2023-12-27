var inputRed = document.getElementById("input-red");
var inputGreen = document.getElementById("input-green");
var inputBlue = document.getElementById("input-blue");
var colorPreview = document.getElementById("color-preview");
var colorArea = document.getElementById("color-area");
var generateButton = document.getElementById("generate-button");

inputRed.addEventListener("input", updateColorPreview);
inputGreen.addEventListener("input", updateColorPreview);
inputBlue.addEventListener("input", updateColorPreview);

generateButton.addEventListener("click", generateBlock);

function updateColorPreview() {
  var red = parseInt(inputRed.value);
  var green = parseInt(inputGreen.value);
  var blue = parseInt(inputBlue.value);
  colorPreview.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}

function generateBlock() {
  var red = parseInt(inputRed.value);
  var green = parseInt(inputGreen.value);
  var blue = parseInt(inputBlue.value);

  if (!isNaN(red) && !isNaN(green) && !isNaN(blue)) {
    if (red >= 0 && red <= 255 && green >= 0 && green <= 255 && blue >= 0 && blue <= 255) {
      var colorBlock = document.createElement("div");
      colorBlock.className = "color-block";
      colorBlock.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
      colorArea.insertBefore(colorBlock, colorArea.firstChild);

      var colorBlocks = colorArea.getElementsByClassName("color-block");
      if (colorBlocks.length > 15) {
        colorArea.removeChild(colorBlocks[colorBlocks.length - 1]);
      }
    }
  }
}

colorArea.addEventListener("click", function(event) {
  var clickedElement = event.target; 
  if (clickedElement.classList.contains("color-block")) {
    var bgColor = clickedElement.style.backgroundColor;
    localStorage.setItem("selectedColor", bgColor);
  }
});

document.addEventListener("click", function(event) {
  var clickedElement = event.target;
   if (
    !clickedElement.classList.contains("color-block") &&
    !clickedElement.classList.contains("color-preview") &&
    !clickedElement.classList.contains("generate-button")
  ) {
    var savedColor = localStorage.getItem("selectedColor");
    if (savedColor) {
      clickedElement.style.backgroundColor = savedColor;
    }
  }
});