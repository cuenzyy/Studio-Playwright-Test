import { test, expect } from "@playwright/test";
import { loopTests } from "./Utilities/looper";

loopTests(3, (i) => {
  test(`get started link [Run ${i + 1}]`, async ({ page }) => {
    await page.goto("https://playwright.dev/");

    // Click the get started link.
    await page.getByRole("link", { name: "Get started" }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole("heading", { name: "Installation" })).toBeVisible();
  });
});
