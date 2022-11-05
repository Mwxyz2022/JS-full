// input: func,context, ...args
// output: func
//
//    1. (Экспортируемую ф-ю)
//    2.  Веализовать фу-ю аналогично работе .bind применить => .call .apply

const user = {
  name: 'Vasya',
  day: 'friday',
  something: 'go to the job!',
};

function getMes() {
  console.log(`Hello ${name}! Today is ${this.day}, don't forget ${this.something}`);
}

function log(name, day, something) {
  console.log(`Hello ${name}! Today is ${day}, don't forget ${something}`);
}

function bind(func, context, ...args) {}

getMes();
