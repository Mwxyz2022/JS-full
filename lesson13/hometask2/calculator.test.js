import { calc } from './calculator.js';

it('should get result for operation +', () => {
  const result = calc('17 + 18');
  expect(result).toEqual('17 + 18 = 35');
});

it('should get result for operation -', () => {
  const result = calc('102 - 52');
  expect(result).toEqual('102 - 52 = 50');
});

it('should get result for operation *', () => {
  const result = calc('25 * 5');
  expect(result).toEqual('25 * 5 = 125');
});

it('should get result for operation /', () => {
  const result = calc('25 / 5');
  expect(result).toEqual('25 / 5 = 5');
});

it('should get result if input is not string', () => {
  const result = calc(2);
  expect(result).toEqual(null);
});
