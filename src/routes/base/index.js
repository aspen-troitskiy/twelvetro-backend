
const express = require('express');

const router = express.Router();

// base routes
router.get('/', (req, res) => {
  res.send('state route');
});

module.exports = router;
