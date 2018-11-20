

module.exports = function () {

 
    this.Given(/^I am on the login page$/, function () {
        return helpers.loadPage(page.loginPage.url).then(function() {
            driver.manage().window().maximize();	
        });
    });

    this.When(/^I fill in Email with "([^"]*)"$/, function (email) {
        page.loginPage.verifyelementpage();
        return page.loginPage.fillEmail(email);
       
    });

    this.When(/^I fill in Password with "([^"]*)"$/, function (password) {
        return page.loginPage.fillPassword(password);   
    });

    this.When(/^I press Login$/, function () {
        return page.loginPage.clickLoginItem();
    });
    this.Given(/^I am on the home page with title "([^"]*)"$/, function (pageTitle) {
        return page.orderPage.titleOrderPage(pageTitle);
    });

    this.Then(/^I should be connected$/, function () {
        return page.orderPage.waitforelements();
    });

    
    this.When(/^I sign out of the app$/, function () {
        return page.orderPage.clickSingoutItem();              
    });
        
    this.Then(/^I should be redirected to login page$/, function () {  
        return page.loginPage.checkLoginPage();
    });

};
