const uuidv1 = require('uuid/v1');

const cacheSingleton = require('./cacheSingleton');

function addGame(playerInfo) {
  const cache = cacheSingleton.getInstance();

  const gameId = uuidv1();
  const gameObject = {
    gameId,
    ...playerInfo,
  };

  cache[gameId] = gameObject;

  return gameObject;
}

module.exports = addGame;
