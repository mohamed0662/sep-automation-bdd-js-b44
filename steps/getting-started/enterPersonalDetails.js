import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { startApplicationPage } from "../../globalPagesSetup.js";

Then(
  "the personal detail fields have the expected types and validation",
  async function () {
    await expect(startApplicationPage.firstNameInputBox).toHaveJSProperty(
      "type",
      "text"
    );
    await expect(startApplicationPage.lastNameInputBox).toHaveJSProperty(
      "type",
      "text"
    );
    await expect(startApplicationPage.emailInputBox).toHaveAttribute(
      "type",
      "email"
    );
    await startApplicationPage.enterFirstName(faker.person.firstName());
    await startApplicationPage.enterLastName(faker.person.lastName());
    await startApplicationPage.enterPhoneNumber(faker.string.numeric(10));
    await startApplicationPage.emailInputBox.fill("not-an-email");
    await expect(
      startApplicationPage.invalidPersonalDetailInputs
    ).toHaveCount(1);
    await startApplicationPage.phoneNumberInputBox.fill("abc123xyz");
    await expect(startApplicationPage.phoneNumberInputBox).toHaveValue(
      /^\d*$/
    );
  }
);

Then(
  "the referral source dropdown contains the standard options",
  async function () {
    await expect(
      startApplicationPage.howDidYouHearAboutUsDropDown
    ).toBeVisible();
    await startApplicationPage.openReferralSourceDropdown();
    await expect(startApplicationPage.emailOptionFromDropDown).toBeVisible();
    await expect(startApplicationPage.referralSourceOptions).toHaveCount(9);
    await expect(startApplicationPage.otherOptionFromDropDown).toBeVisible();
  }
);

When("the required personal details are {word}", async function (state) {
  if (state === "missing") return;
  if (state !== "invalid") {
    throw new Error(`Unsupported personal detail state: ${state}`);
  }

  await startApplicationPage.enterFirstName(faker.person.firstName());
  await startApplicationPage.enterLastName(faker.person.lastName());
  await startApplicationPage.enterEmail("not-an-email");
  await startApplicationPage.enterPhoneNumber(faker.string.numeric(10));
});

Then("the Next button is disabled", async function () {
  await expect(startApplicationPage.nextButton).toBeDisabled();
});
