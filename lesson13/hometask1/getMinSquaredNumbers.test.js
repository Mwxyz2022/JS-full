import { getMinSquaredNumbers } from './getMinSquaredNumbers';

it('should get  min squared  numbers in array', () => {
  const result = getMinSquaredNumbers([]);
  expect(result).toEqual(Infinity);
});

it('should get  min squared  numbers in array', () => {
  const result = getMinSquaredNumbers('number');
  expect(result).toEqual(null);
});

it('should get  min squared  numbers in array', () => {
  const result = getMinSquaredNumbers([13, -345, -3, 6, 74, -21]);
  expect(result).toEqual(9);
});
