import { fetchUserData, fetchRepositories } from './src/script/gateways.js';
import { renderUserData } from './src/script/user.js';
import { renderRepos, cleanReposList } from './src/script/repos.js';
import { hideSpinner, showSpinner } from './src/script/spiner.js';
//

//
const nameFormInput = document.querySelector('.name-form__input');
const nameFormBtn = document.querySelector('.name-form__btn');

const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};

renderUserData(defaultUser);

const onSearchUser = () => {
  showSpinner();
  cleanReposList();
  const userName = nameFormInput.value;
  fetchUserData(userName)
    .then(userData => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then(url => fetchRepositories(url))
    .then(reposList => {
      return renderRepos(reposList);
    })
    .catch(err => {
      alert(err.message);
    })
    .finally(() => {
      hideSpinner();
    });
};

nameFormBtn.addEventListener('click', onSearchUser);
