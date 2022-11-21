//    1. экспортируемая ф-я
//       * input: none
//       * output: {data}
//    2. преобразим данныые localStorage в массив
//        * преобразим иттерируя массив с пом reduce. в объект
//        **  значение ключа проверяем на ошибку

// export
export const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce(
    (acc, [key, value]) => {
      let newValue;
      try {
        const newValue = JSON.parse(value);
      } catch (e) {
        newValue = value;
      }
      return { ...acc, [key]: newValue };
    },

    {},
  );
};
console.log(getLocalStorageData());
