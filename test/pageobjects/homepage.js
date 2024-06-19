import {$} from '@wdio/globals'

class HomePage {
    get mainTitle() { return $('//android.widget.TextView[@text="PRODUCTS"]')}
    get testMenu() { return $('~test-Menu')}
    get testLOGOUT() { return $('~test-LOGOUT')}
    get testCartbtn() { return $('~test-Cart')}

    get itemGroup0() { return $('(//android.view.ViewGroup[@content-desc="test-Item"])')}
    get itemGroup1() { return $('(//android.view.ViewGroup[@content-desc="test-Item"])[1]')}
    get itemGroup2() { return $('(//android.view.ViewGroup[@content-desc="test-Item"])[2]')}
    get itemGroup3() { return $('(//android.view.ViewGroup[@content-desc="test-Item"])[3]')}
    get itemGroup4() { return $('(//android.view.ViewGroup[@content-desc="test-Item"])[4]')}
    get itemGroup5() { return $('(//android.view.ViewGroup[@content-desc="test-Item"])[5]')}
    get itemGroup6() { return $('(//android.view.ViewGroup[@content-desc="test-Item"])[6]')}

    get add2cartbtn0() { return $('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])')}
    get add2cartbtn1() { return $('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[1]')}
    get add2cartbtn2() { return $('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[2]')}
    get add2cartbtn3() { return $('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[3]')}
    get add2cartbtn4() { return $('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[4]')}
    get add2cartbtn5() { return $('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[5]')}
    get add2cartbtn6() { return $('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[6]')}

    get cartItemdots1() { return $('//android.widget.TextView[@text="1"]')}
    get cartItemdots2() { return $('//android.widget.TextView[@text="2"]')}

    //functions
    async clickLOGOUT() {
        await this.testMenu.click()
        await this.testLOGOUT.click()
    }

    async itemGroupclick(grouplist) {
        let itemGrouplist = [
            this.itemGroup0,
            this.itemGroup1,
            this.itemGroup2,
            this.itemGroup3,
            this.itemGroup4,
            this.itemGroup5,
            this.itemGroup6
        ]
        await itemGrouplist[grouplist].click()
    }

    async add2cartclick(index) {
        let add2cartbtn = [this.add2cartbtn0, this.add2cartbtn1, this.add2cartbtn2, this.add2cartbtn3, this.add2cartbtn4]
        await add2cartbtn[index].click()
    }

    async cartClick() {
        await this.testCartbtn.click()
    }
}

export default new HomePage()