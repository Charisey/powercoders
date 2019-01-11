function createNewListItem(itemName) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = itemName;
  li.appendChild(span);

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  li.appendChild(deleteButton);

  deleteButton.addEventListener('click', function (event) {
    li.remove();
    document.getElementById("item").focus();
    console.log('Delete button clicked: ' + itemName);
  });

  document.querySelector('ul').appendChild(li);

  return li;
}
//ce qui est en rapport avec le click
document.addEventListener('DOMContentLoaded', function (event) {
  const inputBox = document.getElementById('item');
  const shoppingList =  document.querySelector('ul');
  const addItemButton = document.querySelector('button');

  document.querySelector('button').addEventListener('click', function (event) {
    if (inputBox.value.trim() !== '') {
      shoppingList.appendChild(createNewListItem(inputBox.value.trim()));
      inputBox.value = '';
    }
    inputBox.focus();

  });
// ce qui est en rapport avec la touche Entrer
  inputBox.addEventListener('keyup', function (event) {
    if (inputBox.value.trim() !== ''){  // true // Ce qui va permettre au moment ou on press enter de n executer rien ds la liste ( trim supprime les espace avant et après la saisie)
      addItemButton.disabled = false;
      if (event.key === 'Enter'){ // Ce qui permet d'executer l'item saisit dans la liste
        shoppingList.appendChild(createNewListItem(inputBox.value.trim()));
        inputBox.value = ''; // ce qui va permettre d'effacer ce qu il y a ds imputBox après une saisie
      }
    }

    if (inputBox.value.trim() === '') {
      addItemButton.disabled = true;
    }
  });

  inputBox.focus();
});

