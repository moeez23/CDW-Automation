import loginSelectors from "../Pages/LoginSelectors";


describe("Verify that Login Page is working correctly for Desktop Device", () => {
  beforeEach("navigate to the Login Page", () => {
    cy.login(Cypress.env("TestDealer").email, Cypress.env("TestDealer").password);
  });

it("Verify that Inventory is adding via Auto-populate", () => {
    cy.wait(5000);
    cy.url().then(($scrh) =>{
        cy.log($scrh);
        if (expect($scrh).to.include('/account/inventory')){                 
          assert.isOk('everything','Navigated to Inventory Dashboard');
        } else {
          throw new Error("test fails here");
        }
      })
      cy.get(loginSelectors.AssertionForAddInventoryBtn).contains("My Inventory");
      cy.get('#ID-my_inventory-filter_menu-add_inventory_button-desktop ').click();
      cy.wait(10000);
      cy.get('.common_active-tab').contains("Inventory Type & Basic Trailer or Truck Bed Information").should("be.visible");
      cy.get('.common_active-tab').contains("Trailer or Truck Bed Details").should("be.visible");
      cy.get('.common_active-tab').contains("Trailer or Truck Bed Attributes & Trailer or Truck Bed Status").should("be.visible");
      cy.get('.common_active-tab').contains("Admin Details").should("be.visible");
      cy.get('.common_active-tab').contains("Website Configuration").should("be.visible");
      cy.get('.common_active-tab').contains("Integration Configuration").should("be.visible");
      cy.get('.common_active-tab').contains("Images, PDFs, Hidden Files").should("be.visible");
      cy.get('#ID-inventory-basic_information-inventory_stock_field-desktop').type("12");
      cy.get('#ID-inventory-basic_information-inventory_manufacturer_dropdown-desktop').click();
      cy.get('.theme--light.v-autocomplete__content.v-menu__content').contains("4-Star Trailers").click();
      cy.get('#ID-inventory-basic_information-inventory_autopopulate_dropdown-desktop').click();
      cy.wait(500)
      cy.get('.v-menu__content').contains("Horse Trailer Deluxe - 2 Horse Model - 14' x 7' (2021)").click();
      cy.get('#ID-inventory-basic_information-inventory_autopopulate_go_button-desktop').click();
      cy.get(':nth-child(5) > [style="position: relative; display: block;"] > .v-input > .v-input__control > .v-input__slot').click();
      cy.get("div[role='listbox']").contains("New").click();
})
})