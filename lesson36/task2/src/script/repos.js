const listElem = document.querySelector('.repo-list');

export const cleanReposList = () => {
  listElem.innerHTML = '';
};
export const renderRepos = reposList => {
  const reposListElem = reposList.map(({ name }) => {
    const liElem = document.createElement('li');
    liElem.classList.add('repo-list__item');
    liElem.textContent = name;

    return liElem;
  });
  cleanReposList();

  listElem.append(...reposListElem);
};
