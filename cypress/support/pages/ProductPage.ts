export class ProductPage {
    private addToCartButton = 'button[title="Add to Cart"]';
    searchAndSelectProduct(productName: string): void {
        cy.contains(productName).trigger('mouseover', { force: true }); // Custom command not necessary for unique selector
    }

    addToCart(): void {
        cy.clickHiddenElement(this.addToCartButton);
    }
}
