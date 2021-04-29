// Run by Node.js

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17, 19];
  const numLine = Number(line);

  const candidates = { 1: [[1]] };
  for (let i = 2; i < numLine + 1; i++) {
    const tempArr = candidates[i - 1];
    tempArr.forEach((arr) => {
      for (let j = 2; j < numLine + 1; j++) {
        if (arr.indexOf(j) === -1 && primeNumbers.indexOf(arr[arr.length - 1] + j) > -1) {
          if (candidates[i]) {
            candidates[i].push([...arr, j]);
          } else {
            candidates[i] = [[...arr, j]];
          }
        }
      }
    });
  }
  candidates[numLine].forEach((l) => {
    if (primeNumbers.indexOf(l[l.length - 1] + 1) > -1) { console.log(l.join(' ')); }
  });
  rl.close();
}).on('close', () => {
  process.exit();
});
