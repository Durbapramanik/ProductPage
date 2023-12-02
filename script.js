document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.addToCartBtn');
  const viewCartBtn = document.getElementById('viewCartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartCount = document.getElementById('cartCount');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartItems = document.getElementById('cartItems');
  let cartItemCount = 0;

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      cartItemCount++;
      cartCount.textContent = cartItemCount;
      const productName = button.parentElement.querySelector('h2').textContent;
      const item = document.createElement('div');
      item.textContent = productName;
      cartItems.appendChild(item);
    });
  });

  viewCartBtn.addEventListener('click', () => {
    cartOverlay.style.display = 'flex';
  });

  closeCartBtn.addEventListener('click', () => {
    cartOverlay.style.display = 'none';
  });
});
