module.exports = {

    elements: {
        firstnameInput: by.name('firstname'),
        lastnameInput: by.name('lastname'),
        saveButton: by.id("my_personal_infoSubmit"),
        confirmationMessage: by.css("div.ajaxFlash.success")
    },

    /**
     * Enter firstname and lastname and click on save
     * @param {string} firstname 
     * @param {string} lastname 
     */

    fillfirstname: function(firstname) {
        var selector = page.accountPage.elements.firstnameInput;
        driver.findElement(selector).clear();
        return driver.findElement(selector).sendKeys(firstname);
    },

    fillLastname: function(lastname) {
        var selector = page.accountPage.elements.lastnameInput;
        driver.findElement(selector).clear();
        return driver.findElement(selector).sendKeys(lastname);
    },

    clickSaveUpdate: function () {
        var selector = page.accountPage.elements.saveButton;
        return driver.findElement(selector).click();
    },

     /**
     * Verify confirmation message of reset
     */
    checkConfirmation:function(text) {
        var selector = page.accountPage.elements.confirmationMessage;
        driver.sleep(1000);
        return driver.findElement(selector)
        .getText().then(name => {
            assert.equal(text, name);
        });   
    }
};
