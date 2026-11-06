Feature: Add product to cart

   
   Background: 
        Given I am on the login page
        When I enter valid credentials 
        Then I should be Logged In

     Scenario: Add a product to the cart

    Given I navigate to product page
    When I select product options and add it to the cart
    Then product should be added to the cart