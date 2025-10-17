/* 
   File: script.js
   Author: Shruti Jakhar
   Banner ID - B00942565
   Date: 17/10/2025
   Purpose: JavaScript functionality for the Magical Shop 
            Inventory Management System (IMS)
   Description: Implements core IMS functions including:
                - addItem, removeItem, getItem
                - listItems, searchItems, calculateTotalValue
                - Bonus features: groupByCategory, findDuplicates
                Provides DOM interaction for user interface.
  
    */

   document.addEventListener("DOMContentLoaded", () => {


    // Array of objects representing initial items in the shop
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
  
    //  DOM References 
    const inventoryList = document.getElementById("inventoryList");
    const addBtn = document.getElementById("addBtn");
    const removeBtn = document.getElementById("removeBtn");
    const searchBtn = document.getElementById("searchBtn");
    const listBtn = document.getElementById("listBtn");
    const totalValueBtn = document.getElementById("totalValueBtn");
    const groupBtn = document.getElementById("groupBtn");
    const duplicatesBtn = document.getElementById("duplicatesBtn");
  
    const itemNameInput = document.getElementById("itemName");
    const itemTypeInput = document.getElementById("itemType");
    const itemPriceInput = document.getElementById("itemPrice");
    const itemQtyInput = document.getElementById("itemQuantity");
    const itemDescInput = document.getElementById("itemDescription");
    const removeNameInput = document.getElementById("removeName");
    const searchInput = document.getElementById("searchInput");
  
    // Total value display element (creates if not present)
    let totalDisplay = document.getElementById("totalValueDisplay");
    if (!totalDisplay) {
      totalDisplay = document.createElement("div");
      totalDisplay.id = "totalValueDisplay";
      totalDisplay.style.marginTop = "1rem";
      totalDisplay.style.fontWeight = "600";
      if (inventoryList && inventoryList.parentElement) inventoryList.parentElement.appendChild(totalDisplay);
    }
  

    // Normalize strings for case-insensitive comparisons
    function normalize(str) {
      return ("" + (str || "")).trim().toLowerCase();
    }
  
    // Convert input to number and validate
    function sanitizeNumber(x) {
      const n = Number(x);
      return Number.isFinite(n) ? n : NaN;
    }
  
    // Escape HTML to prevent code injection
    function escapeHtml(text) {
      if (typeof text !== "string") return text;
      return text.replace(/[&<>"']/g, (m) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' })[m]);
    }
  
    //  (iv) listItems 
    // Displays items in inventory or provided array
    function listItems(items = inventory) {
      if (!inventoryList) return;
      inventoryList.innerHTML = "";
  
      if (!items || items.length === 0) {
        const p = document.createElement("p");
        p.textContent = "No items to display.";
        inventoryList.appendChild(p);
        return;
      }
  
      items.forEach(item => {
        const card = document.createElement("div");
        card.className = "item";
        card.innerHTML = `
          <h3>${escapeHtml(item.name)}</h3>
          <p><strong>Type:</strong> ${escapeHtml(item.type)}</p>
          <p><strong>Price:</strong> $${Number(item.price).toFixed(2)}</p>
          <p><strong>Quantity:</strong> ${Number(item.quantity)}</p>
          <p>${escapeHtml(item.description)}</p>
        `;
        inventoryList.appendChild(card);
      });
    }
  
    // (i) addItem 
    function addItem(item) {
      if (!item || !item.name || !item.type) return false;
      const price = sanitizeNumber(item.price);
      const qty = sanitizeNumber(item.quantity);
      if (Number.isNaN(price) || Number.isNaN(qty) || qty < 0 || price < 0) return false;
  
      const existing = getItem(item.name);
      if (existing) {
        existing.quantity += Number(qty);
        existing.price = Number(price);
      } else {
        inventory.push({
          name: String(item.name).trim(),
          type: String(item.type).trim(),
          price: Number(price),
          quantity: Number(qty),
          description: String(item.description || "")
        });
      }
  
      listItems();
      calculateTotalValue();
      return true;
    }
  
    // Add item from form inputs
    function addItemFromForm() {
      const name = itemNameInput?.value?.trim();
      const type = itemTypeInput?.value?.trim();
      const price = sanitizeNumber(itemPriceInput?.value);
      const qty = sanitizeNumber(itemQtyInput?.value);
      const desc = itemDescInput?.value?.trim();
  
      if (!name) { alert("Please enter an item name."); return; }
      if (!type) { alert("Please enter item type."); return; }
      if (!Number.isFinite(price) || price < 0) { alert("Please enter a valid non-negative price."); return; }
      if (!Number.isFinite(qty) || qty <= 0) { alert("Please enter a valid quantity (> 0)."); return; }
  
      const ok = addItem({ name, type, price, quantity: qty, description: desc });
      if (ok) {
        [itemNameInput, itemTypeInput, itemPriceInput, itemQtyInput, itemDescInput].forEach(i => i.value = "");
      } else {
        alert("Failed to add item. Check inputs.");
      }
    }
  
    //  (ii) removeItem 
    function removeItem(itemName) {
      if (!itemName) return false;
      const idx = inventory.findIndex(it => normalize(it.name) === normalize(itemName));
      if (idx === -1) return false;
      inventory.splice(idx, 1);
      listItems();
      calculateTotalValue();
      return true;
    }
  
    //  (iii) getItem 
    function getItem(itemName) {
      if (!itemName) return null;
      return inventory.find(it => normalize(it.name) === normalize(itemName)) || null;
    }
  
    // (v) searchItems 
    function searchItems(query) {
      if (!query || !query.trim()) {
        listItems(inventory);
        return inventory;
      }
      const q = normalize(query);
      const results = inventory.filter(it =>
        normalize(it.name).includes(q) || normalize(it.type).includes(q)
      );
      listItems(results);
      return results;
    }
  
    //  (vi) calculateTotalValue 
    function calculateTotalValue() {
      const total = inventory.reduce((sum, it) => sum + (Number(it.price) * Number(it.quantity)), 0);
      if (totalDisplay) totalDisplay.textContent = `Total Inventory Value: $${total.toFixed(2)}`;
      else alert(`Total Inventory Value: $${total.toFixed(2)}`);
      return total;
    }
  
    // groupByCategory 
    function groupByCategory() {
      const grouped = inventory.reduce((acc, it) => {
        const key = it.type || "unknown";
        if (!acc[key]) acc[key] = [];
        acc[key].push(it);
        return acc;
      }, {});
  
      inventoryList.innerHTML = "";
      for (const [type, items] of Object.entries(grouped)) {
        const section = document.createElement("div");
        section.innerHTML = `<h3 style="text-transform:capitalize">${escapeHtml(type)}</h3>`;
        items.forEach(it => {
          const mini = document.createElement("div");
          mini.className = "item";
          mini.style.width = "100%";
          mini.innerHTML = `<strong>${escapeHtml(it.name)}</strong> — $${Number(it.price).toFixed(2)} (x${Number(it.quantity)})`;
          section.appendChild(mini);
        });
        inventoryList.appendChild(section);
      }
    }
  
    // findDuplicates 
    function findDuplicates() {
      const seen = new Set();
      const duplicates = new Set();
      inventory.forEach(it => {
        const n = normalize(it.name);
        if (seen.has(n)) duplicates.add(n);
        else seen.add(n);
      });
  
      if (duplicates.size === 0) { alert("No duplicates found."); return []; }
  
      const dupArr = Array.from(duplicates);
      listItems(inventory);
  
      // highlight duplicate cards
      const cards = inventoryList.querySelectorAll(".item");
      cards.forEach(card => {
        const title = card.querySelector("h3")?.textContent || "";
        if (dupArr.includes(normalize(title))) card.classList.add("highlight");
      });
      return dupArr;
    }
  
    //  Event Listeners
    if (addBtn) addBtn.addEventListener("click", addItemFromForm);
    if (removeBtn) removeBtn.addEventListener("click", () => {
      const name = removeNameInput?.value?.trim();
      if (!name) { alert("Type the name of the item to remove."); return; }
      const ok = removeItem(name);
      if (!ok) alert(`Item "${name}" not found.`); else removeNameInput.value = "";
    });
    if (searchBtn) searchBtn.addEventListener("click", () => {
      const q = searchInput?.value || "";
      if (!q.trim()) { alert("Type a search query."); return; }
      const results = searchItems(q);
      if (!results.length) alert(`No results for "${q}".`);
    });
    if (listBtn) listBtn.addEventListener("click", () => listItems());
    if (totalValueBtn) totalValueBtn.addEventListener("click", () => calculateTotalValue());
    if (groupBtn) groupBtn.addEventListener("click", () => groupByCategory());
    if (duplicatesBtn) duplicatesBtn.addEventListener("click", () => findDuplicates());
  
    // Initial Render 
    listItems();
    calculateTotalValue();
  
    // Expose functions to console for testing 
    window.addItem = addItem;
    window.removeItem = removeItem;
    window.getItem = getItem;
    window.listItems = listItems;
    window.searchItems = searchItems;
    window.calculateTotalValue = calculateTotalValue;
  
    console.log("IMS initialized. Functions available: addItem, removeItem, getItem, listItems, searchItems, calculateTotalValue");
  });
  