
const express = require('express');
const { addGame, cacheSingleton } = require('../../lib');
const { execute } = require('../../lib/events');

const router = express.Router();

router.post('/new_game', (req, res) => {
  const gameObject = addGame();
  res.send(gameObject);
});

router.post('/move', (req, res) => {
  const { from, to, gameId } = req.body;
  const cache = cacheSingleton.getInstance();
  const gameObject = cache[gameId];

  execute(gameObject, from, to);
  res.send(gameObject);
});


module.exports = router;
