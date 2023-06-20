import loginSelectors from "../Pages/LoginSelectors";
import { AddingInventoryLogic } from "../Pages/Logic/AddInventory"

describe("Verify that Login Page is working correctly for Desktop Device", () => {
  beforeEach("navigate to the Login Page", () => {
    cy.login(Cypress.env("TestDealer").email, Cypress.env("TestDealer").password);
  });

it("Verify that Inventory is adding via Auto-populate", () => {
    cy.wait(10000);
    cy.url().then(($scrh) =>{
        cy.log($scrh);
        if (expect($scrh).to.include('/account/inventory')){                 
          assert.isOk('everything','Navigated to Inventory Dashboard');
        } else {
          throw new Error("test fails here");
        }
      })
      AddingInventoryLogic.addInventoryViaAutoPopulate();
})
})