import loginSelectors from "../Pages/LoginSelectors";

Cypress.Commands.add("navigateToLoginPage", (width, height) => {
    cy.viewport(width, height);
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit(Cypress.env("host"), { responseTimeout: 120000 });
  });
  Cypress.Commands.add("login", (email, password) => {
    cy.visit(Cypress.env("host"));
    cy.get(loginSelectors.emailInput).type(email);
    cy.get(loginSelectors.passwordInput).type(password);
    cy.get(".v-card__actions > .font-md").click();
  });
