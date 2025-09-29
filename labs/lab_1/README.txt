# Lab 1: Personal Webpage

This is my individual Lab 1 submission for CSCI 3172, where I created a simple, responsive personal webpage about myself. The webpage follows HTML5 and CSS3 W3C guidelines and includes a profile image, styling, and basic UX/UI principles.

* *Date Created*: 29 Sep 2025
* *Last Modification Date*: 29 Sep 2025
* *Lab URL (GitLab)*: [https://git.cs.dal.ca/jakhar/csci-3172/-/tree/main/labs/lab_1](https://git.cs.dal.ca/jakhar/csci-3172/-/tree/main/labs/lab_1)
* *Lab URL (Timberlea)*: [https://web.cs.dal.ca/~jakhar/csci3172/lab1](https://web.cs.dal.ca/~jakhar/csci3172/lab1)

## Authors

* [Shruti Jakhar](mailto:shrutijakhar@dal.ca) - Individual Lab Submission

## Built With

* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - Structure of the webpage
* [VS Code](https://code.visualstudio.com/) - Code editor
* [GitLab](https://git.cs.dal.ca/) - Repository for version control and submission

## Sources Used

### index.html

*Lines 25 - 29*

```html
<section class="about-me">
  <h1>About Me</h1>
  <img src="images/profile.png" alt="My Profile Picture" class="profile-pic">
  <p>Hello! My name is Shruti, and this is my first lab webpage for CSCI 3172.</p>
</section>
<!---How---> The code structure was based on standard HTML5 template.
<!---Why---> Used to create a section for “About Me” content.
<!---How---> Modified by adding image tag and paragraph text relevant to myself.
style.css
Lines 18 - 33

css
Copy code
.profile-pic {
  width: 200px;
  height: auto;
  border-radius: 50%;
  display: block;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 3px solid #4CAF50;
}

@media (max-width: 600px) {
  .profile-pic {
    width: 120px;
  }
}
<!---How---> CSS styling applied to make the profile picture circular, centered, and responsive.
<!---Why---> Enhances user experience and design aesthetics.
<!---How---> Modified width and added shadow for visual appeal.
Artificial Intelligence Tools Used
No AI tools were used for the creation of this lab.

Acknowledgments
Hat tip to HTML & CSS documentation on MDN for syntax reference.