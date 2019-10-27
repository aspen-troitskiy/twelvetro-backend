
const express = require('express');
const { addGame } = require('../../lib');
const { cacheSingleton } = require('../../lib');

const router = express.Router();

router.post('/new_game', (req, res) => {
  // req.
  const gameObject = addGame();
  res.send(gameObject);
});

router.post('/move/:gameId', (req, res) => {
  const cache = cacheSingleton.getInstance();
  const gameObject = cache[req.params.gameId];

  res.send(gameObject);
});


module.exports = router;
