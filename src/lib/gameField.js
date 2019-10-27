const blankCellFactory = require('./blankCellFactory');

function GameField() {
  this.firstRow = new Array(3).fill(undefined).fill(undefined).map(blankCellFactory);
  this.secondRow = new Array(4).fill(undefined).map(blankCellFactory);
  this.thirdRow = new Array(5).fill(undefined).map(
    (item, i) => {
      if (i === 2) {
        return { value: 3 };
      }
      return blankCellFactory();
    },
  );
  this.fourthRow = new Array(4).fill(undefined).map(blankCellFactory);
  this.fifthRow = new Array(3).fill(undefined).map(blankCellFactory);
  return this;
}

module.exports = GameField;
