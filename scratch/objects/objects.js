function Person (first, last, interests) {
    this.name = {
        first: first,
        last: last
    };
    this.interests = interests;
    this.greet = function() {
        console.log(`Hello ${this.name.first}`);
    };
}

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

let shop = new ShoppingListItem('eggs', 'banana'); //create new like creating an empty array (object)