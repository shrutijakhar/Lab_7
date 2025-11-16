# Lab 5 – React Personal Portfolio Website

This lab focuses on creating a React-based personal portfolio website using HTML5, CSS, JavaScript, React Router, and a styling framework such as Bootstrap. Lab 5 is the first deliverable in a three-part sequence (Lab 5, Lab 6, and Lab 7). In this deliverable, the focus is on designing a clean, modern UI and implementing essential front-end components. No backend is required at this stage, but the project is structured to make future API integration easier.

* *Date Created*: 16 Nov 2025  
* *Last Modification Date*: 14 Nov 2025  
* *Git Link*: https://git.cs.dal.ca/jakhar/csci-3172/-/tree/main/labs/lab_5?ref_type=heads
* *Netlify link*: https://magical-salamander-33ee85.netlify.app/ 


## Authors

* [Shruti Jakhar](shruti.jakhar@dal.ca) – Developer


## Built With

* [React](https://react.dev/) – Front-end framework used to build the application  
* [Vite](https://vitejs.dev/) – Build tool and development server  
* [React Router](https://reactrouter.com/) – Used for client-side routing  
* [Bootstrap 5](https://getbootstrap.com/) – Used for layout, styling, theme customization  
* [Jest](https://jestjs.io/) – Unit testing framework  
* [React Testing Library](https://testing-library.com/) – Used for testing React components  
* [Node.js](https://nodejs.org/) – JavaScript runtime used for development and testing  



## Unit Testing Summary

The purpose of a Unit Test is to verify individual components of an application by **isolating the unit being tested** from external dependencies such as APIs, databases, or other components. The goal is to confirm that each part of the application behaves exactly as expected and helps identify where errors occur.

For Lab 5, the following components were tested:

- **Header Component** – ensuring navigation links render correctly  
- **Home Component** – verifying introduction text loads  
- **About Page** – validating that skills, education, and experience sections appear  
- **404 Not Found Page** – confirming that unknown paths redirect correctly  
- **Routing Structure** – checking interaction between client routes  

Tests were performed using Jest and React Testing Library by rendering each component in isolation.  
All tests worked as expected after minor adjustments (e.g., adding test IDs or updating query matchers).




## Artificial Intelligence Tools Used

### ChatGPT (OpenAI)

- Clarify React Testing Library syntax and suggest corrections for failing tests
- Generate example test structures
- Debug rendering issues in components
- Assist in CSS styling for creating neon-themed layouts, hover effects, and responsive design adjustments
- Improve component formatting and Bootstrap integration

All AI-generated suggestions were reviewed, rewritten, and integrated manually into the project.

### Prompt Used on ChatGPT (Testing)
write my test cases for my lab-5 react application using react testing library and jest

File Name

src/tests/Header.test.jsx

```javascript
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../src/components/Header";

describe("Header", () => {
  test("renders site name and nav links", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText(/Shruti Jakhar/i)).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
  });
});



How — Added to /src/tests/ and wrapped the Header component in MemoryRouter to properly render navigation links that use React Router.

Why — Ensures that the site name and all navigation links appear correctly and are accessible in the Header component.

How (Modified) — Adjusted import paths and added MemoryRouter to allow routing-related elements to render; updated text matchers to match the actual labels used in the final Header component.




### Prompt Used on ChatGPT (CSS Styling)
suggest neon-themed CSS styling for my React portfolio including hover effects and responsive design

```css
body {
    background: #f5f7fa;
    font-family: 'Inter', sans-serif;
    color: #0f172a;
    margin: 0;
    padding: 0;
}
...
.footer-modern {
    text-align: center;
    padding: 1.8rem 0;
    margin-top: 4rem;
    background: #0a0f1f;
    color: #e2e8f0;
    font-size: 1rem;
    letter-spacing: 0.4px;
}



How — Used to generate initial styling for neon highlights, hover transitions, and responsive layouts.

Why — To enhance the visual appeal and modern look of the portfolio.

How (Modified) — Code was reviewed, simplified, and integrated with the Bootstrap framework and existing component structure.


## Acknowledgments

* React documentation  
* Bootstrap documentation  
* React Testing Library documentation  
* ChatGPT for guidance on code structure and testing