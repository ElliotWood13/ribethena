import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test("should load and display all elements correctly", async ({ page }) => {
    // Navigate to the home page
    await page.goto("/");

    // Verify the main heading
    const heading = page.getByRole("heading", { name: "Welcome to Ribethena" });
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

    // Verify the splash image is visible before clicking
    const splashImage = page.getByRole("img", { name: "Splash effect" });
    await expect(splashImage).toBeVisible();

    // Verify initial text
    const initialText = page.getByText("Valters woz ere");
    await expect(initialText).toBeVisible();

    // Click the shake button
    await shakeButton.click();

    // Verify the text has changed after clicking
    const newText = page.getByText("Sip it fast, don't let it stop.");
    await expect(newText).toBeVisible();
  });
});
