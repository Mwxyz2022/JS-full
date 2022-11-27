// export

const imgSrc =
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';
//
//
//

export const addImage = imgSrc => {
  new Promise((resolve, reject) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My photo');
    imgElem.src = imgSrc;

    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImageLoaded = () => {
      resolve(imgElem);
    };

    imgElem.addEventListener('load', onImageLoaded);
    imgElem.addEventListener('error', () => reject(new Error('Image load is failed...')));
  })
    .then(data => {
      const { width, height } = data;
      const sizeElem = document.querySelector('.image-size');
      sizeElem.textContent = `${width} x ${height}`;
    })
    .catch(err => console.log(err));
};

addImage(imgSrc);
