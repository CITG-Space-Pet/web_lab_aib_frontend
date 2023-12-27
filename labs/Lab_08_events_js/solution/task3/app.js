const redInput = document.getElementById('redInput');
const greenInput = document.getElementById('greenInput');
const blueInput = document.getElementById('blueInput');
const colorResult = document.getElementById('colorResult');
const colorSquare = document.getElementById('squareColor');
const colorList = document.getElementById('listOfBoxes');
let colorBoxesCount = 15;
let maxColorBoxesCountFlag = false;

function ChangeBackgroundColor() {
    const red = redInput.value || 0;
    const green = greenInput.value || 0;
    const blue = blueInput.value || 0;

    if (red >= 0 && red <= 255 && green >= 0 && green <= 255 && blue >= 0 && blue <= 255) {
        const rgbColor = `rgb(${red}, ${green}, ${blue})`;
        colorResult.textContent = `Choisen color: ${rgbColor}`;
        colorSquare.style.backgroundColor = rgbColor;
    } else {
        colorResult.textContent = 'Incorrect value';
        colorSquare.style.backgroundColor = 'white';
    }
}

function addBoxToList()
{
    if(colorBoxesCount > 0 && !maxColorBoxesCountFlag)
    {
        let NewColorBox = colorSquare.cloneNode(true);
        let stringCount=15 - colorBoxesCount;
        NewColorBox.id="colorSquare" + stringCount.toString();
        colorList.append(NewColorBox);
        colorBoxesCount-=1;
        if(colorBoxesCount <= 0)
        {
            maxColorBoxesCountFlag = true;
        }
    } else
    {
        let NewColorBox = colorSquare.cloneNode(true);
        NewColorBox.id="colorSquare" + colorBoxesCount.toString();
        document.getElementById("colorSquare" + colorBoxesCount.toString()).replaceWith(NewColorBox);
        colorBoxesCount+=1;
        if(colorBoxesCount === 15)
        {
            colorBoxesCount = 0;
        }
    }

}

redInput.addEventListener('input', ChangeBackgroundColor);
greenInput.addEventListener('input', ChangeBackgroundColor);
blueInput.addEventListener('input', ChangeBackgroundColor);

ChangeBackgroundColor();