import { reverseArray } from '../../Lesson6/hometask5/index.js';
import { withdraw } from '../../lesson7/hometask5/index.js';
import { getAdults } from '../../lesson8/hometask5/index.js';
// for reverseArray

it('should get new reverse array', () => {
  const result = reverseArray([123, 34, 23, 5, 3]);
  expect(result).toEqual([3, 5, 23, 34, 123]);
});

it('should get new empty array', () => {
  const result = reverseArray([]);
  expect(result).toEqual([]);
});
it('should get null', () => {
  const result = reverseArray(1, 2, 3);
  expect(result).toEqual(null);
});

//  for withdraw

it('should get balance balance: second array - second element', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37);
});

it('should get -1 not enough balance', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 5000);
  expect(result).toEqual(-1);
});

it('should get "-1" - non-existent argument', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Jack', 5);
  expect(result).toEqual(-1);
});

// for getAdults

it('should get an obj with values < 18', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('should get an empty object', () => {
  const result = getAdults({ 'John Doe': 12, Tom: 13, Bob: 13, Ann: 17 });
  expect(result).toEqual({});
});

it('should get an empty object', () => {
  const result = getAdults([]);
  expect(result).toEqual({});
});
