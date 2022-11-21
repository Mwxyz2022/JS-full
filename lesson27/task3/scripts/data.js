export const getId = () => Math.floor(Math.random() * 1000).toFixed();

export const tasks = [
  { text: 'Buy milk', done: false, id: getId() },
  { text: 'Pick up Tom from airport', done: false, id: getId() },
  { text: 'Visit party', done: false, id: getId() },
  { text: 'Visit doctor', done: true, id: getId() },
  { text: 'Buy meat', done: true, id: getId() },
];
