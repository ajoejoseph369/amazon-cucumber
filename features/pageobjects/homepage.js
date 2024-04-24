const {$} = require("@wdio/globals");

const signInbtn = '#nav-link-accountList-nav-line-1';
const searchBar = "//input[@id='twotabsearchtextbox']";
const searchIcon = "//input[@id='nav-search-submit-button']"

class Homepage{

    async getUrl(){
        await browser.url('https://www.amazon.in');
    }

    async clickSignIn(){
        await $(signInbtn).click();
    }

    async checkRedirection(){
        if(browser.getTitle() == 'Amazon Sign In')
            return true;
        else
            return false;
    }

    async searchProduct(product_details){
        await $(searchBar).setValue(product_details);
    }

    async clickSearchBtn(){
        await $(searchIcon).click();
    }

}

module.exports = new Homepage();