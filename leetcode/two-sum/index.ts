function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    const first = nums[i];
    for (let j = 0; j < nums.length; j++) {
      if (i != j && first + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [null, null];
}

export default twoSum;
