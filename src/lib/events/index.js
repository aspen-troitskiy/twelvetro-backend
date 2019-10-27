
function generateNewCell(parentCell) {
  return {
    value: Math.floor(Math.random() * parentCell.value) + 1,
  };
}

function execute(gameObject, from, to) {
  console.log({ from, to, thirdRow: gameObject.gameField.thirdRow });
}

module.exports = {
  execute,
  generateNewCell,
};
