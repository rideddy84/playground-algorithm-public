const target = require('.');

test('42578 case 1', () => {
  expect(target([['yellow_hat', 'headgear'], ['blue_sunglasses', 'eyewear'], ['green_turban', 'headgear']])).toBe(5);
});

test('42578 case 2', () => {
  expect(target([['crow_mask', 'face'], ['blue_sunglasses', 'face'], ['smoky_makeup', 'face']])).toBe(3);
});
