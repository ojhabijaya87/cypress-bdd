export class CartPage {
    private cartButton = '.cart-icon';
    private checkoutButton = 'div[id="entry_217851"]';

    proceedToCheckout(): void {
        cy.clickHiddenElement(this.cartButton);
        cy.clickElement(this.checkoutButton);
    }
}
