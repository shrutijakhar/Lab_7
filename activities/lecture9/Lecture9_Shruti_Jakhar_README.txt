# Lecture9 Event Listeners Activity

** This activity extends the functionality of the registration form created during the live lecture. The objective was to add interactive features using JavaScript by detecting focus and blur events on the First Name, Last Name, and Email input fields and updating the background color accordingly.

* *Date Created*: 22 Oct 2025
* *Last Modification Date*: 22 Oct 2025
* *Git Link - https://git.cs.dal.ca/jakhar/csci-3172/-/tree/main/activities/lecture9?ref_type=heads 
* *Timberlea Link - https://web.cs.dal.ca/~jakhar/csci3172/activities/lecture9/


## Authors

* [Shruti Jakhar](shruti.jakhar@dal.ca) - Developer


## Built With

* [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) - Markup for the registration form
* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) - Styling for form and active input highlighting
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Used for event listeners and dynamic input field styling
* [Bootstrap 4](https://getbootstrap.com/docs/4.3/getting-started/introduction/) - Used for responsive form layout and styling


## Sources Used

### script.js

*Lines 1 - 28*

```javascript
/********************************************************************
 
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
The code above was created by adapting the example registration form code from the L9 lecture notes, adding focus and blur event listeners using a loop to dynamically highlight input fields.

Artificial Intelligence Tools Used
No AI tools or plugins were used in completing this activity. 
Acknowledgments
Hat tip to the course instructor and lecture examples for the initial registration form template

Inspiration from Bootstrap 4 documentation for styling input fields and layout