export const fetchUserData = async userName => {
  try {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const userData = response.json();
    return userData;
  } catch (err) {
    throw new Error('Failed to get user data');
  }
};

export const fetchRepositories = async url => {
  try {
    const response = await fetch(url);
    const reposData = response.json();
    return reposData;
  } catch (err) {
    throw new Error('Failed to load data');
  }
};
