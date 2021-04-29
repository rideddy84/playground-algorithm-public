// Run by Node.js

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  const numArr = line.split('').map((l) => Number(l));
  const max = Math.max(...numArr);
  let n = 0;
  for (let i = max + 1; i <= 36; i++) {
    const converted = parseInt(line, i) ** 0.5;
    if (converted === parseInt(converted)) {
      n = i;
      break;
    }
  }
  console.log(n);
  rl.close();
}).on('close', () => {
  process.exit();
});
