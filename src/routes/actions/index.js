
const express = require('express');
const { addGame } = require('../../lib');

const router = express.Router();

// base routes
router.post('/new_game', (req, res) => {
  // req.
  const gameObject = addGame();
  res.send(gameObject);
});


module.exports = router;
