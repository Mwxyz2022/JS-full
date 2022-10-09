const obj = {
  room1: [{ name: 'kostya' }, { name: 'lena' }, { name: 'jeka' }],
  room2: [{ name: 'sveta' }, { name: 'dima' }, { name: 'katya' }],
  room3: [{ name: 'roman' }, { name: 'vitaliy' }, { name: 'andrey' }],
  room4: [{ name: 'vika' }],
};

const getPeople = obj =>
  Object.values(obj)
    .flat()
    .map(object => object.name);

console.log(getPeople(obj));
