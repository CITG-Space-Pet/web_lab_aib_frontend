const input1 = document.getElementById("inp1");
const input2= document.getElementById("inp2");
const input3 = document.getElementById("inp3");
const bkg = document.getElementsByClassName("main__box-right");
const spans = document.querySelectorAll("span");
const inputs = document.querySelectorAll("input");
const colorContainer = document.getElementById("colorContainer");
const generateBtn = document.getElementById("generate__btn");

let red = 0;
let green = 0;
let blue = 0;

colorContainer.addEventListener("click", (event) => {
  const clickedColorBlock = event.target.closest(".color__block");

  if (clickedColorBlock) {
    const clickedColor = getComputedStyle(clickedColorBlock).backgroundColor;
    localStorage.setItem("selectedColor", clickedColor);
  }
});

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    let label = input.closest(".box__left-control").querySelector("label");
    if (input.value >= 0 && input.value <= 255) {
      input.style.borderColor = "green";
      if (label.innerText == "red") {
        red = +input.value;
      } else if (label.innerText == "green") {
        green = +input.value;
      } else {
        blue = +input.value;
      }
      spans[index].style.visibility = "hidden";
      bkg[0].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    } else {
      input.style.borderColor = "red";
      spans[index].style.visibility = "visible";
    }
  });
});

generateBtn.addEventListener("click", () => {
  const colorBlock = document.createElement("div");
  colorBlock.classList.add("color__block");
  colorContainer.prepend(colorBlock);
  colorBlock.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  let colorBlocks = document.querySelectorAll(".color__block");
  if (colorBlocks.length > 15) {
    colorContainer.removeChild(colorBlocks[colorBlocks.length - 1]);
  }
});

document.addEventListener("click", (event) => {
  const selectedColor = localStorage.getItem("selectedColor");
  if (selectedColor) {
    const target = event.target;
    if (
      target !== colorContainer &&
      target !== generateBtn &&
      !colorContainer.contains(target) &&
      target !== bkg[0]
    ) {
      target.style.backgroundColor = selectedColor;
    }
  }
});