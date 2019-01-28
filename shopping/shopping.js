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

        const listItem = document.querySelectorAll('li');
        const clearListButton = document.querySelector('#clear');
            clearListButton.disabled = listItem.length === 0;
    });

    document.querySelector('ul').appendChild(li);
    return li;
}
//ce qui est en rapport avec le click
document.addEventListener('DOMContentLoaded', function (event) {
    const inputBox = document.getElementById('item');
    const shoppingList =  document.querySelector('ul');
    const addItemButton = document.querySelector('#buttonAdd'); //s'il y a une id
    const clearListButton = document.querySelector('#clear');

    addItemButton.disabled = true;
    clearListButton.disabled = true;
    inputBox.className = 'empty';

    addItemButton.addEventListener('click', function (event) {
        const trimmedValue = inputBox.value.trim();

        shoppingList.appendChild(createNewListItem(trimmedValue));
        inputBox.value = '';
        addItemButton.disabled = true;
        clearListButton.disabled = true;
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

        clearListButton.addEventListener('click',  function (event) {
           const ListItems = document.querySelectorAll('li');
           ListItems.forEach(function(element){
           element.remove();
           });
           clearListButton.disabled = true;
        });

        shoppingList.appendChild(createNewListItem(trimmedValue));
        inputBox.value = '';
        addItemButton.disabled = true;
        clearListButton.disabled = false;
        inputBox.className = 'empty';
    });
        inputBox.focus();
});

