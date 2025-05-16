// focus the cursor on the email-address input
const emailField = document.getElementById("email-address-input");
emailField.focus({
  preventScroll: true,
});


  document.addEventListener('DOMContentLoaded', () => {
  const cartButtons = document.querySelectorAll('.add-to-cart');

  cartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();

      const product = {
        id: button.dataset.id,
        name: button.dataset.name,
        price: button.dataset.price,
        img: button.dataset.img
      };

      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      // Optional: avoid duplicates (based on id)
      if (!cart.some(item => item.id === product.id)) {
        cart.push(product);
      }

      localStorage.setItem('cart', JSON.stringify(cart));

      // Redirect to cart page (optional)
      window.location.href = 'cart.html';
    });
  });
});
