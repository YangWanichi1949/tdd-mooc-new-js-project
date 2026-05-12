export function toRLE(cells) {
  const maxX = Math.max(...cells.map(([x]) => x));
  const maxY = Math.max(...cells.map(([, y]) => y));

  let body = "";

  for (let y = 0; y <= maxY; y++) {
    if (y > 0) {
      body += "$";
    }

    for (let x = 0; x <= maxX; x++) {
      const alive = cells.some(([cx, cy]) => cx === x && cy === y);

      body += alive ? "o" : "b";
    }
  }

  return `x = ${maxX + 1}, y = ${maxY + 1}\n${body}!`;
}