export class BillingDetailsPage {
    private firstNameInput = 'input[name="firstname"]';
    private lastNameInput = 'input[name="lastname"]';
    private address1Input = 'input[name="address_1"]';
    private cityInput = 'input[name="city"]';
    private postcodeInput = 'input[name="postcode"]';
    private countryDropdown = 'select[name="country_id"]';
    private regionDropdown = 'select[name="zone_id"]';
    private continueButton = '#button-save';
    private newAddress = '[for="input-payment-address-new"]';
    private termsAndConditions = 'label[for="input-agree"]';
    
    selectNewAddress() {
        cy.clickElement(this.newAddress);
    }
    fillBillingDetails(details: Record<string, string>): void {
        cy.typeText(this.firstNameInput, details.firstName);
        cy.typeText(this.lastNameInput, details.lastName);
        cy.typeText(this.address1Input, details.address1);
        cy.typeText(this.cityInput, details.city);
        cy.typeText(this.postcodeInput, details.postcode);
        cy.selectDropdown(this.countryDropdown, details.country);
        cy.selectDropdown(this.regionDropdown, details.region);
        cy.clickElement(this.termsAndConditions);
        cy.clickElement(this.continueButton);
    }
}
