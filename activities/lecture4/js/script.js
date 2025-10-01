/**
 * Activity - Lecture 4 
 * Course: CSCI 3172
 * Author: Shruti Jakhar (shruti.jakhar@dal.ca)
 * 
 * Description:
 * This script demonstrates basic JavaScript concepts including variables,
 * data types, conditionals, type coercion, template literals, and binding.
 * 
 **/


let exp = 0.36;

let greeting =
  "This is the first line of our greeting /n and this is the second line of our greeting!";

let className = "csci 3172";

let newMessage = greeting + " " + className;

// Template Literal
let templateLiteral = `half of 100 is ${100 / 2}`;

console.log(typeof 3.4);

console.log(3 > 2);

// Ternary Operator
console.log(true ? 1 : 2);

// Type Coercion
console.log("5" - 1);

console.log("five" * 1);

console.log("null" || "mosquera");

// Binding
var name = "Gabriella"; //function scope or global scope
let a = 3;
const salutations = "Hello";

let num1 = 1,
  num2 = 2;

// Hoisting Issues with VAR
var greeter = "Hey hi";
var times = 4;

if (times > 3) {
  var greeter = "say Hello instead";
}

console.log(greeter);

//LET and CONST
let greeting2 = "say Hi";
let times2 = 4;

if (times2 > 3) {
  let greeting2 = "say Hello instead";
  console.log(greeting2);
}

console.log(greeting2);


// Variables for the fictional person
let personName = "Ana";
let personAge = 30;
let isStudent = true; 

// Conditional to check enrollment status
if (isStudent) {
    console.log(`${personName} is a student.`);
} else {
    console.log(`${personName} is not a student.`);
}

// Calculate age in 8 years
let ageIn8Years = personAge + 8;

// Message to display on the HTML page
let message = `${personName} is ${personAge} years old. In 8 years, they will be ${ageIn8Years}.`;

// Display the message in the HTML
document.getElementById("personMessage").textContent = message;

// Log message to console
console.log(message);

