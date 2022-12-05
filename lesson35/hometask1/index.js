const user = '{"name":"John","surname":"Doe"}';

const errorUser = '{"name":"John","surname":"Doe"';

export const parseUser = user => {
  try {
    const parsedUser = JSON.parse(user);
    return parsedUser;
  } catch (error) {
    return null;
  }
};

console.log(parseUser(user));
console.log(parseUser(errorUser));
