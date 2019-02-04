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

        shoppingList.appendChild(item.toListItem());
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

        shoppingList.appendChild(item.toListItem());
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