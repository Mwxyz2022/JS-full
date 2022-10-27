const withdraw = (clients, balances, client, amount) => {
  const clientId = clients.indexOf(client);
  if (balances[clientId] >= amount) {
    balances[clientId] -= amount;
    return balances[clientId];
  }
  return -1;
};
// const withdraw = (clients, balances, client, amount) => {
//   let clientIndex = null;
//   clients.forEach((element, index) => {
//     if (element === client) {
//       clientIndex = index;
//     }
//   });
//   if (balances[clientIndex] < amount) {
//     return -1;
//   }
//   if (balances[clientIndex] >= amount) {
//     balances[clientIndex] -= amount;
//     return balances[clientIndex];
//   }
// };

console.log(withdraw(['Ann', 'John', 'User'], [1400, 50, -6], 'John', 50));

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));
