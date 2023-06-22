import { AddInventorySelectorClass } from "../Selectors/AddInventorySelectors"

class AddInventory{
    addInventoryViaAutoPopulate(){
        AddInventorySelectorClass.ClickOnAddInventoryBTN();
        AddInventorySelectorClass.VerifyTab1is_present();
        AddInventorySelectorClass.VerifyTab2is_present();
        AddInventorySelectorClass.VerifyTab3is_present();
        AddInventorySelectorClass.VerifyTab4is_present();
        AddInventorySelectorClass.VerifyTab5is_present();
        AddInventorySelectorClass.VerifyTab6is_present();
        AddInventorySelectorClass.VerifyTab7is_present();
        AddInventorySelectorClass.EnterStockNumber();
        AddInventorySelectorClass.ClickOnManufacturerField();
        AddInventorySelectorClass.ChooseManufaturerFromDropDown();
        AddInventorySelectorClass.ClickOnAutoPopulateField();
        AddInventorySelectorClass.ChooseAutoPopulateInventory();
        AddInventorySelectorClass.ClickOnGoButton();
        AddInventorySelectorClass.EnterPrice();
        cy.wait(1000)
        AddInventorySelectorClass.ScrollToFeatureSection();
        AddInventorySelectorClass.ClickOnConditionField();
        AddInventorySelectorClass.SelectConditionForInventory();
        AddInventorySelectorClass.ClickOnSaveInventoryBtn();
    }
}

export const AddingInventoryLogic =  new AddInventory();