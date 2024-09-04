Feature: Purchase Product
  As a user, I want to purchase a product and complete the checkout process.

  Background: Login
    Given I am logged in to the application
  Scenario Outline: Add a product to the cart and complete checkout
    When I click on "<menu>"
    When I select a category "<categories>"
    When I search for a product "<product>"
    And I add the product to the cart
    And I proceed to checkout
    And I select use a new address
    And I fill in the billing details
    And I confirm the order
    Then I should see the order confirmation page

    Examples:
      | product      | categories | menu             |
      | HTC Touch HD | Laptops    | Shop by Category |

