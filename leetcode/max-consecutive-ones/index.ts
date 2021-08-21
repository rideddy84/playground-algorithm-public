function findMaxConsecutiveOnes(nums: number[]): number {
  let max = 0;
  let seq = 0;
  nums.forEach((num) => {
    if (num === 1) {
      seq++;
      if (seq > max) {
        max = seq;
      }
    } else {
      seq = 0;
    }
  });
  return max;
}

export default findMaxConsecutiveOnes;
