# Lecture 8 Calculator Activity 

This project is a simple webpage that allows users to perform basic arithmetic operations — addition, subtraction, multiplication, and division — on two numbers entered in a form. The result is displayed using alert boxes.

* *Date Created*: 22 Oct 2025  
* *Last Modification Date*: 22 Oct 2025  
* *Git link -  https://git.cs.dal.ca/jakhar/csci-3172/-/tree/main/activities/lecture8?ref_type=heads 
* *Timberlea link - https://web.cs.dal.ca/~jakhar/csci3172/activities/lecture8/ 


## Authors

* [Shruti Jakhar](shruti.jakhar@dal.ca) - (Developer)


## Built With

* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - Used to create the webpage structure  
* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) - Used for page and button styling  
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Used to perform arithmetic operations  


## Sources Used

### script.js

*Lines 1 - 48*

function getNumbers() {
var num1 = parseFloat(document.getElementById("number1").value);
var num2 = parseFloat(document.getElementById("number2").value);
return [num1, num2];
}

function addition() {
var numbers = getNumbers();
var result = numbers[0] + numbers[1];
alert("The result of addition is: " + result);
}

function subtract() {
var numbers = getNumbers();
var result = numbers[0] - numbers[1];
alert("The result of subtraction is: " + result);
}

function multiply() {
var numbers = getNumbers();
var result = numbers[0] * numbers[1];
alert("The result of multiplication is: " + result);
}

function divide() {
var numbers = getNumbers();
if (numbers[1] === 0) {
alert("Error: Division by zero is not allowed.");
} else {
var result = numbers[0] / numbers[1];
alert("The result of division is: " + result);
}
}


- **How:** The example functions from the activity were customized to handle user input through form fields.  
- **Why:** The goal was to allow users to perform basic mathematical operations directly through button clicks.  
- **How Modified:** Additional validation for division by zero and alert-based result display were added for better user interaction.  



## Acknowledgments

* Lecture notes and L8 Activity files provided during class  
* Dalhousie University course materials for HTML, CSS, and JavaScript concepts  
* Instructor examples discussed in the live lecture  