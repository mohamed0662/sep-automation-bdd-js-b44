@sep08
Feature: Display the steps of the checkout process

    As a customer, I should be able to know where I am in the checkout process using the stepper.

    #* AC1: The system should display the steps of the checkout process as "1-Start Application", "2-Payment Plan", and "3-Review".
    #* AC2: The system should highlight "Start Application" in blue.
    #* AC3: The system should display "Payment Plan" and "Review" in grey.


    Background:
        Given user is on the enrollment page

    @sep08-1
    Scenario: Display checkout process steps in order
        Then the checkout process displays the Start Application, Payment Plan, and Review steps in order

    @sep08-2
    Scenario: Highlight Start Application in blue
        Then the Start Application step is highlighted in blue

    @sep08-3
    Scenario: Display Payment Plan and Review in grey
        Then the Payment Plan and Review steps are grey
