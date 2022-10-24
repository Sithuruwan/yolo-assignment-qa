import {data} from "../../fixtures/test_data";

const homePageSelectors = {
    hub88logo:'[class = "jsx-3746230925"]'
}
export class HomePage {

    // Open the hub88 url
    static visitHub88() {
        cy.visit(data.url.hub88url);
    }

    // Verify whether the hub88 home page is loaded
    static verifyHub88LogoIsDisplayed() {
        cy.get(homePageSelectors.hub88logo).should('be.visible');
    }
}