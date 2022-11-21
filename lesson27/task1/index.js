//    1. экспортируемая ф-я
//       * input: none
//       * output: {data}
//    2. преобразим данныые localStorage в массив
//        * преобразим иттерируя массив с пом reduce. в объект
//        **  значение ключа проверяем на ошибку
localStorage.clear();
localStorage.setItem('obj', JSON.stringify({ name: 'Harry' }));
localStorage.setItem('name', 'Tom');
localStorage.setItem('age', JSON.stringify(18));
localStorage.setItem('city', JSON.stringify('Kherson'));

// export
export const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce(
    (acc, [key, value]) => {
      let newValue;
      try {
        newValue = JSON.parse(value);
      } catch (e) {
        newValue = value;
      }
      return { ...acc, [key]: newValue };
    },

    {},
  );
};

console.log(getLocalStorageData());
