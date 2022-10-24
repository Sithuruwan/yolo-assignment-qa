import {SupplierPage} from "../pages/hub88_supplier_page";
import {data} from "../../fixtures/test_data";
import {HomePage} from "../pages/hub88_home_page";

/**
 * @author Anuradha Walalgoda
 */

describe('Find a game provider', () => {

  it('Verify whether the game provider is selected', () => {
    HomePage.visitHub88();
    SupplierPage.clickOnSupplierTab();
    SupplierPage.findSupplier(data.supplier.supplier01);
    SupplierPage.verifySupplierIsFiltered();
  });

});