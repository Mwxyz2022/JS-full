const productPrice = [12.23, 14.22, 19.2, 17.339];

const getTotalPrice = arr => {
  return '$' + Math.floor(100 * arr.reduce((acc, num) => acc + num, 0)) / 100;
};

console.log(getTotalPrice(productPrice));
