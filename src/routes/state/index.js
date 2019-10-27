
const express = require('express');

const router = express.Router();

router.get('/:gameId', (req, res) => {
  res.send(`state route ${req.params.gameId}`);
});

module.exports = router;
