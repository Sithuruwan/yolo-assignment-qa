# Overview

This API automation framework is designed to automate APIs of [https://hub88.io/](https://hub88.io/). Framework is designed using NodeJS, Javascript and Cypress.

# Technologies

Technologies used for this project are,
- NodeJS: 16.18.0
- Cypress: 10.10.0
- Allure plugin: 2.33.1

# Folder Structure

- e2e - Contains all the automated API test cases.
- fixtures - Contains external static data that we want to use in the test files.
- support - Under the command.js, it contains all the reusable API request methods (POST, GET and DELETE) as custom commands.

# Getting Started

Make sure you have NodeJS installed.

- clone the project from git
- open the terminal of your IDE
- on command line 
  - `npm install`
- To execute all the tests 
  - `npm test`

# Sample Execution Reports

![api test allure.png](api test allure.png)
![api test results.png](api test results.png)

In order to view allure report 

- Install Allure using Windows powershell (I have used in Windows 10)
  - `npm install -g allure-commandline`
- Once the execution is completed note that `allure-results` folder is generated in root
- - if not run this command `npx cypress run --env allure=true`,
- In terminal type `allure generate`
- To view the report type `allure open`

## Future improvements

* CI/CD Integration (Jenkins)
