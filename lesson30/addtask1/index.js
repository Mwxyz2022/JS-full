const addImage = (url, callback) => {
  const img = document.createElement('img');
  img.setAttribute('alt', 'User avatar');
  img.src = url;

  const pageElem = document.querySelector('.page');
  pageElem.append(img);

  const onImageLoaded = () => {
    const { width, height } = img;
    callback(null, { width, height });
  };

  const onImageLoadError = () => callback('Image load failed');

  img.addEventListener('load', onImageLoaded);

  img.addEventListener('error', onImageLoadError);
};

//

const addImageV2 = url => {
  const prom = new Promise(resolve => {
    addImage(url, resolve);
  });
  return prom;
};

// examples

addImageV2('https://server.com/image.png')
  .then(data => console.log(data)) // ==> { width: 200, height: 100 }
  .catch(error => console.log(error)); // ==> 'Image load failed'
