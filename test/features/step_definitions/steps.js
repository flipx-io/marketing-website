const assert = require('assert');
const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
// const helpers = require("./helpers")
const puppeteer = require('puppeteer');
const scope = require('../support/scope');

setDefaultTimeout(60*1000);

const initBrowser = async() => {
  let browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    executablePath: process.env.CI === true ? process.env.PUPPETEER_EXEC_PATH : "",
    headless: process.env.CI === true ? true : false,
    devtools: false
  });

  let page = await browser.newPage();
  return [page, browser];
}

Given('I am on the homepage', async function() {
  [this.page, this.browser] = await initBrowser();
  const visit = await this.page.goto('https://flipx.io', {
    waitUntil: 'networkidle0'
  });
});

// Then('I should be on the {string} page', shouldBeOnPage);