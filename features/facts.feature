# test/facts.feature
Feature: Cat facts API

  Scenario Outline: Verify the type and source of the facts
    Given I make a GET request to facts
    Then I should get a response with status code 200
    And I should get an array of facts
    And each fact should have a type of "<type>"
    And each fact should have a source of "<source>"

    Examples:
      | type | source |
      | cat  | user   |
      | dog  | user   |
      | horse| user   |
    
  Scenario Outline: Verify the source of the facts
    Given I make a GET request to facts
    Then I should get a response with status code 200
    And I should get an array of facts
    And each fact should have a source of "<source>"

    Examples:
      | type | source |
      | cat  | user   |
      | dog  | user   |
      | horse| user   |
    