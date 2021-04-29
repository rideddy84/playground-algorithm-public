// Run by Node.js
const { link } = require('fs');
const readline = require('readline');

(async () => {
  const rl = readline.createInterface({ input: process.stdin });

  let basketCount;
  let questionCount;
  const links = [];
  const questions = [];
  const nodes = {};
  for await (const line of rl) {
    if (!basketCount) {
      const temp = line.split(' ').map((l) => parseInt(l));
      basketCount = temp[0];
      questionCount = temp[1];
      continue;
    }
    if (links.length < basketCount - 1) {
      links.push(line.split(' ').map((l) => parseInt(l)));
      continue;
    }
    if (questions.length < questionCount) {
      questions.push(line.split(' ').map((l) => parseInt(l)));
      if (questions.length < questionCount) { continue; }
    }

    rl.close();
  }

  nodes[1] = { children: [], isFull: false };
  while (links.length > 0) {
    for (let i = 0; i < links.length; i++) {
      const [a, b] = links[i];
      if (nodes[a]) {
        nodes[a].children.push(b);
        nodes[b] = { parent: a, isFull: false, children: [] };
        links.splice(i, 1);
        break;
      } else if (nodes[b]) {
        nodes[b].children.push(a);
        nodes[a] = { parent: b, isFull: false, children: [] };
        links.splice(i, 1);
        break;
      }
    }
  }

  questions.forEach((q) => {
    const [qNum, basketNum] = q;
    if (qNum === 1) {
      let targets = [basketNum];
      while (targets) {
        var temp = [];
        for (let i = 0; i < targets.length; i++) {
          nodes[targets[i]].isFull = true;
          nodes[targets[i]].children.forEach((c) => {
            temp.push(c);
          });
        }
        if (temp.length > 0) {
          targets = temp;
        } else {
          targets = null;
        }
      }
    } else if (qNum === 2) {
      let target = basketNum;
      while (target > 0) {
        nodes[target].isFull = false;
        target = nodes[target].parent || 0;
      }
    } else if (qNum === 3) {
      console.log(nodes[basketNum].isFull ? 1 : 0);
    }
  });

  process.exit();
})();
