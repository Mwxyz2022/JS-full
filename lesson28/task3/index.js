//

// 1.
export const mult = num1 => num2 => num1 * num2;

console.log(mult(5)(4));

// 2.

export const twice = num => mult(2)(num);

console.log(twice(4));

// 3.

export const triple = num => mult(3)(num);

console.log(triple(4));
