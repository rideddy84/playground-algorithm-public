// Run by Node.js

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let size = 0;
let target = null;
const ways = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]];
const queue = [];
rl.on('line', (line) => {
  if (size === 0) { size = parseInt(line); return; }
  if (queue.length === 0) {
    queue.push(line.split(' ').map((item) => Number(item)));
    return;
  }
  if (target === null) {
    target = line.split(' ').map((item) => Number(item));
  }

  const lengthHash = {};
  let nextHashKey = null;

  while (queue.length) {
    const [x, y] = queue.shift();

    if (x === target[0] && y === target[1]) {
      console.log(lengthHash[`${x}${y}`] || 0);
      rl.close();
    }

    for (let i = 0; i < ways.length; i++) {
      const [moveX, moveY] = ways[i];
      const nextX = x + moveX;
      const nextY = y + moveY;
      if (nextX >= size || nextY >= size || nextX < 0 || nextY < 0) {
        continue;
      }
      nextHashKey = `${nextX}${nextY}`;
      if (lengthHash[nextHashKey]) {
        continue;
      }
      lengthHash[nextHashKey] = (lengthHash[`${x}${y}`] || 0) + 1;
      queue.push([nextX, nextY]);
    }
  }
}).on('close', () => {
  process.exit();
});
