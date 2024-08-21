// ...

// Get all "Buy Now" buttons
const buyButtons = document.querySelectorAll('.buy-btn');

// Add event listener to each "Buy Now" button
buyButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // Get the product name from the parent element
    const productName = event.target.parentNode.querySelector('h3').textContent;

    // Check if the product is already in the cart
    const existingProduct = cartData.find((item) => item.name === productName);

    if (existingProduct) {
      // If the product is already in the cart, increment its quantity
      existingProduct.quantity++;
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      cartData.push({ id: cartData.length + 1, name: productName, quantity: 1 });
    }

    // Update the cart
    updateCart();
  });
});