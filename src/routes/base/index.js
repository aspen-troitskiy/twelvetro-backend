
const express = require('express');

const router = express.Router();

// base routes
router.get('/', (req, res) => {
  res.send(`Hello from base route, nodejs app is in ${process.env.NODE_ENV} mode`);
});

module.exports = router;
