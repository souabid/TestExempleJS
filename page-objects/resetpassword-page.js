module.exports = {
 
    elements: {
        emailInput: by.name('email'),
        resetButton: by.xpath("//button[@type='submit']"),
        confirmationmessage: by.xpath("(.//*[normalize-space(text()) and normalize-space(.)=concat('S', \"'\", 'inscrire')])[1]/following::h1[1]")
    },

    /**
     * enter the user's email and press the reset button
     * @param {string} email
     */

    fillEmail: function (email) {
        var selector = page.resetpasswordPage.elements.emailInput;
        driver.sleep(2000);
        return driver.findElement(selector).sendKeys(email);
    },

    clickResetButton: function () {
        var selector = page.resetpasswordPage.elements.resetButton;
        return driver.findElement(selector).click();
    },

    /*
     * check the confirmation of the sending of email
     */
    checkTheReset:function(text) {
        var selector = page.resetpasswordPage.elements.confirmationmessage;
        driver.sleep(1000);
        return driver.findElement(selector)
        .getText().then(name => {
            assert.equal(text, name);
        });   
    }

};