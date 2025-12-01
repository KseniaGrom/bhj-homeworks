const cart = document.querySelector('.cart__products');

document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('product__quantity-control')) {
        const valueEl = e.target.closest('.product').querySelector('.product__quantity-value');
        let value = parseInt(valueEl.textContent);
        
        if (e.target.classList.contains('product__quantity-control_dec') && value > 1) {
            valueEl.textContent = value - 1;
        } else if (e.target.classList.contains('product__quantity-control_inc')) {
            valueEl.textContent = value + 1;
        }
    }
    
    if (e.target.classList.contains('product__add')) {
        const product = e.target.closest('.product');
        const id = product.dataset.id;
        const img = product.querySelector('.product__image').src;
        const qty = parseInt(product.querySelector('.product__quantity-value').textContent);
        
        const item = cart.querySelector(`[data-id="${id}"]`);
        
        if (item) {
            const count = item.querySelector('.cart__product-count');
            count.textContent = parseInt(count.textContent) + qty;
        } else {
            const newItem = document.createElement('div');
            newItem.className = 'cart__product';
            newItem.dataset.id = id;
            newItem.innerHTML = `
                <img class="cart__product-image" src="${img}">
                <div class="cart__product-count">${qty}</div>
            `;
            cart.appendChild(newItem);
        }
    }
});