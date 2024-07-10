import refs from './refs';
function openMenu() {
  refs.openMenuEl.classList.toggle('is-on');
}

refs.menuListEl.addEventListener('click', openMenu);
