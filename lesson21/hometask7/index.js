//      1. Экспортируемая фу-я createButton('buttonText');
//        * вставит кнопку с текстом  buttonText

export const createButton = buttonText => {
  const bodyDoc = document.querySelector('body');

  const createButton = document.createElement('button');

  createButton.textContent = buttonText;
  bodyDoc.append(createButton);
};

// testdata
createButton('Send email');
createButton('Ok lets gooo!!!');
