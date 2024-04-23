const {$} = require("@wdio/globals");

const signInbtn = '#nav-link-accountList-nav-line-1';
// const title = '//title[@dir="ltr"]';


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
}

module.exports = new Homepage();