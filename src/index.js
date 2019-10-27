
const express = require('express');
const routes = require('./routes');
const setup = require('./setup');
const { name: svcName, version } = require('../package.json');

const app = express();

setup();

app.use('/', routes.base);

const server = app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.info({ address: server.address() }, `${svcName} v${version} is running on port: ${process.env.PORT}`);
});

module.exports = app;
