//      1.    Экспортируемая фу-я squaredNumbers()
//            * Считывает с дата-атрибутов число
//            * возведет его в квадрат и запишет в новый атрибут data-squared-number
//

export const squaredNumbers = () => {
  const elClassNumber = document.querySelectorAll('.number');
  console.log(elClassNumber);
  elClassNumber.forEach(el => {
    console.log(el);

    const elNumber = el.dataset.number;
    console.log(elNumber);
    el.dataset.squaredNumber = elNumber ** 2;
    console.log(el);
  });
};

// squaredNumbers();
