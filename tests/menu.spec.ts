import { expect, Locator, test } from '@playwright/test';

test('should have a title', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle('BURGERS RESTAURANT');
});

test.describe('Menu Page', async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/menu');
  });

  test('should change tab', async ({ page }) => {
    const tab = page.getByTestId('drinks-tab-selector');
    await tab.click();
    const itemPrice = page.getByTestId('caipirinha-item-price');
    const priceTxt = await itemPrice.textContent();
    expect(priceTxt).toContain('13,00');
  });

  test.describe('Modal', () => {
    let item: Locator;
    let modal: Locator;

    test.beforeEach(({ page }) => {
      item = page.getByTestId('hard-core-item');
      modal = page.getByTestId('modal');
    });

    test('should open modal when click on some item', async () => {
      await expect(modal).not.toBeVisible();
      await item.click();
      await expect(modal).toBeVisible();
    });

    test.describe('Inside Modal Actions', () => {
      let modalCloseButton: Locator;
      let modifierRadio: Locator;
      let footerOrderPrice: Locator;
      let addToCartButton: Locator;
      let cartPrice: Locator;

      test.beforeEach(async ({ page }) => {
        modalCloseButton = page.getByTestId('modal-close-button');
        modifierRadio = page.getByTestId('2-meats-radio');
        footerOrderPrice = page.getByTestId('footer-order-price');
        addToCartButton = page.getByTestId('add-to-cart-button');
        cartPrice = page.getByTestId('cart-total-price');
        await page.getByTestId('smash-brooks-item').click();
      });

      test('should close modal when click on modal close button', async () => {
        await modalCloseButton.click();
        await expect(modal).not.toBeVisible();
      });

      test('should select item modifier', async () => {
        await modifierRadio.click();
        expect(await footerOrderPrice.textContent()).toContain('35,00');
      });

      test.describe('item sub and sum', () => {
        let qtd: Locator;
        let subBtn: Locator;
        let sumBtn: Locator;

        test.beforeEach(async ({ page }) => {
          const modifier = page.getByTestId('2-meats-radio');
          await modifier.click();

          qtd = page.getByTestId('item-quantity');
          subBtn = page.getByTestId('sub-button');
          sumBtn = page.getByTestId('sum-button');
        });

        test('should add quantity', async () => {
          expect(await qtd.textContent()).toEqual('1');
          await sumBtn.click();
          expect(await qtd.textContent()).toEqual('2');
        });

        test('should sub quantity', async () => {
          expect(await qtd.textContent()).toEqual('1');
          await sumBtn.click();
          expect(await qtd.textContent()).toEqual('2');
          await subBtn.click();
          expect(await qtd.textContent()).toEqual('1');
        });

        test('should cannot sub when quantity is one', async () => {
          expect(await qtd.textContent()).toEqual('1');
          await subBtn.click();
          expect(await qtd.textContent()).toEqual('1');
        });
      });

      test('should add to cart and close modal', async () => {
        await expect(modal).toBeVisible();
        await expect(cartPrice).not.toBeVisible();
        await modifierRadio.click();
        await addToCartButton.click();
        expect(await cartPrice.textContent()).toContain('35,00');
        await expect(modal).not.toBeVisible();
      });
    });
  });
});
