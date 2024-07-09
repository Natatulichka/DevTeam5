import refs from './refs';
function openMenu() {
    refs.openMenuEl.classList.add('is-on')
}
function closeMenu() {
    refs.openMenuEl.classList.remove('is-on')
}
refs.menuListEl.addEventListener('click', openMenu);