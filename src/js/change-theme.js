import { loadFromLS, saveToLS } from './local-storage-functions';
import refs from './refs';
const THEME_KEY = 'Theme';

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');

  if (loadFromLS(THEME_KEY) === 'blue') {
    toggle.checked = true;
    refs.bodyElem.classList.add('theme-blue');
    refs.heroSectionElem.classList.add('theme-blue');
    refs.popupEl.classList.add('theme-blue');
  } else {
    refs.bodyElem.classList.add('theme-red');
    refs.heroSectionElem.classList.add('theme-red');
    refs.popupEl.classList.add('theme-red');
  }

  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      refs.bodyElem.classList.remove('theme-red');
      refs.heroSectionElem.classList.remove('theme-red');
      refs.popupEl.classList.remove('theme-red');
      refs.bodyElem.classList.add('theme-blue');
      refs.heroSectionElem.classList.add('theme-blue');
      refs.popupEl.classList.add('theme-blue');
      saveToLS(THEME_KEY, 'blue');
    } else {
      refs.bodyElem.classList.remove('theme-blue');
      refs.heroSectionElem.classList.remove('theme-blue');
      refs.popupEl.classList.remove('theme-blue');
      refs.bodyElem.classList.add('theme-red');
      refs.heroSectionElem.classList.add('theme-red');
      refs.popupEl.classList.add('theme-red');
      saveToLS(THEME_KEY, 'red');
    }
  });
});
