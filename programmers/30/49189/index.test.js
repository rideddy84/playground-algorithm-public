const target = require('.');

test('49189 case 1', () => {
  expect(target(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]])).toBe(3);
});
