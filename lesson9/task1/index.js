const obj = { 'John Doe': 19, Tom: 17, Bob: 18 };

const getAdults = obj => {
  const res = Object.entries(obj)
    .filter(user => user[1] >= 18)
    .map(user => user[0]);

  return res;
};

console.log(getAdults(obj));
