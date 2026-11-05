@sep09
Feature: Display the product information

    As a customer, I should be able to see the product information.

    #* AC1: The product name should be displayed on the information card.
    #* AC2: The product name on the information card matches the product name on the left side of the screen.
    #* AC3: The price of the product should be displayed.
    #* AC4: The text indicating a flexible payment plan should be available and displayed.
    #* AC5: The program start date should be displayed.
    #* AC6: The return policy and the final date for returns should be displayed.


    Background:
        Given user is on the enrollment page

    @sep09-1
    Scenario: Display the product name on the information card
        Then the product name is displayed on the information card

    @sep09-2
    Scenario: Match the product name on the information card and left side
        Then the product name on the information card matches the left side

    @sep09-3
    Scenario: Display the product price
        Then the product price is displayed

    @sep09-4
    Scenario: Display the flexible payment plan message
        Then the flexible payment plan message is displayed

    @sep09-5
    Scenario: Display the program start date
        Then the program start date matches catalog data

    @sep09-6
    Scenario: Display the return policy and final return date
        Then the return policy and final return date match catalog data