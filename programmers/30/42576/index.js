function solution(participant, completion) {
  const obj = {};
  completion.forEach((c) => {
    if (obj[c]) {
      obj[c]++;
    } else {
      obj[c] = 1;
    }
  });
  for (let i = participant.length - 1; i > -1; i--) {
    const key = participant[i];
    const count = obj[key];
    if (count) {
      if (count > 1) {
        obj[key]--;
      } else {
        delete obj[key];
      }
    } else {
      return key;
    }
  }
}
