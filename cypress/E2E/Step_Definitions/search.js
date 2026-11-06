import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'
import Search_Objects from '../Page_Objects/searchObjects'



When(`I enter {string} in the search box and click search`, (keyword) => {
    cy.get(Search_Objects.searchBox).should('be.visible').and('have.attr', 'id', 'small-searchterms').type(keyword);
    cy.get(Search_Objects.searchButton).should('be.visible').and('have.attr', 'class', 'button-1 search-box-button').click();


});

Then(`Search Result should contain {string}`, (expectedProduct) => {
    cy.get(Search_Objects.searchResults).should('be.visible').and('contain.text', expectedProduct);



    
});