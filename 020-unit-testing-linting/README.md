## Why are we having this lecture?

# What are unit tests? Why might we want unit tests in our code?

## Setting Up Unit Test
* node package manage (npm)
* `npm init`
* `npm install jest`
* `npm test` It will run all files with the extention `.test.js`

## Write a function, then write the test 
`const file = require(`./index`);`
`test('Describe the test here', () => {});``

## (Note taking part) Reading and Understanding Test Cases 

# What is linting? Why might we want to use a linter?

## Setting Up Linting 
* `npm install eslint`
* `eslint --init` and go through the questions
* run `eslint <file-name>` to lint the file of your choice

## (Note taking part) Changing the linting rules
* Rules are stored in the .eslintrc hidden file