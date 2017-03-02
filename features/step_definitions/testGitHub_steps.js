
//npm install --save-dev selenium-webdriver
//npm install --save-dev geckodriver
//npm install --save-dev cucumber << this will install v2.0+
//npm install chai chai-as-promised

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;
var request = require('request');
var WebDriver = require('selenium-webdriver')
var {defineSupportCode} = require('cucumber');

var bodyObj;

defineSupportCode(function({Given, When, Then}) {
 
 	Given('I go to the page {page:stringInDoubleQuotes}', function (page) {
         
         return this.gitHubPageobject.get(page);
    });

 	Given('navigate to the Sign up page', function () {
 
         return this.gitHubPageobject.getSignupPage();
    });

	When('I enter the username {username:stringInDoubleQuotes}', function (username) {
         
         return this.gitHubPageobject.enterUsername(username);

	});

 	Then('I should see the username is taken', function () {
         // Write code here that turns the phrase above into concrete actions
         //callback(null, 'pending');
         return expect(this.gitHubPageobject.getErrorMessage()).to.eventually.equal('Username is already taken')
    });

    Given('pass {username:stringInDoubleQuotes} to the Github API {gitapi:stringInDoubleQuotes}', function (username, gitapi) {
         // Write code here that turns the phrase above into concrete actions
        that = this;
         return request.get({url:gitapi + username}, 
         		function (error, response, body) {
  						expect(response.statusCode).to.equal(200);
  						that.bodyObj = JSON.parse(body);
  				});  
    });

    Then('I should see the {username:stringInDoubleQuotes} name in the request body', function (username, callback) {
         // Write code here that turns the phrase above into concrete actions
       
         expect(bodyObj.name).to.equal("photobox");
         callback(null, 'done');
    });




});
