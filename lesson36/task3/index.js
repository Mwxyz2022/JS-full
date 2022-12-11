/**
 *    -Pomise All
 *    - await  - 1
 *
 *
 *
 *
 * @param {string[]} users
 * @return {promise}
 */
const fetchUserData = userName =>
  fetch(`https://api.github.com/users/${userName}`).then(response => response.json());

export const getUsersBlogs = async userName => {
  try {
    return await Promise.all(userName.map(user => fetchUserData(user).then(users => users.blog)));
  } catch (error) {
    throw new Error('Failed to fetch user');
  }
};

// examples
// getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
// getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
