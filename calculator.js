const display = document.getElementById('display');
const buttons = document.querySelectorAll('.number, .operator, .clear, .equal');

let currentInput = '';
let operator = '';
let result = '';

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            clear();
        } else if (value === '=') {
            calculate();
        } else if (isOperator(value)) {
            setOperator(value);
        } else {
            appendToInput(value);
        }
    });
});

function clear() {
    currentInput = '';
    operator = '';
    result = '';
    display.value = '';
}

function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}

function setOperator(value) {
    if (currentInput !== '') {
        operator = value;
        display.value = currentInput + ' ' + operator;
        currentInput = '';
    }
}

function appendToInput(value) {
    currentInput += value;
    display.value += value;
}

function calculate() {
    if (currentInput !== '' && operator !== '') {
        result = eval(display.value);
        display.value = result;
        currentInput = result.toString();
        operator = '';
    }
}
