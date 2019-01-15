function createNewListItem(itemName) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = itemName;
    li.appendChild(span);

    const deleteButton = document.createElement('i');
    deleteButton.className = 'fas fa-trash-alt';
    li.appendChild(deleteButton);

    deleteButton.addEventListener('click', function (event) {
        li.remove();
        document.getElementById("item").focus();
    });

    document.querySelector('ul').appendChild(li);

    return li;
}
//ce qui est en rapport avec le click
document.addEventListener('DOMContentLoaded', function (event) {
    const inputBox = document.getElementById('item');
    const shoppingList =  document.querySelector('ul');
    const addItemButton = document.querySelector('#buttonAdd');
    addItemButton.disabled = true;
    inputBox.className = 'empty';

    addItemButton.addEventListener('click', function (event) {
        const trimmedValue = inputBox.value.trim();

        shoppingList.appendChild(createNewListItem(trimmedValue));
        inputBox.value = '';
        addItemButton.disabled = true;
        inputBox.className = 'empty';
        inputBox.focus();
    });

    inputBox.addEventListener('keyup', function (event) {
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


        shoppingList.appendChild(createNewListItem(trimmedValue));
        inputBox.value = '';
        addItemButton.disabled = true;
        inputBox.className = 'empty';
        inputBox.focus();
    });
});

