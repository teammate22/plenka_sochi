// Добавление товаров в корзину
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', event => {
      const product = event.target.closest('.product');
      const productName = product.querySelector('h2').innerText;
      const productPrice = product.querySelector('p').innerText;

      const cartItems = document.getElementById('cart-items');
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `<p>${productName} - ${productPrice}</p>`;
      cartItems.appendChild(cartItem);
  });
});

// Оформление заказа
document.getElementById('checkout').addEventListener('click', () => {
  const formHtml = `
      <form>
          <label>ФИО: <input type="text" name="name" required></label><br>
          <label>Номер телефона: <input type="tel" name="phone" required></label><br>
          <label>Адрес: <input type="text" name="address" required></label><br>
          <button type="submit">Отправить</button>
      </form>
  `;
  document.querySelector('main').innerHTML = formHtml;
});
