# L4V3: Variables in JS

* *This activity demonstrates basic JavaScript syntax, including variables, data types, and conditionals. It calculates a fictional person’s age in 8 years and displays a message on the HTML page.

* *Date Created: 30 Sep 2025
* *Last Modification Date: 1 Oct 2025
* *Lab URL: 

* *Git Repository: 

## Authors

* Shruti Jakhar - shruti.jakhar@dal.ca 
 - Developer

## Built With

* HTML5
 - Markup for the page structure

* JavaScript
 - Logic to handle variables, conditionals, and DOM manipulation

## Sources Used

The following materials were used to complete this activity:

Recorded L4V3 lecture – covering basic syntax of JS, variables, data types, and conditionals.

L4V3 ZIP file – starting script file provided for the activity.

### File Name

js/script.js
* Lines 45 - 68

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

// Calculate age in 8 years and display on HTML
let ageIn8Years = personAge + 8;
document.getElementById("personMessage").textContent = 
  `${personName} is ${personAge} years old. In 8 years, they will be ${ageIn8Years}.`;

<!---How---> Implemented variables, conditionals, and DOM update to meet activity requirements.
<!---Why---> To practice JS basics and display dynamic content in HTML.
File Name

index.html
Lines 1 - 12

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Person Info Activity</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <h1>Person Info Activity</h1>
    <p id="personMessage"></p>

    <script src="js/script.js"></script>
</body>
</html>

<!---How---> HTML file provides structure for displaying the message.
<!---Why---> It links to the JS file and shows the age calculation dynamically.
Acknowledgments

Recorded L4V3 lecture

L4V3 ZIP file provided for the activity

Inspiration from class exercises and examples