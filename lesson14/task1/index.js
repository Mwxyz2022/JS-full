let message = 'Just learn it';

export function sendMessage(name) {
  return console.log(`${name}, ${message}! Your Gromcode`);
}

export function setMessage(text) {
  message = text;
}
