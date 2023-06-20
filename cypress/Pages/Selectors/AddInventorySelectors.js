class AddInventorySelectors{
    //Selectors
    AddInventory_BTN = "#ID-my_inventory-filter_menu-add_inventory_button-desktop"
    StockNo_Field = "#ID-inventory-basic_information-inventory_stock_field-desktop"
    Manufacturer_Field = "#ID-inventory-basic_information-inventory_manufacturer_dropdown-desktop"
    Manufacturer_DropDown = ".theme--light.v-autocomplete__content.v-menu__content"
    AutoPopulate_Field = "#ID-inventory-basic_information-inventory_autopopulate_dropdown-desktop"
    AutoPopulate_DropDown = ".v-menu__content"
    AutoPopulate_GoBTN = "#ID-inventory-basic_information-inventory_autopopulate_go_button-desktop"
    Price_Field = "#ID-inventory-inventory_detail-inventory_price_field-desktop"
    Feature_Section = ".w-10 > .py-5"
    Condition_Field = ':nth-child(5) > [style="position: relative; display: block;"] > .v-input > .v-input__control > .v-input__slot'
    Condition_DropDown = ".v-select-list"
    Save_Button = "#ID-inventory-tab_menu-save_button-desktop"
    Head_Tab = ".common_active-tab"

    //Functions
    ClickOnAddInventoryBTN = () => {
        cy.get(this.AddInventory_BTN).click()
    }
    VerifyTab1is_present = () => {
        cy.get(this.Head_Tab).contains("Inventory Type & Basic Trailer or Truck Bed Information").should("be.visible");
    }
    VerifyTab2is_present = () => {
        cy.get(this.Head_Tab).contains("Trailer or Truck Bed Details").should("be.visible");
    }
    VerifyTab3is_present = () => {
        cy.get(this.Head_Tab).contains("Trailer or Truck Bed Attributes & Trailer or Truck Bed Status").should("be.visible");
    }
    VerifyTab4is_present = () => {
        cy.get(this.Head_Tab).contains("Admin Details").should("be.visible");
    }
    VerifyTab5is_present = () => {
        cy.get(this.Head_Tab).contains("Website Configuration").should("be.visible");
    }
    VerifyTab6is_present = () => {
        cy.get(this.Head_Tab).contains("Integration Configuration").should("be.visible");
    }
    VerifyTab7is_present = () => {
        cy.get(this.Head_Tab).contains("Images, PDFs, Hidden Files").should("be.visible");
    }
    EnterStockNumber = () => {
        cy.get(this.StockNo_Field).type("12")
    }
    ClickOnManufacturerField  = () => {
        cy.get(this.Manufacturer_Field).click()
    }
    ChooseManufaturerFromDropDown  = () => {
        cy.get(this.Manufacturer_DropDown).contains("4-Star Trailers").click();
    }
    ClickOnAutoPopulateField  = () => {
        cy.get(this.AutoPopulate_Field).click();
    }
    ChooseAutoPopulateInventory  = () => {
        cy.get(this.AutoPopulate_DropDown).contains("Horse Trailer Deluxe - 2 Horse Model - 14' x 7' (2021)").click();
    }
    ClickOnGoButton  = () => {
        cy.get(this.AutoPopulate_GoBTN).click();
    }
    EnterPrice  = () => {
        cy.get(this.Price_Field).type("100000")
    }
    ScrollToFeatureSection  = () => {
        cy.get(this.Feature_Section).click();
    }
    ClickOnConditionField  = () => {
        cy.get(this.Condition_Field).click();
    }
    SelectConditionForInventory  = () => {
        cy.get(this.Condition_DropDown).contains("New").click();
    }
    ClickOnSaveInventoryBtn  = () => {
        cy.get(this.Save_Button).click();
    }
}

export const AddInventorySelectorClass = new AddInventorySelectors();