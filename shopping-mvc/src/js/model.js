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
    }
}

