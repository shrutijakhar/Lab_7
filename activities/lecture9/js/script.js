/**
 * File: script.js
 * Author: Shruti Jakhar
 * Banner ID - B00942565
 * Date: Fall 2025
 *
 * Description:
 * This script adds interactive functionality to the registration form.
 * Specifically, it listens for 'focus' and 'blur' events on the 
 * First Name, Last Name, and Email input fields. When a field gains
 * focus, its background color changes to highlight it. When it loses
 * focus (blur), the background color reverts to the default.
 **/

// Wait for the DOM to be fully loaded before executing
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM loaded"); // Debug: confirm that the script is running

    // Select the input fields by their IDs
    const inputFields = document.querySelectorAll('#firstName, #lastName, #email');

    // Loop through each input field and attach focus and blur event listeners
    inputFields.forEach((field) => {

        // When the field gains focus, add the 'active' class to highlight it
        field.addEventListener('focus', () => {
            console.log(field.id + " focused"); // Debug: focus event triggered
            field.classList.add('active');
        });

        // When the field loses focus, remove the 'active' class to revert styling
        field.addEventListener('blur', () => {
            console.log(field.id + " blurred"); // Debug: blur event triggered
            field.classList.remove('active');
        });
    });
});







