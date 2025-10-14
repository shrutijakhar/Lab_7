# Activity - L7 Objects Activity


* *Date Created*: 14 10 2025
* *Last Modification Date*: 14 10 2025
* *Git Link - https://git.cs.dal.ca/jakhar/csci-3172/-/tree/main/activities/lecture7?ref_type=heads 
* *Timberlea link - https://web.cs.dal.ca/~jakhar/csci3172/activities/lecture7/
 

## Authors

* [Shruti Jakhar](shruti.jakhar@dal.ca) - (Developer)



## Built With

* HTML5 - Structure of the webpage

* CSS3 - Styling the webpage

* Bootstrap 4 - Responsive layout and UI components

* JavaScript - Dynamic functionality for adding/removing/searching creatures



## Sources Used
HTML (index.html)

Lines 1 - 60

The index.html file was provided in the L7 Example file as a reference. It includes the form structure and container layout for the Fantastic Beasts Sanctuary application.


How → Used as the base HTML structure for the project.

Why → Provided the form and page layout to start development.

How → No changes were made to index.html; all functionality was added via script.js.


JavaScript functionality (script.js)

Lines 1 - 100

const addCreatureForm = document.getElementById("addCreatureForm");
const creatureSanctuary = document.getElementById("creatureSanctuary");

let creatures = [];

function displayCreatures(filteredCreatures = creatures) {
  creatureSanctuary.innerHTML = "";

  if (filteredCreatures.length === 0) {
    creatureSanctuary.innerHTML = "<p>No creatures found.</p>";
    return;
  .........
  .........
  .........
document.getElementById("searchInput").addEventListener("input", function (e) {
  const searchTerm = e.target.value.toLowerCase();
  const filtered = creatures.filter(
    (c) => c.name.toLowerCase().includes(searchTerm) || c.type.toLowerCase().includes(searchTerm)
  );
  displayCreatures(filtered);
});


How → Implemented entirely by the developer to provide full functionality: adding creatures, previewing images, adding notes, removing entries, and searching.

Why → To meet the assignment requirements and extend the example HTML.

How → Features were implemented using JavaScript arrays, DOM manipulation, event listeners, and URL.createObjectURL() for image previews.



## Artificial Intelligence Tools Used
* No AI used



## Acknowledgments

* L7 Example file provided during live lecture for HTML/CSS reference
* JavaScript tutorials and documentation on DOM manipulation
* Bootstrap documentation for styling
