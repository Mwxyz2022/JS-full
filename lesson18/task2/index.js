//  input:
//  output:

//    1. экспортируемый объект с методами
//     * transaction - [arr]
//     ** getMax - возвращает макс. эл с массива
//     ** getMin - возвращает мин. эл с массива

export const wallet = {
  transactions: [23, 343, 7, 323, 57, 85, 34, 2],
  getMax() {
    return Math.max(...this.transactions);
  },
  getMin() {
    return Math.min(...this.transactions);
  },
};

// console.log(wallet.getMax());
// console.log(wallet.getMin());
