// input: src , func()
// output: if(error) => error

// 0. (экспортируемая !!!!) фу-я отрисовки картинки и п примим функцию КБ для отрисовки размера  картинки
//   1. создадим эл. картинки, добавим атрибуты,  присвоим ссылку
//   2. кладем созданный Эл. с картинкой в Контейнер
//   3. добавим событие при загрузке картинки
//      * опишем Кб  ивента:
//      * присвоим значения Высоты и Ширины в переменные
//      * Вызовим функцию для отрисовки @эл с Размерами@:
//      * Создадим ивент на Ошибку Загрузки (передадим в Эл отрисовки=>текст ошибки )
//   4. Опишим ф-ю КБ для @эл с Размерами@
//      * если ошибка  консолим ее
//      * если нет ошибки отрисовываем размер в Эл. image-size

// work src
//

//
//
// code
// export
export const addImage = (imgSrc, callback) => {
  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'My Photo');
  imgElem.src = imgSrc;

  const containerElem = document.querySelector('.page');
  containerElem.append(imgElem);
  console.log(imgSrc);
  console.log(imgElem);
  console.log(containerElem);

  const onImageLoaded = () => {
    callback(null, imgElem);
  };

  imgElem.addEventListener('load', onImageLoaded);
  imgElem.addEventListener('error', () => callback('Image load is failed'));
};

const onImageLoaded = (error, imgElem) => {
  if (error) {
    console.log(error);
    return;
  }
  const { width, height } = imgElem;
  const sizeElem = document.querySelector('.image-size');
  sizeElem.textContent = `${width} x ${height}`;
};

// datatest
// addImage(
//   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
//   onImageLoaded,
// );
