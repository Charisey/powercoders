function createNewListItem(itemName) {
  let li = document.createElement('li');
  let span = document.createElement('span');
  span.innerText = itemName;
  li.appendChild(span);

  let deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  li.appendChild(deleteButton);

  deleteButton.addEventListener('click', function (event) {
    li.remove();
    console.log('Delete button clicked: ' + itemName);
  });

  document.querySelector('ul').appendChild(li);

  return li;
}

document.addEventListener('DOMContentLoaded', function (event) {
  document.querySelector('button').addEventListener('click', function (event) {
    document.querySelector('ul').appendChild(createNewListItem(document.getElementById('item').value));
  });

  document.querySelector('input').addEventListener('keyup', function (event) {
    if(event.key === 'Enter'){
      document.querySelector('ul').appendChild(createNewListItem(document.getElementById('item').value));
    }
  });

});