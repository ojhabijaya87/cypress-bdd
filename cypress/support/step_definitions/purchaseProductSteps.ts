import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { PageManager } from '../utils/pageManager';

const loginPage = PageManager.getLoginPage();
const productPage = PageManager.getProductPage();
const cartPage = PageManager.getCartPage();
const checkoutPage = PageManager.getCheckoutPage();
const homePage = PageManager.getHomePage();
const billingDetailsPage = PageManager.getBillingDetailsPage();

When('I click on {string}', (menu: string) => {
    homePage.navigateToCategory(menu);
});

When('I search for a product {string}', (productName: string) => {
    productPage.searchAndSelectProduct(productName);
});

When('I add the product to the cart', () => {
    productPage.addToCart();
});

When(/^I select use a new address$/, () => {
    billingDetailsPage.selectNewAddress();
});

When('I proceed to checkout', () => {
    cartPage.proceedToCheckout();
});

When('I confirm the order', () => {
    checkoutPage.acceptTermsAndPlaceOrder();
});

Then('I should see the order confirmation page', () => {
    cy.contains('Your order has been placed!').should('be.visible');
});

When('I fill in the billing details', () => {
    cy.fixture('userDetails.json').then(({ billingDetails }) => {
        billingDetailsPage.fillBillingDetails(billingDetails);
    });
});

When('I accept the terms and conditions', () => {
    checkoutPage.acceptTermsAndPlaceOrder();
});

Given(/^I am logged in to the application$/, () => {
    cy.fixture('userDetails.json').then(({ email, password }) => {
        loginPage.visit();
        loginPage.login(email, password);
    });
});

When(/^I select a category "([^"]*)"$/, (category: string) => {
    homePage.navigateToCategory(category);
});
