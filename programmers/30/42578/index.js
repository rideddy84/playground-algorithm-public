function solution(clothes) {
  let answer = 1;
  const hash = {};
  const types = [];

  clothes.forEach((cloth) => {
    const [name, type] = cloth;

    if (hash[type]) {
      hash[type].push(name);
    } else {
      hash[type] = [name];
    }
    if (types.indexOf(type) === -1) {
      types.push(type);
    }
  });

  for (let i = 0; i < types.length; i++) {
    answer *= hash[types[i]].length + 1;
  }
  answer -= 1;

  return answer;
}

module.exports = solution;
