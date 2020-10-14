const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

function sendNumberValue(number) {
    // If current display value is 0, replace it, if not, add number
    const displayValue = calculatorDisplay.textContent;
    // Ternary operator - if the display value is equal to 0, then replace the text content with just the number. If the display value is not 0, we're going to add the display value plus the number to create a bigger number.
    calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
}

function addDecimal() {
    // If there is no decimal currently on display, add one (! = does not)
    if (!calculatorDisplay.textContent.includes('.')) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
}

// Add Events Listeners for numbers, operators and decimal buttons
inputBtns.forEach((inputBtn) => {
    if (inputBtn.classList.length === 0) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    } else if (inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    } else if (inputBtn.classList.contains('decimal')) {
        inputBtn.addEventListener('click', () => addDecimal());
    }
});

// Reset/clear display
function resetAll() {
    calculatorDisplay.textContent = '0';
}

// Clear button event Listener
clearBtn.addEventListener('click', resetAll);