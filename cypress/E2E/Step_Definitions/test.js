import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'
import Vs_Objects from '../Page_Objects/VsObjects'
Given(`I navigate to x`, () => {
    // [Given] Sets up the initial state of the system.
cy.visit(Vs_Objects.url)

});

Then(`I should see elements`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
cy.get(Vs_Objects.thankyou).should('be.visible')

});
Then(`Header Navigation elements should be visible`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
cy.get(Vs_Objects.features_btn).should('be.visible').and('contain.text','Features')
cy.get(Vs_Objects.docs_btn).should('be.visible').and('contain.text','Docs')
cy.get(Vs_Objects.release_notes_btn).should('be.visible').and('contain.text','Release Notes')
cy.get(Vs_Objects.blog_btn).should('be.visible').and('contain.text','Blog')
cy.get(Vs_Objects.learn_btn).should('be.visible').and('contain.text','Learn')
cy.get(Vs_Objects.events_btn).should('be.visible').and('contain.text','Events')
cy.get(Vs_Objects.resources_btn).should('be.visible').and('contain.text','Resources')
cy.get(Vs_Objects.inputGroup_btn).should('be.visible')
cy.get(Vs_Objects.switch_theme).should('be.visible')
cy.get(Vs_Objects.download_btn).should('be.visible').and('contain.text','Download')
});

