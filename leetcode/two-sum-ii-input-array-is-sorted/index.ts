function twoSum(numbers: number[], target: number): number[] {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1];
      }
      if (numbers[i] + numbers[j] > target) {
        break;
      }
    }
  }
  return [1, 1];
}

export default twoSum;
