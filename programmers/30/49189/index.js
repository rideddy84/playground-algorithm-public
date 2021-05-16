let distance = [];
let maxDist = 0;
const connections = [[]];
const nodes = [];
function solution(n, edge) {
  let answer = 0;
  for (var i = 1; i < n + 1; i++) {
    connections.push([]);
  }
  distance = new Array(n + 1).fill(0);

  for (var i = 0; i < edge.length; i++) {
    connections[edge[i][0]].push(edge[i][1]);
    connections[edge[i][1]].push(edge[i][0]);
  }

  nodes.push(1);

  while (nodes.length > 0) {
    find(nodes.shift());
  }

  maxDist = Math.max(...distance);

  for (var i = 0; i < distance.length; i++) {
    if (distance[i] == maxDist) {
      answer++;
    }
  }

  return answer;
}

function find(i) {
  for (let j = 0; j < connections[i].length; j++) {
    const node = connections[i][j];
    if (node > 1 && distance[node] == 0) {
      distance[node] = distance[i] + 1;
      nodes.push(node);
    }
  }
}

module.exports = solution;
