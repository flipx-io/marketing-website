const scope = require('./scope');
const puppeteer = require('puppeteer');

const visitHomePage = async () => {
  // console.log(scope.driver);
  // if ( !scope.browser )
  //   scope.browser = await scope.driver.launch({headless: true});
  // scope.context.currentPage = await scope.browser.newPage();
  // console.log('currentPage' + scope.context.currentPage);
  // scope.context.currentPage.setViewport({ width: 1280, height: 1024 });
  // console.log('test1');
  // const url = 'http://flipx.io';
  // console.log('test1');
  // const visit = await scope.context.currentPage.goto(url, {
  //   waitUntil: 'networkidle2'
  // });
  // return visit;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  console.log('here');
  console.log(page);
  const visit = await page.goto('http://flipx.io', {
    waitUntil: 'networkidle2'
  });
  return visit;
};

const shouldBeOnPage = async () => {
  return 'is on page';
}

module.exports = {
  visitHomePage,
  shouldBeOnPage
};