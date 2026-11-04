import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import {
  paymentPlanPage,
  startApplicationPage,
} from "../../globalPagesSetup.js";

When("user enters valid information in {string}", async function (fieldCoverage) {
  if (fieldCoverage !== "all fields" && fieldCoverage !== "required fields") {
    throw new Error(`Unsupported field coverage: ${fieldCoverage}`);
  }

  const details = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    phoneNumber: faker.string.numeric(10),
  };

  if (fieldCoverage === "all fields") {
    details.howDidYouHearAboutUs = "email";
  }

  await startApplicationPage.completeApplicationDetails(details);
});

Then("the payment plan step is displayed", async function () {
  await expect(paymentPlanPage.chooseAPaymentPlanText).toBeVisible();
});
