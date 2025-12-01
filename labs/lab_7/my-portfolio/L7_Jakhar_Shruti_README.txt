# Lab 7 – React Portfolio Enhancement (Data Persistence, Contact Form, Validation & UI Improvements)

This lab is part of a three-phase project (Lab 5, Lab 6, Lab 7) focused on developing a fully functional React-based personal portfolio site.  
In Lab 7, the objective is to add **data persistence using LocalStorage**, implement a **validated contact form**, and enhance the **UI for accessibility and mobile responsiveness**.

* *Date Created*: 25 Nov 2025  
* *Last Modification Date*: 30 Nov 2025  
* *Git URLL*: 
* *Netlify Link - 


## Authors
* **Shruti Jakhar** (shruti.jakhar@dal.ca) – Developer  


## Built With
* [React](https://react.dev/) – Main UI Framework  
* [Vite](https://vitejs.dev/) – Development & Build Tool  
* [Node.js](https://nodejs.org/) – Backend (Express Server)  
* [Express](https://expressjs.com/) – API Endpoints for Contact Form  
* [LocalStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) – For saving draft form data  
* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) – Structuring  
* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) – Styling & Responsiveness  
* [Bootstrap](https://getbootstrap.com/) – (If used) Layout & Mobile UI Components  


---

## Sources Used

### Contact.jsx

*Lines 1 – 200*

```javascript
useEffect(() => {
  const raw = localStorage.getItem(DRAFT_KEY);
  if (raw) setForm(prev => ({ ...prev, ...JSON.parse(raw) }));
}, []);
This code was adapted from MDN Web Docs – LocalStorage usage
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage


const item = localStorage.getItem("key");
localStorage.setItem("key", "value");

How: Implemented MDN’s example to restore saved form data on component mount.

Why: MDN provided the most reliable explanation and usage demonstration for LocalStorage.

How Modified: Added JSON parsing, structured object storage, and integrated draft auto-restore into React state.


Artificial Intelligence Tools Used
ChatGPT (OpenAI) – Used to debug validation logic and generate explanations.

Prompt Used on ChatGPT

write validation functions for name, email, subject, and message in react contact form

function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}
function validName(name) {
  return /^[\p{L}\s'\-]+$/u.test(name.trim());
}
File Name
Contact.jsx – Lines 25 – 55

function validName(name) {
  return /^[\p{L}\s'\-]+$/u.test(name.trim()) && name.trim().length > 0;
}
How: Integrated the AI-generated regex directly into the validation function.

Why: The solution was efficient and met project requirements exactly.

How Modified: Added character length constraints and error messages.


Acknowledgments
MDN Web Docs – LocalStorage, HTML Input Validation

Express.js Documentation – Error Handling Reference

W3C – Form validation patterns

ChatGPT – Helped refine validation logic, improve error handling, and format README