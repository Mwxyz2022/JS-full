//        1.  Экспортируемая Фу-я finishFrom()
//        2.  Должна вставить:
//            * input type - text name='login'
//            * изменить type c text на -password

export const finishForm = () => {
  const logForm = document.querySelector('.login-form');
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'login';
  logForm.prepend(input);

  const changeInp = document.querySelector('[name = password]');
  changeInp.type = 'password';
};
