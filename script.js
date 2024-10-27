const productName = document.getElementById('product');
const productPrice = document.getElementById('price');
const productsContainer = document.querySelector('.dynamic-div');
const addingInfo = document.getElementById('adding-info');
const cartContainer = document.querySelector('.dynamic-div-2');
const total = document.getElementById('totalPrice');

function addProduct() {
    const product = productName.value;
    const price = productPrice.value;
    if (product === "" || price === "" || +price < 0) {
        alert("Add some product with price");
        return;
    }
    const minusBtn = document.createElement('button');
    minusBtn.innerText = '-';
    const quantity = '1';
    const addBtn = document.createElement('button');
    addBtn.innerText = '+';
    const btns = document.createElement('div');
    btns.append(minusBtn, quantity, addBtn);

    let productDiv = document.createElement('div');
    productDiv.append(product);
    productDiv.append(price);
    productDiv.append(btns);
    productsContainer.appendChild(productDiv);

    addingInfo.style.display = 'none';

    let cartDiv = document.createElement('div');
    let amountDiv = document.createElement('div');
    amountDiv.append(quantity, 'x', price);
    cartDiv.append(product, amountDiv);

    cartContainer.appendChild(cartDiv);

    total.innerText = +total.innerText + +price;

    minusBtn.addEventListener('click', () => {
        updateChanges('-', quantity);
    })

    productName.value = "";
    productPrice.value = "";
}

function updateChanges(sign, ele) {
    if (sign === '-') {
        ele.innerText = +ele.innerText - +ele.innerText;
        total.innerText = ele;
    }
}

document.getElementById('add-product').addEventListener('click', addProduct);