import { loadFromLS, saveToLS } from './local-storage-functions';
import refs from './refs';
const THEME_KEY = 'Theme';

const { toggle, bodyElem: body, heroSectionElem: hero, popupEl: mobile } = refs;

document.addEventListener('DOMContentLoaded', () => {
  if (loadFromLS(THEME_KEY) === 'blue') {
    toggle.checked = true;
    body.classList.add('theme-blue');
    hero.classList.add('theme-blue');
    mobile.classList.add('theme-blue');
    document.querySelector('.toggle-container').classList.remove('hidden');
    document.querySelector('.order-link').classList.remove('hidden');
  } else {
    body.classList.add('theme-red');
    hero.classList.add('theme-red');
    mobile.classList.add('theme-red');
    document.querySelector('.toggle-container').classList.remove('hidden');
    document.querySelector('.order-link').classList.remove('hidden');
  }

  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      body.classList.remove('theme-red');
      hero.classList.remove('theme-red');
      mobile.classList.remove('theme-red');
      body.classList.add('theme-blue');
      hero.classList.add('theme-blue');
      mobile.classList.add('theme-blue');
      saveToLS(THEME_KEY, 'blue');
    } else {
      body.classList.remove('theme-blue');
      hero.classList.remove('theme-blue');
      mobile.classList.remove('theme-blue');
      body.classList.add('theme-red');
      hero.classList.add('theme-red');
      mobile.classList.add('theme-red');
      saveToLS(THEME_KEY, 'red');
    }
  });
});
