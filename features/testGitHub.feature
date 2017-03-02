#features/test.feature
Feature: Photobox Test
    As a user of cucumber 
    I should be able to navigate to a git hub page and test a response from the join page
    I should also be able to test the git hub api for a request that contains a specified name

@gitui
    Scenario: Test github username taken
        Given I go to the page "https://github.com/" 
        And navigate to the Sign up page
        When I enter the username "photobox"
        Then I should see the username is taken

@gitapi
    Scenario: Test github API
        Given pass "photobox" to the Github API "https://api.github.com/users/"
        Then I should see the "photobox" name in the request body


        