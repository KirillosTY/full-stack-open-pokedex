const { test, describe, expect } = require('@playwright/test')



describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()

  })
})


describe('Single Pokemon', () => {
  test('Found Ivysaur stats', async ({ page }) => {
    await page.goto('/')


    await page.goto('/pokemon/ivysaur/')
    await page.waitForSelector('[data-testid="pokemon-details-ivysaury"]')
    const abilities = page.getByTestId('ability-name')
    await expect(page.getByTestId('ivysaur')).toHaveText('ivysaur')
    await expect(abilities.nth(1)).toHaveText('chlorophyll')
    await expect(abilities.nth(0)).toHaveText('overgrow')
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()



  })
})