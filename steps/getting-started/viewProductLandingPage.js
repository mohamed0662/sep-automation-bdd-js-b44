import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { leftMainPage } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then(
  "the Cydeo secure checkout heading and logo are displayed",
  async function () {
    await expect(leftMainPage.secureCheckout).toContainText(
      /secure checkout/i
    );
    await expect(leftMainPage.cydeoLogoAtCheckoutHeader).toBeVisible();
  }
);

Then("the program name is displayed on the landing page", async function () {
  await expect(leftMainPage.programName).toHaveText(productInfo.productName);
});

Then("the left footer displays its logo and links in order", async function () {
  await expect(leftMainPage.cydeoLogoInLeftFooter).toBeVisible();
  await expect(leftMainPage.leftFooterLinks).toHaveText([
    "",
    "Terms and conditions",
    "Privacy Policy",
    "Disclaimer",
    "Cookie Policy",
  ]);
});

Then(
  "the right footer displays the enrollment help message",
  async function () {
    await expect(leftMainPage.rightFooterHelpMessage).toBeVisible();
    await expect(leftMainPage.rightFooterHelpMessage).toHaveText(
      "Need help? Contact us at enrollment@cydeo.com"
    );
  }
);