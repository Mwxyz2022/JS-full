/*
    0. для начала создадим файлы,все файлы
      * подключим препроцессор  стилей 
      *  создадим и подключим скрипт 
    

    1. для начала возьмем в переменные эл. с которыми будем работать  
    2.создадим запрос на сервер -  событие по клику на кнопку Show 
    3. получим данные и отобразим их на странице.
*/

const userImgElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

const formNameInp = document.querySelector('.name-form__input');
const formBtnInp = document.querySelector('.name-form__btn');

const fetchUserData = userName => {
  return fetch(`https://api.github.com/users/${userName}`).then(response => response.json());
};

const renderUserData = userData => {
  const { avatar_url, name, location } = userData;
  userImgElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location;
};

const onSearchUser = () => {
  const userName = formNameInp.value;
  fetchUserData(userName).then(userData => renderUserData(userData));
};

formBtnInp.addEventListener('click', onSearchUser);
