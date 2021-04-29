// Run by Node.js
const readline = require('readline');

(async () => {
  const rl = readline.createInterface({ input: process.stdin });
  let n = 0;
  let cards;
  for await (const line of rl) {
    if (n === 0) {
      n = parseInt(line);
      continue;
    }
    if (!cards) {
      cards = line.split(' ').map((l) => parseInt(l));
    }
    rl.close();
  }

  const queue = cards.map((c) => [c]);

  const p = [];
  while (queue.length) {
    const first = queue.shift();
    for (let i = 0; i < n; i++) {
      const card = cards[i];
      if (first.indexOf(card) > -1) {
        continue;
      } else {
        const newDeck = [...first, card];
        if (newDeck.length < n) { queue.push(newDeck); } else {
          p.push(newDeck);
        }
      }
    }
  }

  let max = 0;
  p.forEach((deck) => {
    let sum = 0;
    deck.forEach((num, index) => {
      let value = num * (index + 1);
      if (index % 2 === 1) {
        value *= -1;
      }
      sum += value;
    });
    if (sum > max) {
      max = sum;
    }
  });

  console.log(max);

  process.exit();
})();
