export function nextGeneration(cells) {
  const world = new Set(cells.map(cellKey));
  const candidates = new Set();

  for (const [x, y] of cells) {
    candidates.add(cellKey([x, y]));

    for (const neighbor of neighborsOf([x, y])) {
      candidates.add(cellKey(neighbor));
    }
  }

  const nextCells = [];

  for (const key of candidates) {
    const cell = parseCellKey(key);
    const alive = world.has(key);
    const neighbors = countLiveNeighbors(cell, world);

    if (alive && (neighbors === 2 || neighbors === 3)) {
      nextCells.push(cell);
    }

    if (!alive && neighbors === 3) {
      nextCells.push(cell);
    }
  }

  return sortCells(nextCells);
}

function countLiveNeighbors(cell, world) {
  return neighborsOf(cell).filter((neighbor) => world.has(cellKey(neighbor))).length;
}

function neighborsOf([x, y]) {
  return [
    [x - 1, y - 1],
    [x, y - 1],
    [x + 1, y - 1],
    [x - 1, y],
    [x + 1, y],
    [x - 1, y + 1],
    [x, y + 1],
    [x + 1, y + 1],
  ];
}

function cellKey([x, y]) {
  return `${x},${y}`;
}

function parseCellKey(key) {
  return key.split(",").map(Number);
}

function sortCells(cells) {
  return cells.toSorted((a, b) => a[1] - b[1] || a[0] - b[0]);
}