// input: 'string'
// output:  {promise}

// code

// export
export const requestUserData = userId => {
  const prom = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({ name: 'John', age: 17, userId, email: `${userId}@example.com` });
      }, 1000);
    }
  });
  return prom;
};

// testData
// requestUserData('User-1').then(date => console.log(date));

// requestUserData('broken')
//   .then(date => console.log(date))
//   .catch(err => console.log(err));
