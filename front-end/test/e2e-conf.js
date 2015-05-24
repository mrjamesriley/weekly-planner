exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    './e2e/*.js'
  ],

  onPrepare: function() {
    browser.driver.manage().window().setPosition(0,0);
    browser.driver.manage().window().setSize(1280,720);
  }
}
