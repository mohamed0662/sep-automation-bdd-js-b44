import { BasePage } from "./BasePage.js";

export class StartApplicationPage extends BasePage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    super(page);

    this.checkoutStepper = page.locator("#stepper1");

    this.startApplicationText = this.checkoutStepper.getByText(
      "Start Application",
      { exact: true }
    );

    this.paymentPlanText = this.checkoutStepper.getByText("Payment plan", {
      exact: true,
    });

    this.reviewText = this.checkoutStepper.getByText("Review", { exact: true });

    this.startApplicationStepCircle = this.checkoutStepper
      .locator(".step")
      .filter({ hasText: "Start Application" })
      .locator(".step-circle");

    this.paymentPlanStepCircle = this.checkoutStepper
      .locator(".step")
      .filter({ hasText: "Payment plan" })
      .locator(".step-circle");

    this.reviewStepCircle = this.checkoutStepper
      .locator(".step")
      .filter({ hasText: "Review" })
      .locator(".step-circle");

    this.firstNameInputBox = page.locator("[formcontrolname='firstName']");

    this.lastNameInputBox = page.locator("[formcontrolname='lastName']");

    this.emailInputBox = page.locator("[formcontrolname='email']");

    this.phoneNumberInputBox = page.locator("[formcontrolname='phoneNumber']");

    this.howDidYouHearAboutUsDropDown = page.getByText(
      "How did you hear about us?",
      { exact: true }
    );

    this.emailOptionFromDropDown = page.getByRole("option", {
      name: "Email",
      exact: true,
    });

    this.facebookOptionFromDropDown = page.locator(
      "//mat-option/span[contains(text(), 'Facebook')]"
    );

    this.googleOption = page.locator(
      "//mat-option/span[contains(text(), 'Google')]"
    );

    this.instagramOptionFromDropDown = page.locator(
      "//mat-option/span[contains(text(), 'Instagram')]"
    );

    this.linkedInOptionFromDropDown = page.locator(
      "//mat-option/span[contains(text(), 'LinkedIN')]"
    );

    this.twitterOptionFromDropDown = page.locator(
      "//mat-option/span[contains(text(), 'Twitter')]"
    );

    this.referredByFriedOptionFromDropDown = page.locator(
      "//mat-option/span[contains(text(), 'Referred by a friend')]"
    );

    this.otherOptionFromDropDown = page.locator(
      "//mat-option/span[contains(text(), 'Other')]"
    );

    this.firstNameInputBoxForParents = page.locator(
      "(//input[@formcontrolname='firstName'])[2]"
    );

    this.lastNameInputBoxForParents = page.locator(
      "(//input[@formcontrolname='lastName'])[2]"
    );

    this.emailInputBoxForParents = page.locator(
      "(//input[@formcontrolname='email'])[2]"
    );

    this.phoneNumberInputBoxForParents = page.locator(
      "(//input[@formcontrolname='phoneNumber'])[2]"
    );

    this.flexiblePaymentsPlanAvailableText = page.locator(
      "//p[text() = 'Flexible payments plan available']"
    );

    this.programStartDate = page.locator(
      "//div[contains(text(), 'Program Start Date')]/b[@class='info-value']"
    );

    this.refundEndDate = page.locator("(//b[@class='info-value'])[2]");

    this.refundPolicyText = page.getByText("100% refund", { exact: true });

    this.programNameOnInfoCard = page.locator(
      "//p[@class='program-title primary-color']"
    );

    this.programPrice = page.locator(
      "//div[@class='col-sm']/b[@class = 'info-primary']"
    );

    this.footer = page.locator(
      "//p[@class = 'footer-text' and contains(text(), 'Need help?')]"
    );

    this.nextButton = page.getByRole("button", { name: "Next", exact: true });

    this.programBasePrice = page.locator("//span[@class='ng-star-inserted']/s");

    this.enterPersonalDetails = page.locator(
      "//b[contains(.,'Enter personal details')]"
    );

    this.discountedPrice = page.locator("//b[@class='info-primary']");

    this.originalPrice = page.locator("//s[contains(.,'$')]");

    
  }

  /**
   * @param {string} firstName
   */
  async enterFirstName(firstName) {
    await this.firstNameInputBox.fill(firstName);
  }

  /**
   * @param {string} lastName
   */
  async enterLastName(lastName) {
    await this.lastNameInputBox.fill(lastName);
  }

  /**
   * @param {string} email
   */
  async enterEmail(email) {
    await this.emailInputBox.fill(email);
  }

  /**
   * @param {string} phoneNumber
   */
  async enterPhoneNumber(phoneNumber) {
    await this.phoneNumberInputBox.fill(phoneNumber);
  }

  /**
   * @param {string} howDidYouHear
   */
  async selectHowDidYouHearAboutUs(howDidYouHear) {
    howDidYouHear = howDidYouHear.toLowerCase();
    await this.howDidYouHearAboutUsDropDown.click();
    switch (howDidYouHear) {
      case "email":
        await this.emailOptionFromDropDown.click();
        break;
      case "facebook":
        await this.facebookOptionFromDropDown.click();
        break;
      case "google":
        await this.googleOption.click();
        break;
      case "instagram":
        await this.instagramOptionFromDropDown.click();
        break;
      case "linkedin":
        await this.linkedInOptionFromDropDown.click();
        break;
      case "twitter":
        await this.twitterOptionFromDropDown.click();
        break;
    }
  }

  async clickNextButton() {
    await this.nextButton.click();
  }

  /**
   * @param {{
   *   firstName: string,
   *   lastName: string,
   *   email: string,
   *   phoneNumber: string,
   *   howDidYouHearAboutUs?: string
   * }} details
   */
  async completeApplicationDetails(details) {
    await this.enterFirstName(details.firstName);
    await this.enterLastName(details.lastName);
    await this.enterEmail(details.email);
    await this.enterPhoneNumber(details.phoneNumber);

    if (details.howDidYouHearAboutUs) {
      await this.selectHowDidYouHearAboutUs(details.howDidYouHearAboutUs);
    }

    await this.clickNextButton();
  }
}
