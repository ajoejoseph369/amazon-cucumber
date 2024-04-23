const {$} = require("@wdio/globals");

const usernameTextBox = '#ap_email';
const continueBtn = '//input[@id="continue"]';
const passwordTextBox = '#ap_password';
const SignInbutton = '//input[@id="signInSubmit"]';

class LoginPage{
        
    async enterUsername(username){
        await $(usernameTextBox).setValue(username);
    }

    async clickContinue(){
        await $(continueBtn).click();
    }

    async enterPassword(password){
        await $(passwordTextBox).setValue(password);
    }

    async clickSignIn(){
        await $(SignInbutton).click()
    }

    async checkSignIn(){
        if(browser.getTitle() == 'Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
            return true;
        else   
            return false;
    }
}

module.exports = new LoginPage();

