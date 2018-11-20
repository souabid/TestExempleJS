
module.exports = {

    elements: {
        disconnectLink: by.xpath("//a[contains(text(),'Déconnexion')]"),
        accountItem: by.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Commander'])[1]/following::a[1]")
    },

    /**
     * Verify title page
     * @param {string} expectedTitle
     */
    titleOrderPage: function(expectedTitle) {
        return driver.getTitle().then(function(pageTitle) {
            expect(pageTitle).to.contain(expectedTitle);
        });
    },

    /**
     * the user click on the account element to modify his profile
     * @param {string} textlink
     */
    clickAccountItem: function(textlink) {
        driver.wait(until.elementsLocated(by.partialLinkText(textlink)), 10000);
        return driver.findElement(page.orderPage.elements.accountItem).click();
    },

    /*
     * wait for element 
     */
    waitforelements: function(){
          return driver.wait(until.elementsLocated(by.partialLinkText('Commander')), 10000);
    },
    
    /*
     * the user sign out
     */
    clickSingoutItem: function () {
        var selector = page.orderPage.elements.disconnectLink;
        return driver.findElement(selector).click();
    },

};