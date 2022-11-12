//      1. фу-я getTitle - найдет эл. класс .title и вернет его текстовый контент => textContent
//      2. getDescription  - найдет эл. класс .about и вернет его текстовый контент => innerText
//      3. getPlans - найдет эл. класс .plans и вернет его текстовый контент => innerHTML
//      4. getGoal - найдет эл. класс .goal и вернет его текстовый контент => outerHTML
//          **** экспортируемые фу-и

export const getTitle = () => {
  const getTextTitle = document.querySelector('.title').textContent;
  return getTextTitle;
};

console.log(getTitle());

export const getDescription = () => {
  const getAboutDesc = document.querySelector('.about').innerText;
  return getAboutDesc;
};
console.log(getDescription());

export const getPlans = () => {
  const GetPlansSelector = document.querySelector('.plans').innerHTML;
  return GetPlansSelector;
};

console.log(getPlans());

export const getGoal = () => {
  const getGoalSelector = document.querySelector('.goal').outerHTML;
  return getGoalSelector;
};

console.log(getGoal());
