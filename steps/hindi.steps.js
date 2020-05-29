const { Given, Then, When } = require('cucumber')
const assert = require('assert');


  Given('मैं {int} से शुरू  करता हूँ', function (input) {
    answer = input;
  });

  When('मैं {int} जोड़ता हूँ', function (input) {
    answer = answer + input;
  });

  Then('उत्तर {int} होना चाहिए', function (input) {
    assert.equal(answer, input);
  });