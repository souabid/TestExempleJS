@login
Feature: Sign In and Sign out
  As a user i want to be able to sign In
  I want to access to the order page and then disconnect

  
  Background: login with valid credentials
    Given I am on the login page
    When I fill in Email with "abid.soukaina.90@gmail.com"
    And I fill in Password with "Soukaina1990"
    And I press Login 
    Then I should be connected
  
  Scenario: Sign out
    Given I am on the home page with title "Chauffeur Privé - Commander une voiture"
    When I sign out of the app
    Then I should be redirected to login page