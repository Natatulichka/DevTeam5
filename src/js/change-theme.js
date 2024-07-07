import { loadFromLS, saveToLS } from './local-storage-functions';
import refs from './refs';

const THEME_KEY = 'Theme';

const savedTheme = loadFromLS(THEME_KEY) || 'red';
refs.selectThemeElem.value = savedTheme;

changeTheme(savedTheme);

refs.selectThemeElem.addEventListener('change', function () {
  const selectedTheme = refs.selectThemeElem.value;
  saveToLS(THEME_KEY, selectedTheme);
  changeTheme(selectedTheme);
});

function changeTheme(theme) {
  refs.heroSectionElem.classList.remove('theme-blue');
  refs.heroSectionElem.classList.add(`theme-${theme}`);
}
