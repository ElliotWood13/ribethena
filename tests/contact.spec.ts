import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: "Contact" }).click();
  await page.getByRole("textbox", { name: "Name" }).click();
  await page.getByRole("textbox", { name: "Name" }).fill("Valters");
  await page.getByRole("textbox", { name: "Name" }).press("Tab");
  await page.getByRole("textbox", { name: "Email" }).fill("v@ethena.xyz");
  await page.getByRole("textbox", { name: "Email" }).press("Tab");
  await page
    .getByRole("textbox", { name: "Subject" })
    .fill("Send me some tasty delicious juice I'm desperate!");
  await page.getByRole("textbox", { name: "Subject" }).press("Tab");
  await page
    .getByRole("textbox", { name: "Message" })
    .fill("Hi, please send juice, V");
  await page.getByRole("button", { name: "Send Message" }).click();
  // change to expect
  await expect(page.getByText("Thank you for your message!")).toBeVisible();
});
