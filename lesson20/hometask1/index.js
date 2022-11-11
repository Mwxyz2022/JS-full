/**
 * @field {string} id +
 * @field {number} price +
 * @field {date} dateCreated +
 * @field {boolean} isConfirmed +
 * @field {date} dateConfirmed
 * @field {string} city +
 * @field {string} type +
 */

export class Order {
  constructor(price, city, type) {
    this.isConfirmed = false;
    this.dateConfirmed = null;
    this.id = `${Math.floor(Math.random() * 10000)}`;
    this.dateCreated = new Date();
    this.price = price;
    this.city = city;
    this.type = type;
  }

  checkPrice() {
    if (this.price > 1000) {
      return true;
    }
    return false;
  }

  confirmOrder() {
    this.isConfirmed = true;
    this.dateConfirmed = new Date();
  }

  isValidType() {
    if (this.type === 'Buy' || this.type === 'Sell') {
      return true;
    }
    return false;
  }
}
//    datatest
//
const ord1 = new Order(786, 'Kherson', 'Buy');

console.log(ord1);
ord1.confirmOrder();

console.log(ord1);
ord1.isValidType();

const ord2 = new Order(1900, 'Los Angeles', 'Sell');
console.log(ord2);
ord2.confirmOrder();
console.log(ord2.isValidType());
