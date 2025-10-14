/**
 * File: script.js
 * Project: Fantastic Beasts Sanctuary
 * Author: Shruti Jakhar
 * Date Created: 14 Oct 2025
 * Last Modified: 14 Oct 2025
 *
 * Description:
 * This JavaScript file implements the interactive functionality for the Fantastic Beasts
 * Sanctuary web application. Users can add creatures with their details, including images
 * and notes, search creatures by name or type, and remove creatures from the sanctuary.
 * 
 * Features Implemented:
 *  - Add Creature (with image and notes)
 *  - Remove Creature
 *  - Search Creatures by Name or Type
 *  - Display creatures dynamically in a card format
 **/

// -----------------------------
// Grab DOM Elements
// -----------------------------
const addCreatureForm = document.getElementById("addCreatureForm");
const creatureSanctuary = document.getElementById("creatureSanctuary");

// Array to store creature objects
let creatures = [];

// -----------------------------
// Function: Display Creatures
// -----------------------------
// Displays the list of creatures in the sanctuary.
// Accepts an optional filtered array for search functionality.
function displayCreatures(filteredCreatures = creatures) {
    creatureSanctuary.innerHTML = "";

    if (filteredCreatures.length === 0) {
        creatureSanctuary.innerHTML = "<p>No creatures found.</p>";
        return;
    }

    filteredCreatures.forEach((creature, index) => {
        const creatureCard = document.createElement("div");
        creatureCard.classList.add("card", "mb-3");
        creatureCard.innerHTML = `
            <div class="card-body">
                <h4 class="card-title">${creature.name}</h4>
                <p><strong>Type:</strong> ${creature.type}</p>
                <p><strong>Habitat:</strong> ${creature.habitat}</p>
                ${
                    creature.image
                    ? `<img src="${creature.image}" alt="${creature.name}" class="img-fluid rounded mb-3" style="max-width:200px;">`
                    : ""
                }
                <p><strong>Notes:</strong> ${creature.notes ? creature.notes : "No notes yet."}</p>
                <button class="btn btn-danger btn-sm remove-btn" data-index="${index}">Remove</button>
            </div>
        `;
        creatureSanctuary.appendChild(creatureCard);
    });
}

// -----------------------------
// Event Listener: Add Creature
// -----------------------------
// Handles form submission to add a new creature to the sanctuary.
addCreatureForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("creatureName").value.trim();
    const type = document.getElementById("creatureType").value.trim();
    const habitat = document.getElementById("creatureHabitat").value.trim();
    const imageFile = document.getElementById("creatureImage").files[0];
    const notes = prompt("Add any notes about this creature (optional):", "");

    let imageURL = "";
    if (imageFile) {
        // Create a temporary URL for displaying the uploaded image
        imageURL = URL.createObjectURL(imageFile);
    }

    const creature = {
        name,
        type,
        habitat,
        image: imageURL,
        notes: notes || "",
    };

    creatures.push(creature);
    displayCreatures();
    addCreatureForm.reset();
});

// -----------------------------
// Event Listener: Remove Creature
// -----------------------------
// Handles the removal of a creature from the sanctuary.
creatureSanctuary.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-btn")) {
        const index = e.target.getAttribute("data-index");
        creatures.splice(index, 1);
        displayCreatures();
    }
});

// -----------------------------
// Search Feature
// -----------------------------
// Dynamically create search input and filter creatures by name or type.
const searchDiv = document.createElement("div");
searchDiv.classList.add("form-group", "mt-4");
searchDiv.innerHTML = `
    <label for="searchInput"><strong>Search Creatures by Name or Type:</strong></label>
    <input type="text" id="searchInput" class="form-control" placeholder="Search...">
`;
document.querySelector(".container").insertBefore(searchDiv, creatureSanctuary);

document.getElementById("searchInput").addEventListener("input", function (e) {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = creatures.filter(
        (c) =>
            c.name.toLowerCase().includes(searchTerm) ||
            c.type.toLowerCase().includes(searchTerm)
    );
    displayCreatures(filtered);
});
