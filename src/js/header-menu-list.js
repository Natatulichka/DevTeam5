import refs from './refs';
function toggleMenu() {
    refs.openMenuEl.classList.toggle('is-hidden')
}
function closeMenu() {
    refs.openMenuEl.classList.add('is-hidden')
 }

refs.menuListEl.addEventListener('click', toggleMenu);

document.addEventListener('click', (e) => {
    const click = e.composedPath().includes(refs.menuListEl);
    if (!click) {
        closeMenu();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !refs.openMenuEl.classList.contains('is-hidden')) {
        closeMenu();
    }
})