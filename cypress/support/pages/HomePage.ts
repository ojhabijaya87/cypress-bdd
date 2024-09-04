export class HomePage {
    private shopByCategoryLink =
        'div[data-id="217832"] a[aria-label="Shop by Category"]';

    navigateToCategory(category: string): void {
        cy.clickHiddenElement(this.shopByCategoryLink);
        cy.contains(category).click({ force: true }); 
    }
}
