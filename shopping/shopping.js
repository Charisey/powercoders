/**
 * Represent ab item in the shopping list.
 *
 * @param {string} name - Name of the item
 * @param {string} quantity - Quantity of the item
 * @constructor Return the object with name and quantity properties
 */
function ShoppingListItem(name, quantity) {
    this.name = name;
    this.quantity = quantity;
}

/**
 * Creates and returns an 'li' element for inclusion in the shopping list.
 *
 * @param {ShoppingListItem} item Item to append to the list
 * @returns {HTMLElement} li element
 */
function createNewListItem(item) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = item.name;
    li.appendChild(span);

    if (item.quantity !== '') {
        li.appendChild(document.createTextNode(' '));
        const qSpan = document.createElement('span');
        qSpan.innerText = '(' + item.quantity + ')';
        li.appendChild(qSpan);
    }

    const deleteButton = document.createElement('i');
    deleteButton.className = 'fas fa-trash-alt';
    li.appendChild(deleteButton);

    deleteButton.addEventListener('click', function () {
        li.remove();
        document.getElementById("item").focus();

        const listItem = document.querySelectorAll('li');
        const clearListButton = document.querySelector('#clear');
        clearListButton.disabled = listItem.length === 0;
    });

    document.querySelector('ul').appendChild(li);
    return li;
}

function domContentLoaded() {
    const inputBox = document.getElementById('item');
    const shoppingList = document.querySelector('ul');
    const addItemButton = document.querySelector('#buttonAdd'); //s'il y a une id
    const clearListButton = document.querySelector('#clear');
    const quantityBox = document.getElementById('quantity');

    addItemButton.disabled = true;
    clearListButton.disabled = true;
    inputBox.className = 'empty';

    addItemButton.addEventListener('click', function () {
        const trimmedValue = inputBox.value.trim();

        const item = new ShoppingListItem(trimmedValue, quantityBox.value.trim());

        shoppingList.appendChild(createNewListItem(item));
        inputBox.value = '';
        addItemButton.disabled = true;
        clearListButton.disabled = true;
        quantityBox.value = '';
        inputBox.className = 'empty';
        inputBox.focus();
    });

    inputBox.addEventListener('keyup', onKeyup);

    quantityBox.addEventListener('keyup', onKeyup);

    clearListButton.addEventListener('click', function () {
        const items = document.querySelectorAll('li');
        items.forEach(function (element) {
            element.remove();
        });
        inputBox.focus();
        clearListButton.disabled = true;
    });
    inputBox.focus();

    function onKeyup(event) {
        const trimmedValue = inputBox.value.trim();
        addItemButton.disabled = trimmedValue === '';

        if (trimmedValue === '') {
            inputBox.className = 'empty';
            return;
        }

        if (event.key !== 'Enter') {
            inputBox.className = '';
            return;
        }

        const item = new ShoppingListItem(trimmedValue, quantityBox.value.trim());

        shoppingList.appendChild(createNewListItem(item));
        inputBox.value = '';
        addItemButton.disabled = true;
        clearListButton.disabled = false;
        quantityBox.value = '';
        inputBox.className = 'empty';
    }

}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
        domContentLoaded();
    });
} else {
    domContentLoaded();
}

