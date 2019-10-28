
function generateNewValue(parentValue) {
  return Math.floor(Math.random() * parentValue - 1) + 1; // TODO
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
  const areRowsTheSame = activeIndexes[0] === targetIndexes[0];
  const offset = activeRowLength > targetRowLength ? -1 : 1;

  let areColumnsTooFar = false;
  if (areRowsTheSame) {
    areColumnsTooFar = activeIndexes[1] - offset !== targetIndexes[1]
    && activeIndexes[1] + offset !== targetIndexes[1];
  } else {
    areColumnsTooFar = activeIndexes[1] !== targetIndexes[1]
    && activeIndexes[1] + offset !== targetIndexes[1];
  }
  const areRowsTooFar = Math.abs(activeRowIndex - targetRowIndex) > 1;

  return areColumnsTooFar || areRowsTooFar;
}

function areCellsTheSame(first, second) {
  return first === second;
}

function validateMove(gameField, activeIndexes, targetIndexes) {
  const activeCell = getCell(gameField, activeIndexes);
  const targetCell = getCell(gameField, targetIndexes);
  const isValid = [
    isCellBlank(activeCell),
    !isCellBlank(targetCell) && !areCellsEquil(activeCell, targetCell),
    isTargetTooFar(gameField, activeIndexes, targetIndexes),
    areCellsTheSame(activeCell, targetCell),
  ].every(x => x === false);
  console.log([
    isCellBlank(activeCell),
    !isCellBlank(targetCell) && !areCellsEquil(activeCell, targetCell),
    isTargetTooFar(gameField, activeIndexes, targetIndexes),
    areCellsTheSame(activeCell, targetCell),
  ]);
  if (isValid === false) {
    throw new Error(`attempt to execute unacceptable move: activeIndexes ${activeIndexes}, targetIndexes: ${targetIndexes}`);
  }
  return isValid;
}

function mutateGameField(gameField, activeIndexes, targetIndexes) {
  const activeCell = getCell(gameField, activeIndexes);
  const targetCell = getCell(gameField, targetIndexes);
  if (targetCell.value === 0) {
    targetCell.value = generateNewValue(activeCell.value);
  } else if (activeCell.value === targetCell.value) {
    targetCell.value += 1;
    activeCell.value = 0;
  }
}

function execute(gameObject, activeIndexes, targetIndexes) {
  const { gameField } = gameObject;
  let isValid = false;
  try {
    isValid = validateMove(gameField, activeIndexes, targetIndexes);
  } catch (err) {
    console.error(err);
  }
  if (isValid === true) {
    mutateGameField(gameField, activeIndexes, targetIndexes);
  }
}

module.exports = {
  execute,
  generateNewValue,
};
