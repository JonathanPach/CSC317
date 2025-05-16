// JavaScript source code
let calculation = "";
function updateCalculation(value) {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
        // Append a space before and after the operator for proper evaluation
        calculation += ` ${value} `;
    } else {
        calculation += value;
    }
    document.getElementById("calculation-display").innerText = calculation;
    console.log(calculation);
}

// for decimal numbers and the like
/*
function calculateResult(calculation) {
    try {
        calculation = eval(calculation);
        calculation = Math.round(calculation * 100) / 100;
        return calculation;
    } catch (error) {
        console.error("Error in calculation:", error);
        return null;
    }
}
*/

function calculateResult() {
    try {
        calculation = eval(calculation);
        calculation = Math.round(calculation * 100) / 100; // rounds to two decimal places
        document.getElementById("result-display").textContent = calculation;
        console.log(calculation);
    } catch (error) {
    document.getElementById("result-display").innerText = "Error";
    calculation = "";
    console.log(calculation);
    }
}

//clear display
function clearDisplay() {
    calculation = "";
    document.getElementById("calculation-display").innerText = "";
    document.getElementById("result-display").textContent = "0";
    console.log(calculation);
}

function deleteLastCharacter() {
    calculation = calculation.trim();
    calculation = calculation.slice(0, -1);
    document.getElementById("calculation-display").innerText = calculation || "0";
    document.getElementById("result-display").innerText = "0";
}


//addition function
function add(a, b) {
    return a + b;
}

//subtraction function
function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

//division function
function divide(a, b) {
    if (b == 0) {
        throw new Error("Division by zero us not allowed.");
    }
    return a / b;
}

function toggleSign() {
    if (calculation !== "" ) {
        if (calculation.startsWith("-")) {
            calculation = calculation.slice(1);
        } else {
            calculation = "-" + calculation;
        }
        document.getElementById("calculation-display").innerText = calculation; 
    }
}

function percentage() {
    if (calculation !== "") {
        try {
            let value = eval(calculation); // evaluate current expression
            value = value / 100;           // convert to percentage
            calculation = value.toString();
            document.getElementById("calculation-display").innerText = calculation;
        } catch (error) {
            document.getElementById("calculation-display").innerText = "Error";
            calculation = "";
        }
    }
}

document.addEventListener("keydown", function (event) {

    const key = event.key;

    //todo define keyMap 

    const keyMap = {
        '0': 'btn-0',
        '1': 'btn-1',
        '2': 'btn-2',
        '3': 'btn-3',
        '4': 'btn-4',
        '5': 'btn-5',
        '6': 'btn-6',
        '7': 'btn-7',
        '8': 'btn-8',
        '9': 'btn-9',
        '+': 'btn-plus',
        '-': 'btn-minus',
        '*': 'btn-multiply',
        '/': 'btn-divide',
        '.': 'btn-dot',
        '%': 'btn-percent',
        'Enter': 'btn-equal',
        '=': 'btn-equal', // sometimes = is used for enter
        'Escape': 'btn-clear',
        'Backspace': 'btn-delete'
    };

    if ("0123456789+-*/.%".includes(key)) {

        updateCalculation(key);

    } else if (key === "Enter" || key === "=") {

        event.preventDefault(); // this prevents the form from being submitted
        calculateResult();
        // todo

    } else if (key === "Escape") {

        // todo
        clearDisplay();

    } else if (key === "Backspace") {

        // todo
        deleteLastCharacter();

    } else if (key === "n") { // 'n' for negative

        toggleSign();

    } else if (key ) {

        percentage();
    }
    // Apply visual feedback

    const btnId = keyMap[key]; // keyMap needs to be defined above

    if (btnId) {

        flashButton(btnId); // flashButton needs to be defined. I gave you this already.

    }

});
