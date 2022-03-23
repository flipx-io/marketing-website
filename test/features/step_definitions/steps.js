const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
// const helpers = require("./helpers")
const puppeteer = require('puppeteer');
const scope = require('../support/scope');

setDefaultTimeout(60*1000);

const initBrowser = async() => {
  let browser = await puppeteer.launch({
    args: ['--no-sandbox'],
    executablePath: process.env.CI === true ? process.env.PUPPETEER_EXEC_PATH : "",
    headless: true,
    devtools: false
  });

}

Given('I am on the homepage', visitHomePage);

// Then('I should be on the {string} page', shouldBeOnPage);