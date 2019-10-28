const blankCellFactory = require('./blankCellFactory');

function gameField() {
  return [
    new Array(3).fill(undefined).fill(undefined).map(blankCellFactory),
    new Array(4).fill(undefined).map(blankCellFactory),
    new Array(5).fill(undefined).map(
      (item, i) => {
        if (i === 2) {
          return { value: 3 };
        }
        return blankCellFactory();
      },
    ),
    new Array(4).fill(undefined).map(blankCellFactory),
    new Array(3).fill(undefined).map(blankCellFactory),
  ];
}

module.exports = gameField;
