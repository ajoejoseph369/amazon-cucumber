Feature: Test amazon website functionality

  Scenario: Check if user is redirected to amazon log in page
    Given user is on the homepage
    When user clicks sign in
    Then user is redirected to login page

  Scenario: Check if user is able to log in using their credentials
    Given user is on the login page
    When user enters <username> and clicks on continue button
    Then user enters <password> and clicks on sign in button
    Then user is redirected to homepage

    Examples:
      | username               | password          |
      | ajoejoseph99@gmail.com | iamajoejoseph3426 |

  Scenario: Check if user is able to search for a product
    Given user is on the homepage
    When user clicks on the search bar and enters <product_details>
    And clicks on the search icon
    Then user is redirected the product listing page

    Examples:
      | product_details                              |
      | Apple iPhone 15 Pro (256 GB) - Blue Titanium |
