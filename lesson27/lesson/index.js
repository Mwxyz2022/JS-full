// ===========================I=============================
// localStorage.clear();

// localStorage.setItem('obj', JSON.stringify({ name: 'Harry' }));
// localStorage.setItem('name', 'Tom');
// localStorage.setItem('age', JSON.stringify(18));

// // console.log(JSON.parse(localStorage.getItem('obj')));

// const getLocalStorageData = () => {
//   return Object.entries(localStorage).reduce(
//     (acc, [key, value]) => {
//       let newValue;
//       try {
//         const newValue = JSON.parse(value);
//       } catch (e) {
//         newValue = value;
//       }
//       return { ...acc, [key]: newValue };
//     },

//     {},
//   );
// };
// console.log(getLocalStorageData());

// ========================II================================

// const counterElem = document.querySelector('.counter');
// const counterValueElem = document.querySelector('.counter__value');

// const onCounterChange = e => {
//   const isButton = e.target.classList.contains('counter__button');

//   if (!isButton) {
//     return;
//   }

//   const { action } = e.target.dataset;

//   const oldValue = Number(counterValueElem.textContent);

//   const newValue = action === 'decrease' ? oldValue - 1 : oldValue + 1;

//   localStorage.setItem('counterValue', newValue);

//   counterValueElem.textContent = newValue;
// };

// counterElem.addEventListener('click', onCounterChange);

// const onStorageChange = e => {
//   counterValueElem.textContent = e.newValue;
// };

// window.addEventListener('storage', onStorageChange);

// const onDocumentLoaded = () => {
//   counterValueElem.textContent = localStorage.getItem('counterValue') || 0;
// };
// document.addEventListener('DOMContentLoaded', onDocumentLoaded);
//
//
//
// ========================III================================
//
