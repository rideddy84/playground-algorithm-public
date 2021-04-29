// Run by Node.js

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  const [a, b] = line.split(' ');
  console.log(a >> b);
  console.log(a << b);
  rl.close();
}).on('close', () => {
  process.exit();
});
