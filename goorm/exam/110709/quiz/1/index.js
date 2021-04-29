// Run by Node.js

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let personCount; let
  relationCount;
let peopleArray;
const hashTable = {};
let lineCount = 0;
rl.on('line', (line) => {
  if (!personCount) {
    const temp = line.split(' ');
    personCount = parseInt(temp[0]);
    relationCount = parseInt(temp[1]);
    return;
  }
  if (!peopleArray) {
    peopleArray = line.split(' ');
    return;
  }
  if (lineCount < relationCount) {
    const [f1, f2] = line.split(' ');
    if (hashTable[f1]) {
      hashTable[f1].push(f2);
    } else {
      hashTable[f1] = [f2];
    }
    if (hashTable[f2]) {
      hashTable[f2].push(f1);
    } else {
      hashTable[f2] = [f1];
    }
    lineCount++;
    if (lineCount < relationCount) { return; }
  }
  let maxDuplCount = 0;
  let relName;
  peopleArray.forEach((person) => {
    if (hashTable[person]) {
      peopleArray.forEach((friend) => {
        if (person !== friend) {
          const friendRelation = hashTable[friend];
          if (friendRelation && friendRelation.indexOf(person) === -1) {
            let foundCount = 0;
            hashTable[person].forEach((friendCheck) => {
              if (friendRelation.indexOf(friendCheck) > -1) {
                foundCount++;
              }
            });
            if (foundCount > maxDuplCount) {
              maxDuplCount = foundCount;
              relName = [person, friend].sort().join(' ');
            }
          }
        }
      });
    }
  });
  console.log(relName);
  console.log(maxDuplCount);
  rl.close();
}).on('close', () => {
  process.exit();
});
