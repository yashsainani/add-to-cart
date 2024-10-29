const productName = document.getElementById('product');
const productPrice = document.getElementById('price');
const productsContainer = document.querySelector('.dynamic-div');
const addingInfo = document.getElementById('adding-info');
const cartContainer = document.querySelector('.dynamic-div-2');
const total = document.getElementById('totalPrice');

function addProduct() {
    const product = document.createElement('span');
    product.innerText = productName.value;
    const price = document.createElement('span');
    price.innerText = productPrice.value;
    if (product.innerText === "" || price.innerText === "" || +price.innerText < 0) {
        alert("Add some product with price");
        document.getElementById('add-product').animate([
            {transform : 'scale(1)'},
            {transform : 'scale(0)'},
            {transform : 'scale(1)'}
        ], {
            duration : 200,
            easing : 'ease-in-out',
            iterations : 2
        });
        return;
    }
    const minusBtn = document.createElement('button');
    minusBtn.innerText = '-';
    const quantity = document.createElement('span');
    quantity.innerText = 1;
    const addBtn = document.createElement('button');
    addBtn.innerText = '+';
    const btns = document.createElement('div');
    btns.append(minusBtn, quantity.innerText, addBtn);
    btns.classList.add('btns');

    let productDiv = document.createElement('div');
    productDiv.appendChild(product);
    productDiv.appendChild(price);
    productDiv.appendChild(btns);
    productDiv.className = 'product-div';
    productsContainer.appendChild(productDiv);

    addingInfo.style.display = 'none';

    let cartDiv = document.createElement('div');
    let amountDiv = document.createElement('div');
    amountDiv.append(quantity.cloneNode(true), ' x ', price.cloneNode(true));
    amountDiv.classList.add('amount-div');
    cartDiv.append(product.cloneNode(true), amountDiv);
    cartDiv.classList.add('cart-div');

    cartContainer.appendChild(cartDiv);

    total.innerText = +total.innerText + +price.innerText;

    minusBtn.addEventListener('click', () => {
        total.innerText = +total.innerText - +price.innerText;
        quantity.innerText -= 1;
        if (+quantity.innerText === 0) {
            productDiv.remove();
            cartDiv.remove();
        }
        else {
            btns.innerHTML = "";
            btns.append(minusBtn, quantity.innerText, addBtn);
            cartDiv.innerHTML = "";
            amountDiv.innerHTML = "";
            amountDiv.append(quantity.cloneNode(true), ' x ', price.cloneNode(true));
            amountDiv.classList.add('amount-div');
            cartDiv.append(product.cloneNode(true), amountDiv);
            cartDiv.classList.add('cart-div');
        }

        if (productsContainer.children.length === 0) {
            addingInfo.style.display = 'block';
            addingInfo.innerHTML = "You have vacated the cart let's add some new products to cart!!!"
        }
    });
    
    addBtn.addEventListener('click', () => {
        total.innerText = +total.innerText + +price.innerText;
        quantity.innerText = +quantity.innerText + 1;
        btns.innerHTML = "";
        btns.append(minusBtn, quantity.innerText, addBtn);
        cartDiv.innerHTML = "";
        amountDiv.innerHTML = "";
        amountDiv.append(quantity.cloneNode(true), ' x ', price.cloneNode(true));
        amountDiv.classList.add('amount-div');
        cartDiv.append(product.cloneNode(true), amountDiv);
        cartDiv.classList.add('cart-div');
    });

    productName.value = "";
    productPrice.value = "";
}

window.addEventListener('load', () => {
    document.getElementsByTagName('header')[0].classList.add('onload');
    document.querySelector('.products-container').classList.add('onload');
    document.querySelector('.cart-container').classList.add('onload');
});

document.getElementById('add-product').addEventListener('click', addProduct);