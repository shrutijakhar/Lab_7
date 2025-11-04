# User Registration and Login System Lab 3

This lab implements a simple **user registration and login system** using JavaScript ES6 and JSON.  

* *Date Created*: 03 Nov 2025
* *Last Modification Date*: 03 Nov 2025
* *GIT URL - 
* *Timberlea URL - 

---


## Authors

* [Shruti Jakhar](mailto:shruti.jakhar@dal.ca) - Developer

---

## Built With

* [Bootstrap 5](https://getbootstrap.com/) - Frontend framework for responsive layout and styling
* [JavaScript ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Used for logic, validation, and interactivity
* [HTML5 & CSS3](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - Structure and styling of pages

---

## Logic and Reasoning

The system was designed with **efficiency, readability, and robustness** in mind:

1. **Maps for Users Database**  
   - A `Map` is used to store username-password pairs because it allows **efficient O(1) lookups** when checking if a username already exists.  
   - Maps maintain insertion order, which can be useful for debugging or displaying user lists.  

2. **Sets for Validation Errors**  
   - A `Set` is used to store validation error codes to **prevent duplicate error entries** and simplify the process of checking if there are any errors.  
   - It allows easy conversion to an array when logging errors or displaying messages.  

3. **Destructuring Assignment**  
   - Form data is destructured from `FormData` to make code **more readable and concise**:
     ```js
     const { email, username, password, confirmPassword } = Object.fromEntries(new FormData(e.target));
     ```
   - This reduces repetitive calls to `.get()` and clearly shows which fields are being used.  

4. **Arrow Functions**  
   - Arrow functions are used throughout to **simplify syntax** and reduce verbosity.  
   - They provide cleaner scoping for `this` (although not used in this lab, arrow functions are good practice for modern JS).  

5. **Error Handling with Try-Catch**  
   - The registration logic is wrapped in a `try-catch` block to **handle unexpected runtime errors** and provide safe failure without crashing the form.  

Overall, these choices make the code **modern, efficient, and robust**, fulfilling the lab’s ES6 and JSON-based requirements.

---

## Sources Used

### script.js

*Lines 1 - 103*

const users = new Map([
  ["userName1", "Password@123"],
  ["userName2", "Welcome@2025"],
  ["userName3", "HelloWorld@99"]
]);
..........
..........
..........
} catch (err) {
    console.error("Error during registration:", err.message);
  }
});
 



- <!---How---> Implemented using arrow functions and destructuring for cleaner ES6 syntax.
- <!---Why---> `Map` is used for `users` because it allows efficient lookup of usernames when checking for duplicates.  
- <!---How---> `Set` is used for `errors` to avoid duplicate error entries and simplify validation logic.

---

### index.html

*Lines 1 - 52*

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Register</title>
  ...........
  ...........
  ...........
  <script src="js/script.js"></script>
</body>
</html>



- <!---How---> Standard HTML form with required fields and IDs corresponding to JS validation logic.
- <!---Why---> Ensures seamless integration between JS validation and UI feedback.

---

## Artificial Intelligence Tools Used

* [ChatGPT](https://chat.openai.com/) - Assisted in code optimization and refactoring for `script.js` to fully use ES6 features like arrow functions, destructuring, Maps, Sets, and proper error handling.

### Prompt Used on ChatGPT

Review my JavaScript registration form code and refactor it to fully use ES6 features including arrow functions, destructuring assignment, Maps, Sets, and proper error handling. Ensure it meets lab requirements for validation and user feedback.



## Acknowledgments

* Dalhousie University CSCI 3172 Lab Instructions  
* Bootstrap Documentation  
* ChatGPT for ES6 refactoring suggestions