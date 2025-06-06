import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test("should load and display all elements correctly", async ({ page }) => {
    // Navigate to the home page
    await page.goto("/");

    // Verify the main heading
    const heading = page.getByRole("heading", {
      name: "Ribethena Fresh Juice Drink",
    });
    await expect(heading).toBeVisible();

    // Verify navigation links
    const nav = page.getByRole("navigation");
    await expect(nav).toBeVisible();

    const homeLink = nav.getByRole("link", { name: "Home" });
    const contactLink = nav.getByRole("link", { name: "Contact" });

    await expect(homeLink).toBeVisible();
    await expect(contactLink).toBeVisible();

    // Verify the juice cup and shake button
    const juiceCup = page.getByTestId("juice-cup");
    await expect(juiceCup).toBeVisible();

    const shakeButton = page.getByRole("button", { name: "SHAKE" });
    await expect(shakeButton).toBeVisible();
    // Verify initial text
    const initialText = page.getByText("Shake the drink, make it pop..");
    await expect(initialText).toBeVisible();

    // Click the shake button
    await shakeButton.click();

    // Verify the text has changed after clicking
    const newText = page.getByText("Sip it fast, don't let it stop.");
    await expect(newText).toBeVisible();
  });
});
