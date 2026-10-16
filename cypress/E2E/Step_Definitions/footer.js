import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'
import Vs_Objects from '../Page_Objects/VsObjects'


Then(`Footer Navigation elements should be visible`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
cy.get(Vs_Objects.github_href).should('be.visible').find('img').should('have.attr', 'alt', Vs_Objects.github_btn)
cy.get(Vs_Objects.x_href).should('be.visible').find('img').should('have.attr', 'alt', Vs_Objects.x_btn)
cy.get(Vs_Objects.linkedin_href).should('be.visible').find('img').should('have.attr', 'alt', Vs_Objects.linkedin_btn)
cy.get(Vs_Objects.bluesky_href).should('be.visible').find('img').should('have.attr', 'alt', Vs_Objects.bluesky_btn)
cy.get(Vs_Objects.reddit_href).should('be.visible').find('img').should('have.attr', 'alt', Vs_Objects.reddit_btn)
cy.get(Vs_Objects.podcast_href).should('be.visible').find('img').should('have.attr', 'alt', Vs_Objects.podcast_btn)
cy.get(Vs_Objects.instagram_href).should('be.visible').find('img').should('have.attr', 'alt', Vs_Objects.instagram_btn)
cy.get(Vs_Objects.tiktok_href).should('be.visible').find('img').should('have.attr', 'alt', Vs_Objects.tiktok_btn)
cy.get(Vs_Objects.youtube_href).should('be.visible').find('img').should('have.attr', 'alt', Vs_Objects.youtube_btn)
cy.get(Vs_Objects.support_btn).should('be.visible').and('contain.text','Support')
cy.get(Vs_Objects.privacy_btn).should('be.visible').and('contain.text','Privacy')
cy.get(Vs_Objects.manage_cookies_btn).should('be.visible').and('contain.text','Manage Cookies')
cy.get(Vs_Objects.terms_use_btn).should('be.visible').and('contain.text','Terms of Use')
cy.get(Vs_Objects.license_btn).should('be.visible').and('contain.text','License')
cy.get(Vs_Objects.privacy_choices_btn).should('be.visible').and('contain.text','Privacy Choices')
cy.get(Vs_Objects.consumer_privacy_btn).should('be.visible').and('contain.text','Consumer Health Privacy')
});




