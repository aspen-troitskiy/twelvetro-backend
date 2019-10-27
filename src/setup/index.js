
const assert = require('assert');

module.exports = () => {
  const requiredVars = [
    'NODE_ENV',
    'PORT',
  ];

  requiredVars.forEach(variable => assert.ok(process.env[variable], `${variable} must be defined`));
};
