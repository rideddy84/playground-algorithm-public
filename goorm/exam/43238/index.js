// Run by Node.js

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  const num = Number(line);
  let isPrime = true;
  let checkNum = num;
  if (checkNum > 3 && (checkNum % 2 === 0 || checkNum % 3 === 0)) {
    isPrime = false;
    console.log(isPrime ? 'True' : 'False');
    rl.close();
    return;
  }
  checkNum = 5;
  const targetNum = Math.floor(num / 2) - 1;

  while (checkNum < targetNum) {
    if (num % checkNum === 0) {
      isPrime = false;
      break;
    }
    checkNum++;
    while (checkNum % 2 === 0 || checkNum % 3 === 0 || checkNum % 5 === 0) {
      checkNum++;
    }
  }

  console.log(isPrime ? 'True' : 'False');

  rl.close();
}).on('close', () => {
  process.exit();
});
