/**
 * @return {object}
 */
//  1.   Создать экспортируемую фу-ю.
//  2.   Независимая память по умол. пустой => []
//  3.   Вернуть объект c методами.

const createLogger = () => {
  const memArray = [];

  return {
    log(message) {
      memArray.push({ message, dateTime: new Date(), type: 'log' });
    },

    warn(message) {
      memArray.push({ message, dateTime: new Date(), type: 'warn' });
    },

    error(message) {
      memArray.push({ message, dateTime: new Date(), type: 'error' });
    },

    getRecords(type) {
      const memSort = memArray.sort((a, b) => a.dateTime - b.dateTime);

      return type ? memSort.filter(el => el.type === type) : memSort;
    },
  };
};

// examples
const logger1 = createLogger();
logger1.log('User logged in');
logger1.warn('User is tring to ented restricted page');
logger1.log('User logged out');
logger1.error('Unexpected error on the site');

console.log(logger1.getRecords()); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger1.getRecords('log')); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger1.getRecords('error')); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
console.log(logger1.getRecords('warn')); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]

const logger2 = createLogger();
logger2.warn('Opps, something is happenning');
console.log(logger2.getRecords('error')); // ===> []
console.log(logger2.getRecords('warn')); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
console.log(logger2.getRecords()); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

const logger3 = createLogger();
console.log(logger3.getRecords('error')); // ===> []
console.log(logger3.getRecords()); // ===> []
