import { expect, test } from '@playwright/test';

test.describe('Checkout flow', () => {
  test('allows the user to add a product to cart and reach checkout', async ({
    page,
  }) => {
    await page.goto('/products');

    await expect(
      page.getByRole('heading', { name: /products/i }),
    ).toBeVisible();

    const firstProductLink = page.locator('a[href^="/products/"]').first();

    await expect(firstProductLink).toBeVisible();
    await firstProductLink.click();

    await expect(page).toHaveURL(/\/products\/\d+/);

    const addToCartButton = page.getByRole('button', {
      name: /add to cart/i,
    });

    await expect(addToCartButton).toBeVisible();
    await addToCartButton.click();

    await page.goto('/cart');

    await expect(
      page.getByRole('heading', { name: 'Shopping cart', level: 1 }),
    ).toBeVisible();

    await expect(page.getByText(/subtotal/i)).toBeVisible();

    const checkoutLink = page.getByRole('link', {
      name: /continue to checkout/i,
    });

    await expect(checkoutLink).toBeVisible();
    await checkoutLink.click();

    await expect(page).toHaveURL(/\/checkout/);

    await expect(
      page.getByRole('heading', { name: /checkout/i, level: 1 }),
    ).toBeVisible();
  });
});