import { BasePage } from "./BasePage.js";

export class LeftMainPage extends BasePage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    super(page);

    this.cydeoImageAtLeftWindow = page.locator(
      "(//img[@src = 'assets/images/logo.svg'])[2]"
    );

    this.secureCheckout = page.locator("//p[@class='checkout-title']");

    this.cydeoLogoAtCheckoutHeader = page.locator(
      ".checkout-title img[src='assets/images/logo.svg']"
    );

    this.leftFooterLinks = page.locator(".details-footer a");

    this.cydeoLogoInLeftFooter = this.leftFooterLinks
      .first()
      .locator("img[src='assets/images/logo.svg']");

    this.programName = page.locator("//p[@class='course-name']/a");

    this.rightFooterHelpMessage = page
      .locator(".right-footer:visible")
      .getByText("Need help? Contact us at enrollment@cydeo.com", {
        exact: true,
      });
  }
}
