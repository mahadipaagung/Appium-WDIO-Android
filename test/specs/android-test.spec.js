import {$, expect} from '@wdio/globals'
import loginPage from '../pageobjects/loginpage.js'

describe('Android apk Login Testing', () => {
    it('Negative Test, Login with registered username but with false password', async () => {
        // const username = await $('~test-Username')
        // const password = await $('~test-Password')
        // const Loginbtn = await $('~test-LOGIN')
        // const errorMsg = await $('//android.view.ViewGroup[@content-desc="test-Error message"]')

        await loginPage.setUsername('standard_user')
        await loginPage.setPassword('aselole')
        await loginPage.clickLogin()
        expect(loginPage.errorMsg).toHaveText(expect.stringContaining('Username and password do not match any user in this service'))
    })
    it('Login without value on each username input and password input', async () => {
        // const username = await $('~test-Username')
        // const password = await $('~test-Password')
        // const Loginbtn = await $('~test-LOGIN')
        // const errorMsg = await $('~test-Error message')
        
        await loginPage.username.clearValue()
        await loginPage.password.clearValue()
        await loginPage.clickLogin()
        expect(loginPage.errorMsg).toHaveText(expect.stringContaining('Username is required'))
    })
    it('Login without value on username but fill in value on the password input box', async () => {
        await loginPage.username.clearValue()
        await loginPage.setPassword('secret_sauce')
        await loginPage.clickLogin()
        expect(loginPage.errorMsg).toHaveText(expect.stringContaining('Username is required'))
    })
    it('Login without value on the password input boxes', async () => {
        // const username = await $('~test-Username')
        // const password = await $('~test-Password')
        // const Loginbtn = await $('~test-LOGIN')
        // const errorMsg = await $('~test-Error message')

        await loginPage.setUsername('sharon_callista')
        await loginPage.password.clearValue()
        await loginPage.clickLogin()
        expect(loginPage.errorMsg).toHaveText(expect.stringContaining('Password is required'))
    })
    it('Login with registered user data', async () => {
        // const username = await $('~test-Username')
        // const password = await $('~test-Password')
        // const Loginbtn = await $('~test-LOGIN')
        const mainTitle = await $('//android.widget.TextView[@text="PRODUCTS"]')

        await loginPage.setUsername('standard_user')
        await loginPage.setPassword('secret_sauce')
        await loginPage.clickLogin()
        
        expect(mainTitle).toHaveText(expect.stringContaining('PRODUCTS'))
    })
})