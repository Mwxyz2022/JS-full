/**
 * @param {object} obj
 * @return {undefined}
 */
function getKeys(obj) {
  const keys = Object.keys(obj).forEach(key => console.log(key));
}

// examples
getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' });
