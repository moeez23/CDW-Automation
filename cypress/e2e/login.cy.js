import loginSelectors from "../Pages/LoginSelectors";


describe("Verify that Login Page is working correctly for Desktop Device", () => {
  beforeEach("navigate to the Login Page", () => {
    cy.navigateToLoginPage(1400, 1000);
  });
  it("Verify that login with Super Admin credentials is working", () => {
    cy.get(loginSelectors.emailInput).type(Cypress.env("superAdmin").email);
    cy.get(loginSelectors.passwordInput).type(Cypress.env("superAdmin").password);
    cy.get(".v-card__actions > .font-md").click(); //Clicking to Login button
    cy.wait(10000);
    cy.url().then(($scrh) =>{
      cy.log($scrh)
      if (expect($scrh).to.include('/account/inventory')){                 
        assert.isOk('everything','Navigated to Inventory Dashboard')
      } else {
        throw new Error("test fails here")
      }
    })
    cy.get(loginSelectors.AssertionForAddInventoryBtn).contains("My Inventory")
});
});
