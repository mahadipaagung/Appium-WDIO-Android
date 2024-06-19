import {expect} from '@wdio/globals'
import loginPage from '../pageobjects/loginpage.js'
import HomePage from '../pageobjects/homepage.js'

describe('Android apk Login Testing', () => {
    it('Negative Test, Login with registered username but with false password', async () => {
        await loginPage.setUsername('standard_user')
        await loginPage.setPassword('aselole')
        await loginPage.clickLogin()
        expect(loginPage.errorMsg).toHaveText(expect.stringContaining('Username and password do not match any user in this service'))
    })

    it('Login without value on each username input and password input', async () => {
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
        await loginPage.setUsername('sharon_callista')
        await loginPage.password.clearValue()
        await loginPage.clickLogin()
        expect(loginPage.errorMsg).toHaveText(expect.stringContaining('Password is required'))
    })

    it('Login with registered standard user data', async () => {
        await loginPage.setUsername('standard_user')
        await loginPage.setPassword('secret_sauce')
        await loginPage.clickLogin()
        expect(HomePage.mainTitle).toHaveText(expect.stringContaining('PRODUCTS'))
    })

    it('Login with locked out user credentials', async () => {
        await HomePage.clickLOGOUT()
        await loginPage.setUsername('locked_out_user')
        await loginPage.setPassword('secret_sauce')
        await loginPage.clickLogin()
        expect(loginPage.errorMsg).toHaveText(expect.stringContaining('Sorry, this user has been locked out.'))
    })

    it('Login with problematic user credentials', async () => {
        await loginPage.setUsername('problem_user')
        await loginPage.setPassword('secret_sauce')
        await loginPage.clickLogin()
        expect(HomePage.mainTitle).toHaveText(expect.stringContaining('PRODUCTS'))
    })
})