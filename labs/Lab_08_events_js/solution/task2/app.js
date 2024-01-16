const redInput = document.getElementById('redInput');
const greenInput = document.getElementById('greenInput');
const blueInput = document.getElementById('blueInput');
const colorResult = document.getElementById('colorResult');
const colorSquare = document.getElementById('squareColor');

function ChangeBackgroundColor() 
{
    const red = redInput.value || 0;
    const green = greenInput.value || 0;
    const blue = blueInput.value || 0;

    if (red >= 0 && red <= 255 && green >= 0 && green <= 255 && blue >= 0 && blue <= 255) 
    {
        const rgbColor = `rgb(${red}, ${green}, ${blue})`;
        colorResult.textContent = `Choisen color: ${rgbColor}`;
        colorSquare.style.backgroundColor = rgbColor;
    } else 
    {
        colorResult.textContent = 'Incorrect value';
        colorSquare.style.backgroundColor = 'white';
    }
}

redInput.addEventListener('input', ChangeBackgroundColor);
greenInput.addEventListener('input', ChangeBackgroundColor);
blueInput.addEventListener('input', ChangeBackgroundColor);

ChangeBackgroundColor();
