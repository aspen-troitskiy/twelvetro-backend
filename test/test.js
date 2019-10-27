/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable no-undef */
require('should');

describe('.env-test is loaded', function () {
  it('dotenv sets NODE_ENV variable to test', function () {
    process.env.NODE_ENV.should.be.exactly('test');
  });
});
