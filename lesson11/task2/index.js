const contacts = [
  {
    name: 'Tom',
    phoneNumber: '777-77-77',
  },
  {
    name: 'Jane',
    phoneNumber: '111-11-11',
  },
  {
    name: 'Ann',
    phoneNumber: '222-22-22',
  },
  {
    name: 'Stive',
    phoneNumber: '333-33-33',
  },
  {
    name: 'Bob',
    phoneNumber: '444-44-44',
  },
  {
    name: 'Lara',
    phoneNumber: '555-55-55',
  },
];

const sortContacts = (contacts, boolean) => {
  if (!Array.isArray(contacts)) return null;
  if (boolean === true || boolean === undefined)
    return contacts.slice().sort((a, b) => a.name.localeCompare(b.name));
  if (boolean === false) return contacts.slice().sort((a, b) => b.name.localeCompare(a.name));
};

console.log(sortContacts(contacts, true));
console.log(sortContacts(contacts, false));
console.log(sortContacts(contacts));
