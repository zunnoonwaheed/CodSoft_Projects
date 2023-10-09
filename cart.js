let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });

    // Update the total price
    totalPrice += price;

    // Update the cart list and total price
    updateCartUI();
}

function updateCartUI() {
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total-price');

    // Clear the existing cart list
    cartList.innerHTML = '';

    // Count the quantity of each item
    const itemQuantities = {};
    cart.forEach((item) => {
        if (item.name in itemQuantities) {
            itemQuantities[item.name]++;
        } else {
            itemQuantities[item.name] = 1;
        }
    });

    // Add items to the cart list
    for (const itemName in itemQuantities) {
        const itemQuantity = itemQuantities[itemName];
        const listItem = document.createElement('li');
        listItem.textContent = `${itemName} (Quantity: ${itemQuantity}): $${(itemQuantity * getPrice(itemName)).toFixed(2)}`;
        cartList.appendChild(listItem);
    }

    // Update the total price
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

function getPrice(productName) {
    // Add your logic here to get the price based on the product name
    // For simplicity, I'm using a static price lookup.
    const priceLookup = {
        "Water Bottles": 99.99,
        "2 in 1 Torch": 149.99,
        "HandWash":40,
        "Facewash":80,
        "Tv Remote":100,
        "Concealers":200,

        // Add more products here
    };

    return priceLookup[productName] || 0; // Default to 0 if the product name is not found
}

// Attach click event listeners to the "Add to Cart" buttons
const buttons = document.querySelectorAll('button[data-product]');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-product');
        addToCart(productName, getPrice(productName));
    });
});
