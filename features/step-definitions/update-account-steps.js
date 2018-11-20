
module.exports = function () { 

    this.When(/^I select "([^"]*)" for updating my profile$/, function (textlink) {
        return page.orderPage.clickAccountItem(textlink);
    });

    this.Then(/^My profile should be updated with firstname "([^"]*)" and lastname "([^"]*)"$/, function (firstname,lastname) {
        page.accountPage.fillfirstname(firstname);
        page.accountPage.fillLastname(lastname);
        return page.accountPage.clickSaveUpdate();
    });

    this.Then(/^I check confimation message "([^"]*)"$/, function (keyword) {

        return page.accountPage.checkConfirmation(keyword);
    });
};
