const redInput = document.getElementById('redInput');
const greenInput = document.getElementById('greenInput');
const blueInput = document.getElementById('blueInput');
let colorResult = document.getElementById('colorResult');
const colorSquare = document.getElementById('squareColor');
const colorList = document.getElementById('listOfBoxes');
let resBox = document.getElementById('resultBox')
let colorBox = document.getElementById('colorBox')
let colorBoxesCount = 15;
let maxColorBoxesCountFlag = false;
let colorBuff = `rgb(${0}, ${0}, ${0})`;

function ChangeBackgroundColor() 
{
    const red = redInput.value || 0;
    const green = greenInput.value || 0;
    const blue = blueInput.value || 0;

    if (red >= 0 && red <= 255 && green >= 0 && green <= 255 && blue >= 0 && blue <= 255) {
        const rgbColor = `rgb(${red}, ${green}, ${blue})`;
        colorResult.textContent = `Choisen color': ${rgbColor}`;
        colorSquare.style.backgroundColor = rgbColor;
    } else {
        colorResult.textContent = 'Incorrect value';
        colorSquare.style.backgroundColor = 'white';
    }
}

function copyColor()
{
    colorBuff = this.style.backgroundColor;
}

function ChangeOnClickColor()
{
    this.style.backgroundColor = colorBuff;
}

function addBoxToList()
{
    if(colorBoxesCount > 0 && !maxColorBoxesCountFlag)
    {
        let NewColorBox = colorSquare.cloneNode(true);
        let stringCount=15 - colorBoxesCount;
        NewColorBox.id="colorSquare" + stringCount.toString();
        NewColorBox.addEventListener('click', copyColor);
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
        NewColorBox.addEventListener('click', copyColor);
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
resBox.addEventListener('click', ChangeOnClickColor);
colorBox.addEventListener('click', ChangeOnClickColor);


ChangeBackgroundColor();