const obj = { 'John Doe': 19, Tom: 17, Bob: 18 };

const copyObj = obj => {
  const cObj = { ...obj };
  return cObj;
};

console.log(copyObj(obj)); // { 'John Doe': 19, Tom: 17, Bob: 18 }
