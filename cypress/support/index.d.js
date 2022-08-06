declare namespace Cypress {
    interface Chainable {
        /**
         * *@example cy.login()
         */
        login(): void

        /**
         * @exeample cy.token()
         */
        token(): void
    }
}