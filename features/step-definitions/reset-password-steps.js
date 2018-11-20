

module.exports = function () {

    this.When(/^I press forgot password$/, function () {
        driver.sleep(4000);
        page.loginPage.ClickSigninLink();
        page.loginPage.checkLoginPage();
        return page.loginPage.clickForgotPassItem();   
    });

    this.When(/^I fill in Email user with "([^"]*)"$/, function (email) {
        return page.resetpasswordPage.fillEmail(email); 
    });

    this.When(/^I press reset button$/, function () {
        return page.resetpasswordPage.clickResetButton();      
    });

    this.Then(/^I check the confirmation message "([^"]*)"$/, function (keywords) {
        return page.resetpasswordPage.checkTheReset(keywords);  
    });

};
