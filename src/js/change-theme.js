import { loadFromLS, saveToLS } from './local-storage-functions';
import refs from './refs';
const THEME_KEY = 'Theme';

// const savedTheme = loadFromLS(THEME_KEY) || 'red';
// refs.selectThemeElem.value = savedTheme;

// changeTheme(savedTheme);

// refs.selectThemeElem.addEventListener('change', function () {
//   const selectedTheme = refs.selectThemeElem.value;
//   saveToLS(THEME_KEY, selectedTheme);
//   changeTheme(selectedTheme);
// });

// function changeTheme(theme) {
//   refs.heroSectionElem.classList.remove('theme-blue', 'theme-red');
//   refs.heroSectionElem.classList.add(`theme-${theme}`);
//   refs.bodyElem.classList.remove('theme-blue', 'theme-red');
//   refs.bodyElem.classList.add(`theme-${theme}`);
// }

//Togle
document.addEventListener('DOMContentLoaded', event => {
  const toggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Load the theme from local storage
  if (loadFromLS(THEME_KEY) === 'blue') {
    toggle.checked = true;
    refs.bodyElem.classList.add('theme-blue');
    refs.heroSectionElem.classList.add('theme-blue');
  } else {
    refs.bodyElem.classList.add('theme-red');
    refs.heroSectionElem.classList.add('theme-red');
  }

  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      refs.bodyElem.classList.remove('theme-red');
      refs.heroSectionElem.classList.remove('theme-red');
      refs.bodyElem.classList.add('theme-blue');
      refs.heroSectionElem.classList.add('theme-blue');
      saveToLS(THEME_KEY, 'blue');
    } else {
      refs.bodyElem.classList.remove('theme-blue');
      refs.heroSectionElem.classList.remove('theme-blue');
      refs.bodyElem.classList.add('theme-red');
      refs.heroSectionElem.classList.add('theme-red');
      saveToLS(THEME_KEY, 'red');
    }
  });
});
