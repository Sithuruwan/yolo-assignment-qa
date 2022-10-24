import {HomePage} from "../pages/hub88_home_page";
import {data} from "../../fixtures/test_data";

/**
 * @author Anuradha Walalgoda
 */

describe('Validate the hub88 home page', () => {

  it('Verify whether the hub88 logo is displayed on the home page',
      () => {
        HomePage.visitHub88(data.url);
        HomePage.verifyHub88LogoIsDisplayed();
      });

});