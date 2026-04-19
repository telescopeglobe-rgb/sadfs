// Find all category buttons and menu item cards on the page.
const buttons = document.querySelectorAll('.category-btn');
const items = document.querySelectorAll('.menu-item');

// Show only the menu items that match the selected category.
function filterMenu(category) {
  items.forEach(item => {
    const itemCategory = item.dataset.category;
    // If the item's category matches, show it; otherwise hide it.
    item.style.display = itemCategory === category ? 'block' : 'none';
  });
}

// Add a click handler to each category button.
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove the active highlight from every button.
    buttons.forEach(btn => btn.classList.remove('active'));
    // Highlight the clicked button.
    button.classList.add('active');
    // Filter the menu based on the clicked button's category.
    filterMenu(button.dataset.category);
  });
});

// When the page loads, show the items for the button that is already active.
const activeButton = document.querySelector('.category-btn.active');
if (activeButton) {
  filterMenu(activeButton.dataset.category);
}
