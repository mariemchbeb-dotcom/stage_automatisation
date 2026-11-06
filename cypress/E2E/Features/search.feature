Feature: Verify Search Feature

  Background:
   Given I am on the login page
   When I enter valid credentials 
   Then I should be Logged In

  Scenario Outline: Search for products
    When I enter "<keyword>" in the search box and click search
    Then Search Result should contain "<expected_product>"

    Examples:
      |keyword|expected_product|
      |laptop|14.1-inch Laptop|
      |computer|Build your own cheap computer|