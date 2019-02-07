/**
 * Shopping list model.
 *
 * The list is modelled as an array.
 */
class Model {
    /** @param controller {!Controller} App controller*/
    constructor(controller) {
        console.log('Model initialised');

        /** @private {!ShoppingListItem[]} Items in the list */
        this.items_ = [];

        /** @private {!View} View for this model. */
        this.view_ = new View(this, controller);

        this.view_.update();
    }
    get items() {
        return this.items_.slice();
    }

    /**
     * Appends a new item to the list.
     *
     * @param item {!ShoppingListItem}
     */
    append(item) {
        this.items_.push(item);
        this.view_.update();
    }

    /**
     * Delete the i'th item from the list.
     *
     * @param i {number}
     */
    delete(i) {
        this.items_.splice(i, 1);
        this.view_.update();
    }

    /**
     * Clear the shopping list of all items.
     */
    //etape 1 pour le clearbutton
    clear(){ //pour le clearbutton on va le cree
        this.items_=[]; //peu importe la valeur [] dns items,,, on va chercher les items
        this.view_.update();//on va dire au views de faire les updates
        //le controlleur aura bespin d une method qui appelle celle-ci
    }
}

