// Run by Node.js
const readline = require('readline');

(async () => {
  const rl = readline.createInterface({ input: process.stdin });
  let personCount;
  let length;
  let timeSeries;
  let confirmed;
  for await (const line of rl) {
    if (!personCount) {
      const temp = line.split(' ');
      personCount = parseInt(temp[0]);
      length = parseInt(temp[1]);
      continue;
    }
    if (!timeSeries) { timeSeries = line.split(' ').map((l) => parseInt(l)); continue; }
    confirmed = parseInt(line);

    rl.close();
  }

  const hashTable = {};
  timeSeries.forEach((t, index) => {
    const isIn = t > 0;
    const person = Math.abs(t);
    if (hashTable[person]) {
      if (isIn) {
        hashTable[person].push({ from: index, to: null });
      } else {
        hashTable[person].forEach((item, index2) => {
          if (!item.to) {
            hashTable[person][index2].to = index;
          }
        });
      }
    } else {
      hashTable[person] = [{ from: index, to: null }];
    }
  });

  const found = [];
  const confirmTs = hashTable[confirmed];

  if (confirmTs) {
    confirmTs.forEach((ts) => {
      const {
        from,
        to,
      } = ts;
      for (let i = 1; i < personCount + 1; i++) {
        if (i === confirmed) {
          continue;
        }
        const targetTs = hashTable[i];
        if (targetTs) {
          targetTs.forEach((tts) => {
            if ((tts.from >= from && tts.from <= to) || (tts.from < from && tts.to > to)) {
              found.push(i);
            }
          });
        }
      }
    });
  }

  if (found.length > 0) {
    console.log(Array.from(new Set(found)).sort((a, b) => a - b).join(' '));
  } else {
    console.log(-1);
  }

  process.exit();
})();
