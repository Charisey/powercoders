/** HTML View for ShoppingList. */
class View {
    /**
     * @param model{!Model} App data model
     * @param controller {!Controller} App controller
     */
    constructor(model, controller) {
        console.log('View ready!');

        /** @private {!Model} App data model */
        this.model_ = model;

        /** @private {!Controller} App controller */
        this.controller_ = controller;
    }
}