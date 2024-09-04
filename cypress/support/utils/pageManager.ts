// Import page classes and handle singleton instances
import { BillingDetailsPage } from "../pages/BillingDetailsPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";

// PageManager class to manage single instances of each page object
export class PageManager {
    private static loginPage: LoginPage;
    private static productPage: ProductPage;
    private static cartPage: CartPage;
    private static checkoutPage: CheckoutPage;
    private static homePage: HomePage;
    private static billingDetailsPage: BillingDetailsPage;

    // Singleton getter for LoginPage
    static getLoginPage() {
        return this.loginPage ?? (this.loginPage = new LoginPage());
    }

    // Singleton getter for ProductPage
    static getProductPage() {
        return this.productPage ?? (this.productPage = new ProductPage());
    }

    // Singleton getter for CartPage
    static getCartPage() {
        return this.cartPage ?? (this.cartPage = new CartPage());
    }

    // Singleton getter for CheckoutPage
    static getCheckoutPage() {
        return this.checkoutPage ?? (this.checkoutPage = new CheckoutPage());
    }

    // Singleton getter for HomePage
    static getHomePage() {
        return this.homePage ?? (this.homePage = new HomePage());
    }

    // Singleton getter for BillingDetailsPage
    static getBillingDetailsPage() {
        return this.billingDetailsPage ?? (this.billingDetailsPage = new BillingDetailsPage());
    }
}
