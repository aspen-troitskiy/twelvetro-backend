const uuidv1 = require('uuid/v1');

const cacheSingleton = require('./cacheSingleton');
const GameField = require('./gameField');

function addGame(playerInfo) {
  const cache = cacheSingleton.getInstance();

  const gameId = uuidv1();
  const gameObject = {
    gameId,
    gameField: new GameField(),
    ...playerInfo,
  };

  cache[gameId] = gameObject;

  return gameObject;
}

module.exports = addGame;
