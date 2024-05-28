let element = document.querySelector('#text');

function setColor() {
    // Get the color value from the color picker input
    let colorPicker = document.querySelector('#colorPicker').value;
    // Get the color value from the text input
    let colorText = document.querySelector('#colorText').value;

    // Use the value from the text input if it exists, otherwise use the color picker value
    let color = colorText || colorPicker;

    // Set the color of the element
    element.style.color = color;
}

function setBgColor() {
    let bgColorPicker = document.querySelector('#bgColorPicker').value;
    let bgColorText = document.querySelector('#bgColorText').value;

    let bgColor = bgColorText || bgColorPicker;

    element.style.backgroundColor = bgColor;
}

function toggleUnderline() {
    element.classList.toggle("underline");
}

function toggleBold() {
    element.classList.toggle("bold");
}

function toggleTextSize() {
    
}

function toggleTextAlign() {
    
}

function removeFormat() {
    element.classList.remove("underline", "bold", )
    element.style.color = "black";
    element.style.backgroundColor = "white";
}