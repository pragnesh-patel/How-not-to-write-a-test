

var GitHubPageObject = function(driver) {
  
  //if not using Jasmine then use Chai as the assertion and expectation tool:
  //var chai = require('chai');
  //var chaiAsPromised = require('chai-as-promised');
  //chai.use(chaiAsPromised);
  //var expect = chai.expect;

  var WebDriver = require('selenium-webdriver');
  var self = this;
  var driver = driver;

  this.get = function(webaddress) {
    //setup implicit wait and wait for elements on the page to load
    driver.manage().timeouts().implicitlyWait(30 * 1000);
    return driver.get(webaddress);
        
  };

  this.getSignupPage = function(){
    //return self.get(browser.params.devsite);

    return driver.findElement(WebDriver.By.linkText('Sign up')).click();
  }

  this.waitforelement= function(locator,timeout){

    driver.wait(function() {
      return driver.findElement(WebDriver.By.css(locator)).isDisplayed();
      }, timeout);
  }

  this.enterUsername = function(username){

    this.waitforelement('input#user_login',5000);
    return driver.findElement(WebDriver.By.css('input#user_login')).sendKeys(username);

  }

  this.getErrorMessage = function(){
    
    return driver.findElement(WebDriver.By.css('dd.error')).getText();

  }



}; //end of Angular Login
module.exports = GitHubPageObject;