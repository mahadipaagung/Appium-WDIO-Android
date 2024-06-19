import {expect} from '@wdio/globals'
import loginPage from '../pageobjects/loginpage.js'
import HomePage from '../pageobjects/homepage.js'
import CartPage from '../pageobjects/cartpage.js'
import scrollscreen from '../../helpers/scroll-action.js'

describe('Buying Items e2e from login to cart checkouts', () => {
    before( async () => {
        await loginPage.setUsername('standard_user')
        await loginPage.setPassword('secret_sauce')
        await loginPage.clickLogin()
    })

    it('Checkout 1 items', async () => {
        await HomePage.add2cartclick(2)
        await HomePage.cartClick()
        expect(CartPage.testDesc).toHaveAttribute('//android.widget.TextView[@text="Sauce Labs Bike Light"]')
    })

    it('Checkout 2 items', async () => {
        await CartPage.clicklanjutShop()
        await driver.pause(1000)
        await scrollscreen(875, 514)
        await HomePage.add2cartclick(3)
        await HomePage.cartClick()
        expect(CartPage.testDesc2).toHaveAttribute('//android.widget.TextView[@text="Sauce Labs Backpack"]')
    })
})