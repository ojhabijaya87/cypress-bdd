export class CheckoutPage {
    private confirmOrderButton = '#button-confirm';

    acceptTermsAndPlaceOrder(): void {
        cy.clickElement(this.confirmOrderButton);
    }
}
