
module.exports = {

    url: 'https://welcome.chauffeur-prive.com',

    elements: {
        emailInput: by.name('email'),
        passwordInput: by.name('password'),
        loginButton: by.xpath("//button[@type='submit']"),
        SigninLink: by.xpath("//a[contains(@href, '/signin')]"),
        messageLoginConfirmation: by.xpath("//div[@id='root']/div/main/div/div/header/p"),
        cookieItem: by.xpath("//div[@id='root']/div/div/button"),
        forgotPassItem: by.xpath("//*[@id='root']/div/main/div/div/form/div[3]/a")
    },

    /**
     * enters email and password and presses enter
     * @param {string} email
     * @param {string} password
     */
  
    fillEmail: function (email) {

        var selector = page.loginPage.elements.emailInput;
        driver.sleep(5000);
        return driver.findElement(selector).sendKeys(email);
    },
    
    fillPassword: function (password) {
        var selector = page.loginPage.elements.passwordInput;
        return driver.findElement(selector).sendKeys(password);
    },

    clickLoginItem: function () {
        var selector = page.loginPage.elements.loginButton;
        return driver.findElement(selector).click();
    },

    /**
     * check presence the input element of the page
     */
    verifyelementpage: function(){
        var selector = page.loginPage.elements.emailInput;
        driver.wait(function () {
            return driver.isElementPresent(selector);
        }, 10000).catch(function(e){
            console.log('Catching Error');
        });
    },

    /**
     * Verify presence element in login page
     */
    checkLoginPage: function() {
        return driver.wait(until.elementsLocated(by.partialLinkText("S'INSCRIRE")), 10000);
    },

    /**
     * Check the message on login page
     */
    assertConnexion:function() {
        var selector = page.loginPage.elements.messageLoginConfirmation;
        driver.sleep(2000);
        driver.findElement(selector)
            .getText().then(name => {
            assert.equal('Heureux de vous revoir !', name);
        });

    },
    
    /**
     * Click in sign in link
     */
    ClickSigninLink: function(){
        var selector = page.loginPage.elements.SigninLink;
        driver.findElement(selector).click();
        driver.sleep(3000);
        return driver.wait(until.elementsLocated(by.partialLinkText("S'INSCRIRE")), 10000);
    },

    /**
     * Click in item forget password
     */
    clickForgotPassItem: function(){
        var selector = page.loginPage.elements.cookieItem;
        driver.findElement(selector).click();
        driver.sleep(3000);
        return driver.findElement(page.loginPage.elements.forgotPassItem).click();
    }

};