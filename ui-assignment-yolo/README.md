# Overview

This UI testing framework is designed to automate [https://hub88.io/](https://hub88.io/suppliers). Framework is designed using NodeJS, Javascript and Cypress.

# Technologies

Technologies used for this project are,
- NodeJS: 16.18.0
- Cypress: 10.10.0
- Allure plugin: 2.33.1

# Folder Structure

- e2e - Contains all the page objects and test cases.
- fixtures - Contains external static data that we want to use in the test files.
- support - It contains all the reusable behavior of the custom commands.

# Getting Started

Make sure you have NodeJS installed.

- clone the project from git
- open the terminal of your IDE
- on command line 
  - `npm install`
- To execute all the tests 
  - `npm test`

# Sample Execution Report ui test allure

![ui test allure.png](ui test allure.png)
![ui test results.png](ui test results.png)

In order to view allure report 

- Install Allure using Windows powershell (I have used in Windows 10)
  - `npm install -g allure-commandline`
- Once the execution is completed note that `allure-results` folder is generated in root
- if not run this command `npx cypress run --env allure=true`,
- In terminal type `allure generate`
- To view the report type `allure open`

## Future improvements

* CI/CD Integration (Jenkins)
