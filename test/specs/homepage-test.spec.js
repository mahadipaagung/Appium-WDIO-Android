import {expect, driver} from '@wdio/globals'
import loginPage from '../pageobjects/loginpage.js'
import HomePage from '../pageobjects/homepage.js'
import scrollscreen from '../../helpers/scroll-action.js'

describe('Homepage Test', () => {
    before( async () => {
        await loginPage.setUsername('standard_user')
        await loginPage.setPassword('secret_sauce')
        await loginPage.clickLogin()
    })

    it('Add 1 items to cart and check cart item bubbles', async () => {
        await HomePage.add2cartclick(1)
        expect(HomePage.testCartbtn).toHaveAttribute('//android.widget.TextView[@text="1"]')
    })

    it('Add 2 items to cart and check cart item bubbles', async () => {
        await scrollscreen(875, 514)
        await HomePage.add2cartclick(3)
        expect(HomePage.testCartbtn).toHaveAttribute('//android.widget.TextView[@text="2"]')
    })
})