export function parseRLE(rle) {
  const cells = [];
  let x = 0;
  let y = 0;

  for (const char of rle) {
    if (char === "o") {
      cells.push([x, y]);
      x += 1;
    }

    if (char === "b") {
      x += 1;
    }

    if (char === "$") {
      x = 0;
      y += 1;
    }

    if (char === "!") {
      break;
    }
  }

  return cells;
}