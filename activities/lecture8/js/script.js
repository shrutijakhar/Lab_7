/* 
  File: script.js
  Author: Shruti Jakhar
  Banner ID - B00942565
  Date - 22/10/2025
  Description: Handles basic arithmetic operations (add, subtract, multiply, divide)
  on two user-input numbers and displays the results in alerts.
*/

// Function to get numbers from the form
function getNumbers() {
    var num1 = parseFloat(document.getElementById("number1").value);
    var num2 = parseFloat(document.getElementById("number2").value);
    return [num1, num2];
}

// Existing addition function
function addition() {
    var numbers = getNumbers();
    var result = numbers[0] + numbers[1];
    alert("The result of addition is: " + result);
}

// New subtraction function
function subtract() {
    var numbers = getNumbers();
    var result = numbers[0] - numbers[1];
    alert("The result of subtraction is: " + result);
}

// New multiplication function
function multiply() {
    var numbers = getNumbers();
    var result = numbers[0] * numbers[1];
    alert("The result of multiplication is: " + result);
}

// New division function
function divide() {
    var numbers = getNumbers();
    if (numbers[1] === 0) {
        alert("Error: Division by zero is not allowed.");
    } else {
        var result = numbers[0] / numbers[1];
        alert("The result of division is: " + result);
    }
}
