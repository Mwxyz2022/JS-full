it('17 равно 17', () => {
  expect(17).toEqual(17);
});

it('18 не равно 17', () => {
  expect(18).not.toEqual(17);
});

const getEvenNumber = numbers => numbers.filter(num => num % 2 === 0);

it('should get only even numbers from array', () => {
  const result = getEvenNumber([245, 244, 360, 362]);

  expect(result).toEqual([244, 360, 362]);
});
