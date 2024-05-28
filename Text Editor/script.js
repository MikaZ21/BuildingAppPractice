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

function setTextSize() {
    let fontSize = document.querySelector('#fontSizeSelector').value;
    element.style.fontSize = fontSize;
}

function toggleBold() {
    element.classList.toggle("bold");
}

function toggleUnderline() {
    element.classList.toggle("underline");
}

function alignText(alignment) {
    element.style.textAlign = alignment;
}

function removeFormat() {
    // Reset to default style etting
    element.style.color = "black";
    element.style.backgroundColor = "white";
    element.style.fontSize = "12px";
    element.classList.remove("underline", "bold");
    element.style.textAlign = "left";

    // Reset color pickers and inputs to their default values
    document.querySelector('#colorPicker').value = "#000000"; // Default value for color picker
    document.querySelector('#colorText').value = "";
    document.querySelector('#bgColorPicker').value = "#ffffff"; // Default value for background color picker
    document.querySelector('#bgColorText').value = "";
    document.querySelector('#fontSizeSelector').value = "12px";
}

function resetText() {
    removeFormat(); // Remove format first
    element.value = ""; // Clear the text
}

// Function to handle input event
let defaultText = element.getAttribute('placeholder');
function handleInput() {
    // Change text color to black when the user starts typing
    element.style.color = 'black';
}

// Function to handle blur event
function handleBlur() {
    // If the textarea is empty, restore the default text and change the placeholder color back to gray
    if (element.value.trim() === '') {
        element.value = defaultText;
        element.style.color = 'gray';
    }
}

// Function to handle focus event
function handleFocus() {
    // If the value of the textarea matches the placeholder text, clear it and change text color to black
    if (element.value.trim() === defaultText.trim()) {
        element.value = '';
        element.style.color = 'black';
    }
}

// Add input event listener to the textarea
element.addEventListener('input', handleInput);

// Add blur event listener to the textarea
element.addEventListener('blur', handleBlur);

// Add focus event listener to the textarea
element.addEventListener('focus', handleFocus);

// Call handleBlur once to ensure placeholder text behavior on initial load
handleBlur();
