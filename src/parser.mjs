export function parseRLE(rle) {
  const cells = [];
  let x = 0;
  let y = 0;
  let count = "";

  for (const char of rle) {
    if (isDigit(char)) {
      count += char;
    }

    if (char === "o") {
      const repetitions = numberOrOne(count);

      for (let i = 0; i < repetitions; i++) {
        cells.push([x, y]);
        x += 1;
      }

      count = "";
    }

    if (char === "b") {
      x += numberOrOne(count);
      count = "";
    }

    if (char === "$") {
      x = 0;
      y += numberOrOne(count);
      count = "";
    }

    if (char === "!") {
      break;
    }
  }

  return cells;
}

function isDigit(char) {
  return char >= "0" && char <= "9";
}

function numberOrOne(count) {
  return count === "" ? 1 : Number(count);
}