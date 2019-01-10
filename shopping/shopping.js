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
    let textBox = document.getElementById('item');
    console.log(textBox.value);
    let li = createNewListItem(textBox.value);
    let ul = document.querySelector('ul');
    ul.appendChild(li);
  });
});