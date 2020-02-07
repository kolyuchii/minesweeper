export default function(collY, collX, grid) {
  grid = JSON.parse(JSON.stringify(grid));
  if (grid[collY][collX].value === 9) {
    grid[collY][collX].isBlownUp = true;
  }
  const queue = [[collY, collX]];
  const value = grid[collY][collX].value;
  grid[collY][collX].isHidden = false;
  while (queue.length > 0) {
    const item = queue.shift();
    const directions = [
      [item[0] + 1, item[1]],
      [item[0], item[1] + 1],
      [item[0] - 1, item[1]],
      [item[0], item[1] - 1]
    ];
    for (let i = 0; i < directions.length; i += 1) {
      const dir = directions[i];
      if (
        dir[0] < 0 ||
        dir[0] > grid.length - 1 ||
        dir[1] < 0 ||
        dir[1] > grid[0].length - 1 ||
        grid[dir[0]][dir[1]].isHidden === false ||
        grid[dir[0]][dir[1]].value !== value
      ) {
        continue;
      }
      grid[dir[0]][dir[1]].isHidden = false;
      queue.push(dir);
    }
  }
  return grid;
}
