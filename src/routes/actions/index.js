
const express = require('express');

const router = express.Router();

// base routes
router.post('/', (req, res) => {
  // req.
  res.send('actions');
});


module.exports = router;
