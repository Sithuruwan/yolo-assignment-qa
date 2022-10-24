const supplierPageSelector = {
    supplierTab: 'a[href*="/suppliers"]',
    searchBar: 'input[placeholder="Search"]',
    bombaySupplier: 'a[href*="/games?provider=Bombay+Live"]',
    bombayLive: 'h1:contains("Bombay Live")'
}

export class SupplierPage {

    // Function to click on the supplier tab
    static clickOnSupplierTab() {
        cy.get(supplierPageSelector.supplierTab).eq(2).click();
    }

    // Function to find a required game provider
    static  findSupplier(supplierName) {
        cy.get(supplierPageSelector.searchBar).type(supplierName);
        cy.get(supplierPageSelector.bombaySupplier).click();

    }

    // Function to verify if the game provider is filtered out
    static verifySupplierIsFiltered() {
        cy.get(supplierPageSelector.bombayLive).should('be.visible');
    }

}