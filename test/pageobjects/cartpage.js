import {$} from '@wdio/globals'

class CartPage {
    get lanjutShoppingbtn() { return $('~test-CONTINUE SHOPPING')}
    get removebtn() { return $('~test-REMOVE')}
    get checkoutbtn() { return $('~test-CHECKOUT')}
    get testDesc() { return $('(//android.view.ViewGroup[@content-desc="test-Description"])')}
    get testDesc1() { return $('(//android.view.ViewGroup[@content-desc="test-Description"])[1]')}
    get testDesc2() { return $('(//android.view.ViewGroup[@content-desc="test-Description"])[2]')}

    //function
    async clicklanjutShop() {
        await this.lanjutShoppingbtn.click()
    }

    async clickremove() {
        await this.removebtn.click()
    }

    async clickcheckout() {
        await this.checkoutbtn.click()
    }
}

export default new CartPage()