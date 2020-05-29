const { Given, Then, When } = require('cucumber')
const assert = require('assert');


  Given('నెను {int} తొ మొదలు పెట్టి', function (input) {
    answer = input;
  });

  When('సంక్య {int} ని కూడించి', function (input) {
    answer = answer + input;
  });

  Then('ఫలితంగా నాకు సంక్య {int} రావలెను', function (input) {
    assert.equal(answer, input);
  });