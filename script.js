const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

function sendNumberValue(number) {
// Replace current display value if first value is entered
    if (awaitingNextValue) {
        calculatorDisplay.textContent = number;
        awaitingNextValue = false;
    } else {
        // If current display value is 0, replace it, if not, add number
        const displayValue = calculatorDisplay.textContent;
        // Ternary operator - if the display value is equal to 0, then replace the text content with just the number. If the display value is not 0, we're going to add the display value plus the number to create a bigger number.
        calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
    }
}

function addDecimal() {
    // If operator pressed, don't add decimal
    if (awaitingNextValue) return;
    // If there is no decimal currently on display, add one (! = does not)
    if (!calculatorDisplay.textContent.includes('.')) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
}

function useOperator(operator) {
    const currentValue = Number(calculatorDisplay.textContent);
    // Assign first value if no value
    if (!firstValue) {
        firstValue = currentValue;
    } else {
        console.log('currentValue', currentValue);
    }
    // Ready for next value, store the operator
    awaitingNextValue = true;
    operatorValue = operator;
    console.log('firstValue', firstValue);
    console.log('operator', operatorValue);
}


// Add Events Listeners for numbers, operators and decimal buttons
inputBtns.forEach((inputBtn) => {
    if (inputBtn.classList.length === 0) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    } else if (inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
    } else if (inputBtn.classList.contains('decimal')) {
        inputBtn.addEventListener('click', () => addDecimal());
    }
});

// Reset/clear all values, display
function resetAll() {
    firstValue = 0;
    operatorValue = '';
    awaitingNextValue = false;
    calculatorDisplay.textContent = '0';
}

// Clear button event Listener
clearBtn.addEventListener('click', resetAll);