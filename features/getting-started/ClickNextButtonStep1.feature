@sep19
Feature: Click on the next button on step 1

    As a customer, I should be able to click on the next button on step 1 when I give valid information.

    #* AC1: The next button should take customers to step 2 when given valid information.
    #*              a. Test by providing all fields
    #*              b. Test by providing only the required fields
    Background:
        Given user is on the enrollment page

    @sep19-1
    Scenario Outline: Navigate to the payment plan step with valid information
        When user enters valid information in "<field coverage>"
        Then the payment plan step is displayed

        Examples:
            | field coverage  |
            | all fields      |
            | required fields |