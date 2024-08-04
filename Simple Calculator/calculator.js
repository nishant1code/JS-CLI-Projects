// SIMPLE CALCULATOR
// The purpose of the application is to implement the knowledge of input/output, functions, and switch cases.

// **** Global Variables and there use ****

// inputs -> inputs is used to call the userInput function in switch case to get the result by giving the variable as argument while calling the relevant functions for conducting basic operations.
let inputsForResult;

// **** Functions and there use ****

// ** User Input Functions **

// For all operations except square and cube
function userInput() {
    let arrayOfInputs = [];
    let inputNumberByUser;
    let checkInput;
    do {
        inputNumberByUser = window.prompt("Enter the numbers to for operations:");
        if (inputNumberByUser != '=') {
            inputNumberByUser = Number(inputNumberByUser);
            arrayOfInputs.push(inputNumberByUser);
            checkInput = true;
        }
        else {
            checkInput = false;
        }
    } while (checkInput == true);

    return arrayOfInputs;
}

// For Square and Cube
function inputsForSqAndCu() {
    let input = Number(window.prompt("Enter the number :"));
    return input;
}

// ** Operational Functions **

// Addition Function
let addition = 0;
function additionOfGivenNumbers(inputArrElements) {
    for (let i = 0; i < inputArrElements.length; i++) {
        addition += inputArrElements[i];
    }
    return addition;
}

// Subtraction Function
let subtraction = 0;
function subtractionOfGivenNumbers(inputArrElements) {
    for (let i = 0; i < inputArrElements.length; i++) {
        if (i == 0) {
            subtraction += inputArrElements[i];
        }
        else {
            subtraction -= inputArrElements[i];
        }
    }
    return subtraction;
}

// Multiplication Function
let multiplication = 1;
function multiplicationOfGivenNumbers(inputArrElements) {
    for (let i = 0; i < inputArrElements.length; i++) {
        multiplication *= inputArrElements[i];
    }
    return multiplication;
}

// Division Function
let division = 0;
function divisionOfGivenNumbers(inputArrElements) {
    for (let i = 0; i < inputArrElements.length; i++) {
        if (i == 0) {
            division += inputArrElements[i];
        }
        else {
            division /= inputArrElements[i];
        }
    }
    return division;
}

// Square Function
let square = 0;
function squareOfNumber(inputOfsq) {
    square = inputOfsq ** 2;
    return square;
}

// Cube Function
let cube = 0;
function cubeOfNumber(inputOfCu) {
    cube = inputOfCu ** 3;
    return cube;
}


// **** PROGRAM FLOW ****

// Project Title
let calculatorName = "SIMPLE CALCULATOR";
document.getElementById("title").innerHTML = calculatorName;

// Menu
window.alert(`Welcome to the simple calculator:-
              
              Type any one operations for using to application:
              1) + for addition
              2) - for subtraction
              3) x for multiplication
              4) / for division
              5) sq for squareing
              6) cb for cubing
              
              OR 
              
              Type 'exit' to leave the application`);

// User Choice for what kind of operation he wants to conduct
let usersChoiceForOperation = window.prompt("Enter your choice :");

// Switch Case for condting the operations

switch (usersChoiceForOperation) {
    case '+':
        inputsForResult = userInput();
        document.getElementById("show").innerHTML = `Addition Result = ${additionOfGivenNumbers(inputsForResult)}`;
        console.log("smooth run");
        break;

    case '-':
        inputsForResult = userInput();
        document.getElementById("show").innerHTML = `Subtraction Result = ${subtractionOfGivenNumbers(inputsForResult)}`;
        console.log("smooth run");
        break;

    case 'x':
        inputsForResult = userInput();
        document.getElementById("show").innerHTML = `Multiplication Result = ${multiplicationOfGivenNumbers(inputsForResult)}`;
        console.log("smooth run");
        break;

    case '/':
        inputsForResult = userInput();
        document.getElementById("show").innerHTML = `Division Result = ${divisionOfGivenNumbers(inputsForResult)}`;
        console.log("smooth run");
        break;

    case 'sq':
        inputsForResult = inputsForSqAndCu();
        document.getElementById("show").innerHTML = `Square Result = ${squareOfNumber(inputsForResult)}`;
        console.log("smooth run");
        break;

    case 'cb':
        inputsForResult = inputsForSqAndCu();
        document.getElementById("show").innerHTML = `Cube Result = ${squareOfNumber(inputsForResult)}`;
        console.log("smooth run");
        break;

    default:
        document.getElementById("show").innerHTML = "Exit from the application";
        console.log("smooth run");
        break;
}

// Ending message 
document.getElementById("end").innerHTML = "Thankyou! for using the application";

