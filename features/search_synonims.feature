Feature:search synonims in milsinonimos database

  As a dictionary user
  So that I can find synonims for a spanish word
  I want to search synonims in milsinonimos site

Background: words, meanings and significances in database

  Given the following words exist:
  | id | entry        |
  |  1 | banco        |
  |  2 | asiento      |
  |  3 | financiera   |
  |  4 | jamón        |

  Given the following meanings exist:
  | id |
  |  1 |
  |  2 |
  |  3 |

  Given the following significances exist:
  | id | meaning_id | word_id |
  |  1 | 1          | 1       |
  |  2 | 1          | 2       |
  |  3 | 2          | 1       |
  |  4 | 2          | 3       |
  |  5 | 3          | 4       |

Scenario: search for a word that has one meaning
  Given I am on the main page
  And  I fill in "Searchbox" with "asiento"
  Then I should see "banco"
  But  I should not see "financiera"

Scenario: search for a word that has two different meanings
  Given I am on the main page
  And  I fill in "Searchbox" with "banco"
  Then I should see "asiento"
  And  I should see "financiera"

Scenario: find movie with same director
  Given I am on the details page for "Star Wars"
  When  I follow "Find Movies With Same Director"
  Then  I should be on the Similar Movies page for "Star Wars"
  And   I should see "THX-1138"
  But   I should not see "Blade Runner"

Scenario: can't find similar movies if we don't know director (sad path)
  Given I am on the details page for "Alien"
  Then  I should not see "Ridley Scott"
  When  I follow "Find Movies With Same Director"
  Then  I should be on the home page
  And   I should see "'Alien' has no director info"

