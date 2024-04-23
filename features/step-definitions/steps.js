const { Given , When , Then } = require("@wdio/cucumber-framework");

const HomePage = require('../pageobjects/homepage.js');
const LoginPage = require('../pageobjects/loginpage.js');

Given(/^user is on the homepage$/, async () => {
	await HomePage.getUrl();
});

When(/^user clicks sign in$/, async () => {
	await HomePage.clickSignIn();
});

Then(/^user is redirected to login page$/, async () => {
	await HomePage.checkRedirection();
});

Given(/^user is on the login page$/, async () => {
	return true;
});

When(/^user enters (.*) and clicks on continue button$/, async (username) => {
	await LoginPage.enterUsername(username);
    await LoginPage.clickContinue();
});

Then(/^user enters (.*) and clicks on sign in button$/, async (password) => {
	await LoginPage.enterPassword(password);
    await LoginPage.clickSignIn();
});

Then(/^user is redirected to homepage$/, async () => {
	await LoginPage.checkSignIn();
});
