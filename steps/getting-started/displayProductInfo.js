import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { leftMainPage, startApplicationPage } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then(
  "the product name is displayed on the information card",
  async function () {
    await expect(startApplicationPage.programNameOnInfoCard).toHaveText(
      productInfo.productName
    );
  }
);

Then(
  "the product name on the information card matches the left side",
  async function () {
    await expect(startApplicationPage.programNameOnInfoCard).toHaveText(
      productInfo.productName
    );
    await expect(leftMainPage.programName).toHaveText(productInfo.productName);
  }
);

Then("the product price is displayed", async function () {
  const expectedPrice =
    productInfo.prices[0].baseAmount -
    productInfo.prices[0].upfrontDiscountAmount;
  await expect(startApplicationPage.programPrice).toContainText(
    `$${expectedPrice}`
  );
});

Then("the flexible payment plan message is displayed", async function () {
  await expect(
    startApplicationPage.flexiblePaymentsPlanAvailableText
  ).toBeVisible();
});

Then("the program start date matches catalog data", async function () {
  await expect(startApplicationPage.programStartDate).toHaveText(
    productInfo.startDate
  );
});

Then(
  "the return policy and final return date match catalog data",
  async function () {
    await expect(startApplicationPage.refundPolicyText).toBeVisible();
    await expect(startApplicationPage.refundEndDate).toHaveText(
      productInfo.refundDate
    );
  }
);
