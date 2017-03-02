# PhotoboxTest

install modules
===============

npm install --save-dev selenium-webdriver

npm install --save-dev geckodriver

npm install --save-dev cucumber << this will install v2.0+

npm install --save-dev request

npm install chai chai-as-promised



To run tests
============

from the source directory from the commandline:

To run GitHub UI test : ./node_modules/.bin/cucumber-js --tags=@gitui

To run GitHub API test: ./node_modules/.bin/cucumber-js --tags=@gitapi

It took about an hour to do, but needed more time to get the API testing right.

Note: I have attempted the API test but it does not work, looking to find out where I was going wrong.