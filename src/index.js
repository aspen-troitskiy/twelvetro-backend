
const express = require('express');
const { actions, base, state } = require('./routes');
const setup = require('./setup');
const { name: svcName, version } = require('../package.json');

const app = express();

setup();

app.use('/', base);
app.use('/actions', actions);
app.use('/state', state);

const server = app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.info({ address: server.address() }, `${svcName} v${version} is running on port: ${process.env.PORT}`);
});

module.exports = app;
