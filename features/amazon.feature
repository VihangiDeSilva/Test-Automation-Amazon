Feature: Main Flow - Order a Book Item And Clear The Cart

  Scenario Outline: Check whether if a user can

    Given Go to the Amazon homepage
    When Select 'Books' from the category list dropdown
    When Search for 'Automation'

    When Select '4 Stars & UP' in customer reviews
    When Select 'English' as the language

    Then Store the name of the second item from the product list page
    When Click on the second item from the product list page
    Then Get the unit price of the item on the product detail page

    Then Verify that the item name on the product detail page matches the stored name
    Then Set the quantity to 2

    When Click on Add to Cart
    When Click on Go to Cart

    Then Verify that cart details are correct - item name
    Then Verify that cart details are correct - quantity
    Then Verify that cart details are correct - total price

    When Clear the cart
    Then Verify that the total amount is equal to $0.00


    Examples:
      | mouse |
      | game  |
