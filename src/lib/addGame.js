const uuidv1 = require('uuid/v1');

const cacheSingleton = require('./cacheSingleton');
const gameField = require('./gameField');

function addGame(playerInfo) {
  const cache = cacheSingleton.getInstance();

  const gameId = uuidv1();
  const gameObject = {
    gameId,
    gameField: gameField(),
    ...playerInfo,
  };

  cache[gameId] = gameObject;

  return gameObject;
}

module.exports = addGame;
