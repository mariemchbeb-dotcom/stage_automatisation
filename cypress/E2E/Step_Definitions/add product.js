import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'
import Product_Objects from '../Page_Objects/addProductObjects'


Given(`I navigate to product page`, () => {
    // [Given] Sets up the initial state of the system.
    cy.get(Product_Objects.computersLink).should('be.visible').click();
    cy.get(Product_Objects.desktopsLink).contains('Desktops').should('be.visible').click();
    cy.get(Product_Objects.productTitle).should('be.visible').and('have.attr', 'href', '/build-your-own-computer').click();
});

When(`I select product options and add it to the cart`, () => {
    // [When] Describes the action or event that triggers the scenario.
    cy.get(Product_Objects.processordropdown).should('be.visible').and('have.attr', 'name', 'product_attribute_16_5_4').select(Product_Objects.value1);
    cy.get(Product_Objects.processordropdown).should('be.visible').and('have.attr', 'name', 'product_attribute_16_5_4').select(Product_Objects.value2);
    cy.get(Product_Objects.ramdropdown).should('be.visible').and('have.attr', 'name', 'product_attribute_16_6_5').select(Product_Objects.valueRam1).should('have.value', Product_Objects.valueRam1);
    cy.get(Product_Objects.ramdropdown).should('be.visible').and('have.attr', 'name', 'product_attribute_16_6_5').select(Product_Objects.valueRam2).should('have.value', Product_Objects.valueRam2);
    cy.get(Product_Objects.ramdropdown).should('be.visible').and('have.attr', 'name', 'product_attribute_16_6_5').select(Product_Objects.valueRam3).should('have.value', Product_Objects.valueRam3);
    cy.get(Product_Objects.HddButton1).should('be.visible').and('have.attr', 'id', 'product_attribute_16_3_6_18').check();
    cy.get(Product_Objects.HddButton2).should('be.visible').and('have.attr', 'id', 'product_attribute_16_3_6_19').check();
    cy.get(Product_Objects.osButton1).should('be.visible').and('have.attr', 'id', 'product_attribute_16_4_7_44').check();
    cy.get(Product_Objects.osButton2).should('be.visible').and('have.attr', 'id', 'product_attribute_16_4_7_20').check();
    cy.get(Product_Objects.osButton3).should('be.visible').and('have.attr', 'id', 'product_attribute_16_4_7_21').check();
cy.get(Product_Objects.softwareButton1).should('be.visible').and('have.attr', 'id', 'product_attribute_16_8_8_22').check();
cy.get(Product_Objects.softwareButton2).should('be.visible').and('have.attr', 'id', 'product_attribute_16_8_8_23').check();
cy.get(Product_Objects.softwareButton3).should('be.visible').and('have.attr', 'id', 'product_attribute_16_8_8_24').check();
cy.get(Product_Objects.quantityInput).should('be.visible').and('have.attr', 'id', 'addtocart_16_EnteredQuantity').clear().type('1');
cy.get(Product_Objects.btnAddToCart).should('be.visible').and('have.attr', 'id', 'add-to-cart-button-16').click();
});

Then(`product should be added to the cart`, () => {
    // [Then] Describes the expected outcome or result of the scenario.

    cy.get(Product_Objects.shoppingCartLink).click();
    cy.get(Product_Objects.cartItem).should('be.visible');
    cy.get(Product_Objects.quantityCart).should('have.value', '1');
    cy.screenshot()
    cy.get(Product_Objects.removeButton).should('be.visible').and('have.attr', 'name', 'removefromcart').check();
    cy.get(Product_Objects.updateCartButton).should('be.visible').and('have.attr', 'name', 'updatecart').click();
cy.wait(1000);
cy.screenshot()
cy.log('Product removed from cart successfully');

});
