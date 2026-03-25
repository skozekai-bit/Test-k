// 1. ADD YOUR DATA HERE
const menuItems = [
    {
        name: "Spicy Tuna",
        price: "¥850",
        image: "tuna.jpg" // Put your filename here!
    },
    {
        name: "Dragon Roll",
        price: "¥1200",
        image: "dragon.jpg" // Put your filename here!
    },
    {
        name: "Salmon Nigiri",
        price: "¥600",
        image: "salmon.jpg" // Put your filename here!
    }
];

// 2. THE PROGRAM LOGIC
const grid = document.getElementById('food-grid');

function loadMenu() {
    menuItems.forEach(item => {
        const card = `
            <div class="item-card">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-info">
                    <h3>${item.name}</h3>
                    <p class="price-tag">${item.price}</p>
                </div>
            </div>
        `;
        grid.innerHTML += card;
    });
}

// Run the function when the page loads
window.onload = loadMenu;

