export class LoginPage {
    private emailInput = 'input[name="email"]';
    private passwordInput = 'input[name="password"]';
    private submitButton = 'input[type="submit"]';
    private accountContent = '.account-content';
    private alertDanger = '.alert-danger';

    visit(): void {
        cy.visitPage('/index.php?route=account/login');
    }

    login(email: string, password: string): void {
        cy.typeText(this.emailInput, email);
        cy.typeText(this.passwordInput, password);
        cy.clickElement(this.submitButton);
    }

    verifyAccountDashboard(): void {
        cy.assertUrlContains('/index.php?route=account/account');
        cy.assertVisible(this.accountContent);
    }

    verifyErrorMessage(message: string): void {
        cy.assertContains(this.alertDanger, message);
    }
}
