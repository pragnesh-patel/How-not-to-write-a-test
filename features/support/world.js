
require('geckodriver'); //for firefox

var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

var GitHubPageObject = require('../../pageObjects/githubpageobject.js');

function CustomWorld() {
  
  this.driver = new seleniumWebdriver.Builder().forBrowser('firefox').build();
  
  this.gitHubPageobject = new GitHubPageObject(this.driver);

};

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(CustomWorld)
})
