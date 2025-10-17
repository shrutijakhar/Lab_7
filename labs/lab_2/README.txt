# Lab 2 - Magical Shop Inventory Management System (OLLIVANDERS)

This project is an Inventory Management System for a magical shop, allowing users to add, remove, search, and group magical items like potions, wands, cloaks, and artifacts. It also calculates the total inventory value and highlights duplicate items. The project was built as part of a web development assignment.

* *Date Created*: 17 Oct 2025
* *Last Modification Date*: 17 Oct 2025
* *Git Link -
* *Timberlea Link - 

## Authors

* [Shruti Jakhar](mailto:shruti.jakhar@dal.ca) - Developer

## Built With

* [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) - Used for creating the structure of the website.
* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) - Used for styling the web pages including animations and layout.
* [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Used to implement all the inventory management functionalities.
* [Google Images](https://m.media-amazon.com/images/I/615123EN3SL.jpg) - Used to source the shop logo image.
* [Fonts: Poppins and Cinzel Decorative](https://fonts.google.com/) - Used for typography in headers and general text.

## Sources Used

### index.html

*Lines 1 - 85*

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Magical Shop Inventory</title>
  <link rel="stylesheet" href="css/style.css" />
</head>

...........
...........

  <script src="js/script.js" defer></script>
</body>
</html>

The HTML structure was implemented by me using standard HTML5 practices.

All input fields and buttons were added to allow interaction with JavaScript functions.

### css/style.css

Lines 1 - 186

/* General page styling, header, logo, cards, inputs, buttons, inventory grid, animations */

body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(120deg, #d8b4fe, #a5f3fc);
    margin: 0;
    padding: 0;
    color: #333;
}
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  background: linear-gradient(90deg, #4c1d95, #7e22ce, #6b21a8);
  color: white;
  padding: 1.8rem 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  border-bottom: 3px solid #c084fc;
}
.logo { ... }
.title { ... }
@keyframes glowPulse { ... }
.card { ... }
input { ... }
button { ... }
.inventory-grid { ... }
.item { ... }
footer { ... }


The CSS file was created by me to style the website, including animations, hover effects, and layout.

Fonts were imported from Google Fonts for enhanced styling.

### js/script.js

Lines 1 - 272

/* JavaScript for Inventory Management System */
document.addEventListener("DOMContentLoaded", () => {
  const inventory = [
    { name: "Healing Potion", type: "potion", price: 25, quantity: 10, description: "Restores 50 HP" },
    { name: "Mana Potion", type: "potion", price: 30, quantity: 8, description: "Restores 40 MP" },
    { name: "Fire Wand", type: "wand", price: 120, quantity: 4, description: "Casts fireball spell" },
    { name: "Ice Wand", type: "wand", price: 110, quantity: 3, description: "Casts ice spell" },
    { name: "Invisibility Cloak", type: "cloak", price: 250, quantity: 2, description: "Makes the wearer invisible" },
    { name: "Magic Ring", type: "ring", price: 75, quantity: 7, description: "Boosts magic power" },
    { name: "Lightning Sword", type: "weapon", price: 180, quantity: 5, description: "Strikes enemies with lightning" },
    { name: "Phoenix Feather", type: "relic", price: 300, quantity: 1, description: "Revives the bearer once upon defeat" },
    { name: "Crystal Orb", type: "artifact", price: 150, quantity: 3, description: "Reveals hidden secrets and visions" },
    { name: "Dragon Scale Shield", type: "armor", price: 200, quantity: 2, description: "Provides immense protection from fire" }
  ];

  // DOM references, helper functions, addItem, removeItem, getItem, listItems, searchItems, calculateTotalValue, groupByCategory, findDuplicates, event listeners
});

All inventory management functionalities were implemented by me using vanilla JavaScript.

Event listeners were added to buttons to interact with the DOM.

## Acknowledgments

Hat tip to Google Images for providing the shop logo.

Inspiration from magical-themed inventory examples online.