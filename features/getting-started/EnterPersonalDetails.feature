@sep10
Feature: Enter my Personal details

    As a customer, I should be able to enter my Personal details.

    #* AC1: Default field types and values should be as follows:
    #*          a. First Name: Text field is present.
    #*          b. Last Name: Text field is present.
    #*          c. Email Address: Text field is present and validates for email format.
    #*          d. Phone: The field allows numbers only.

    #* AC2: "How did you hear about us?" A standard dropdown list is present.
    #* AC3: The 'Next' button should be disabled if any required data is missing or invalid.

    Background:
        Given user is on the enrollment page

    @sep10-1
    Scenario: Show text, email, and numeric-only phone fields
        Then the personal detail fields have the expected types and validation

    @sep10-2
    Scenario: Show the How did you hear about us dropdown options
        Then the referral source dropdown contains the standard options

    @sep10-3
    Scenario Outline: Disable Next when required personal details are <state>
        When the required personal details are <state>
        Then the Next button is disabled

        Examples:
            | state   |
            | missing |
            | invalid |