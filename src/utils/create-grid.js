function fillCellsAround(cellY, cellX, result) {
  for (let i = cellY - 1; i < cellY + 2; i += 1) {
    for (let x = cellX - 1; x < cellX + 2; x += 1) {
      const row = result[i];
      if (row && row[x] && row[x].value !== undefined && row[x].value !== 9) {
        row[x].value++;
      }
    }
  }
}

export default function(rows, cols, mines) {
  const result = [];
  let minesCount = 0;
  for (let rowIndex = 0; rowIndex < rows; rowIndex += 1) {
    result[rowIndex] = [];
    for (let colIndex = 0; colIndex < cols; colIndex += 1) {
      result[rowIndex][colIndex] = {
        value: 0,
        isHidden: true
      };
    }
  }
  while (mines > minesCount) {
    const mineIndex = Math.floor(Math.random() * rows * cols);
    const cellY = Math.floor((rows * cols) / mineIndex);
    const cellX = mineIndex % cols;
    if (
      result[cellY] &&
      result[cellY][cellX] &&
      result[cellY][cellX].value === 0
    ) {
      result[cellY][cellX].value = 9;
      fillCellsAround(cellY, cellX, result);
      minesCount++;
    }
  }
  return result;
}
