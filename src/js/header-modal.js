import refs from './refs';

// <!-- Modal-Window -->
refs.burgerEl.addEventListener('click', openWindow);

refs.closeModalEl.addEventListener('click', closeWindow);

refs.closeModEl.addEventListener('click', closeWindow);

function openWindow() {
    refs.popupEl.classList.add('is-on')
}
function closeWindow() {
    refs.popupEl.classList.remove('is-on')
}

refs.closeBtnEl.addEventListener('click', closeWindow);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && refs.popupEl.classList.contains('is-on')) {
        closeWindow();
    }
})