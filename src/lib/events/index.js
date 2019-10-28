
function generateNewCell(parentCell) {
  return {
    value: Math.floor(Math.random() * parentCell.value) + 1,
  };
}

function getCell(gameField, indexes) {
  const currentRow = gameField[indexes[0]];
  return currentRow[indexes[1]];
}

function isCellBlank(cell) {
  return cell.value === 0;
}

function areCellsEquil(first, second) {
  return first.value === second.value;
}

function isTargetTooFar(gameField, activeIndexes, targetIndexes) {
  const activeRowIndex = activeIndexes[0];
  const targetRowIndex = targetIndexes[0];
  const activeRowLength = gameField[activeRowIndex].length;
  const targetRowLength = gameField[targetRowIndex].length;
  const offset = activeRowLength > targetRowLength ? -1 : 1;

  const areColumnsTooFar = activeIndexes[1] !== targetIndexes[1]
    && activeIndexes[1] + offset !== targetIndexes[1];
  const areRowsTooFar = Math.abs(activeRowIndex - targetRowIndex) > 1;

  return areColumnsTooFar || areRowsTooFar;
}

function areCellsTheSame(first, second) {
  return first === second;
}

function validateMove(gameField, activeIndexes, targetIndexes) {
  const activeCell = getCell(gameField, activeIndexes);
  const targetCell = getCell(gameField, targetIndexes);
  const hasError = [
    isCellBlank(activeCell),
    !isCellBlank(targetCell) && !areCellsEquil(activeCell, targetCell),
    isTargetTooFar(gameField, activeIndexes, targetIndexes),
    areCellsTheSame(activeCell, targetCell),
  ].some(x => x);
  if (hasError) {
    throw new Error(`attempt to execute unacceptable move: activeIndexes ${activeIndexes}, targetIndexes: ${targetIndexes}`);
  }
}


function execute(gameObject, from, to) {
  const { gameField } = gameObject;
  try {
    validateMove(gameField, from, to);
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  execute,
  generateNewCell,
};
