@update
Feature: Update my account
  As a user
  I should sign in for updating my account information
  I want to be able to update my first name and my last name in my profile 

  Scenario: Updating profile
    Given I am on the login page
    When I fill in Email with "abid.soukaina.90@gmail.com"
    And I fill in Password with "Soukaina1990"
    And I press Login 
    And I select "Mon compte" for updating my profile
    Then My profile should be updated with firstname "souki" and lastname "ab"
    And I check confimation message "Informations enregistrées avec succès"
    And I am on the home page with title "Chauffeur Privé - Mes informations personnelles"
