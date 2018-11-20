@reset
Feature: Reset password
  As a user I want to be able to Reset my password


  Scenario: forgot my password
    Given I am on the login page
    When I press forgot password 
    And I fill in Email user with "abid.soukaina.90@gmail.com"
    And I press reset button
    Then I check the confirmation message "Email de réinitialisation envoyé !"
    