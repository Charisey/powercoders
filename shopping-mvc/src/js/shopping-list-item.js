/**
 * Represent an item in teh shopping list.
 */
class ShoppingListItem{
    /**
     *
     * @param name {string} Name
     * @param quantity {string} Quantity
     */
    constructor (name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
    /**
     * Creates and returns an 'li' element for inclusion in the shopping list.
     *
     * @returns {HTMLElement} li element
     */
    toListItem () {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.innerText = this.name;
        li.appendChild(span);

        if (this.quantity !== '') {
            li.appendChild(document.createTextNode(' '));
            const qSpan = document.createElement('span');
            qSpan.innerText = '(' + this.quantity + ')';
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
}