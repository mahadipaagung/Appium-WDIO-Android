import {$} from '@wdio/globals'

class loginPage {
    //defining getter
    get username() { return $('~test-Username')}
    get password() { return $('~test-Password')}
    get Loginbtn() { return $('~test-LOGIN')}
    get errorMsg() { return $('~test-Error message')}

    //functions
    async setUsername(value) {
        await this.username.setValue(value)
    }

    async setPassword(value) {
        await this.password.setValue(value)
    }

    async clickLogin() {
        await this.Loginbtn.click()
    }
}

export default new loginPage()