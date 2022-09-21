const clients = ['Vlad', 'Stas', 'Nastia', 'Lesia', 'Viktor'];
const balance = [12432, 42454, 314, 542352, 31413];

function withdraw(clients, balance, client, amount) {
  let searchIdClient = null;
  for (let i = 0; i < clients.length; i += 1) {
    if (clients[i] === client) {
      searchIdClient = i;
      break;
    }
  }
  if (balance[searchIdClient] < amount) {
    return -1;
  }
  if (balance[searchIdClient] >= amount) {
    const transaction = balance[searchIdClient] - amount;
    balance[searchIdClient] = transaction;
    return transaction;
  }
}

console.log(withdraw(clients, balance, 'Nastia', 100));
console.log(withdraw(clients, balance, 'Vlad', 1000000));
console.log(balance);
