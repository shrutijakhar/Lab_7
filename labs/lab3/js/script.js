/* 
  Filename: script.js
  Author: Shruti Jakhar
  Banner ID - B00942565
  Description:
    This JavaScript file implements the logic for the user registration form.
    It uses modern ES6 features such as arrow functions, Maps, Sets, and 
    destructuring to validate user input, handle form submissions, and 
    manage an in-memory JSON-based user database.
*/

// In-memory JSON "database"
const users = new Map([
  ["userName1", "Password@123"],
  ["userName2", "Welcome@2025"],
  ["userName3", "HelloWorld@99"]
]);

// Helper functions

const isValidEmail = email =>
  /^[^\s@]+@[^\s@]+\.[a-z]{2,8}$/i.test(email);

const isValidUsername = username =>
  /^[A-Za-z][A-Za-z0-9_]*$/.test(username);

const isValidPassword = password =>
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/.test(password);

// Form submission 

document.getElementById("registerForm")?.addEventListener("submit", e => {
  e.preventDefault();

  try {
    const formData = new FormData(e.target);
    const email = formData.get("email").trim();
    const username = formData.get("username").trim();
    const password = formData.get("password").trim();
    const confirmPassword = formData.get("confirmPassword").trim();

    const errors = new Set();

    document.querySelectorAll(".error").forEach(el => el.textContent = "");
    document.querySelectorAll("input").forEach(el => el.style.border = "1px solid #ccc");
    document.getElementById("formMessage").textContent = "";

    //  Validation 

    if (!email) {
      errors.add("email");
      document.getElementById("emailError").textContent = "⚠️ Email is required.";
      document.getElementById("email").style.border = "2px solid red";
    } else if (!isValidEmail(email)) {
      errors.add("email");
      document.getElementById("emailError").textContent = "⚠️ Invalid email format.";
      document.getElementById("email").style.border = "2px solid red";
    }

    // Username
    if (!username) {
      errors.add("username");
      document.getElementById("usernameError").textContent = "⚠️ Username is required.";
      document.getElementById("username").style.border = "2px solid red";
    } else if (!isValidUsername(username)) {
      errors.add("username");
      document.getElementById("usernameError").textContent =
        "⚠️ Username must start with a letter and cannot contain spaces or special characters.";
      document.getElementById("username").style.border = "2px solid red";
    } else if (users.has(username)) {
      errors.add("usernameExists");
      document.getElementById("usernameError").textContent = "⚠️ Username already exists.";
      document.getElementById("username").style.border = "2px solid red";
    }

    // Password
    if (!password) {
      errors.add("password");
      document.getElementById("passwordError").textContent = "⚠️ Password is required.";
      document.getElementById("password").style.border = "2px solid red";
    } else if (!isValidPassword(password)) {
      errors.add("password");
      document.getElementById("passwordError").textContent =
        "⚠️ Password must be at least 12 chars, with 1 upper, 1 lower, 1 number, 1 special.";
      document.getElementById("password").style.border = "2px solid red";
    }

    // Confirm password
    if (!confirmPassword) {
      errors.add("confirmPassword");
      document.getElementById("confirmPasswordError").textContent = "⚠️ Confirm password is required.";
      document.getElementById("confirmPassword").style.border = "2px solid red";
    } else if (password !== confirmPassword) {
      errors.add("confirmPassword");
      document.getElementById("confirmPasswordError").textContent = "⚠️ Passwords do not match.";
      document.getElementById("confirmPassword").style.border = "2px solid red";
    }

    // Final check 

    if (errors.size > 0) {
      document.getElementById("formMessage").textContent = "⚠️ Please fix the highlighted issues.";
      document.getElementById("formMessage").style.color = "red";
      console.error("Validation errors:", Array.from(errors));
      return;
    }

    // Register user 
    users.set(username, password);
    document.getElementById("formMessage").textContent = "✅ Successfully registered!";
    document.getElementById("formMessage").style.color = "green";
    console.log(`User registered: ${username}`);
    console.log("Current users:", Array.from(users.entries()));

    // Reset form
    e.target.reset();

  } catch (err) {
    console.error("Error during registration:", err.message);
  }
});
