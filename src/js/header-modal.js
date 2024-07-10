import refs from './refs';

// <!-- Modal-Window -->
refs.burgerEl.addEventListener('click', openWindow);

refs.closeModalEl.addEventListener('click', closeWindow);

refs.closeModEl.addEventListener('click', closeWindow);

function openWindow() {
    refs.popupEl.classList.add('is-open')
}
function closeWindow() {
    refs.popupEl.classList.remove('is-open')
}

refs.closeBtnEl.addEventListener('click', closeWindow);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && refs.popupEl.classList.contains('is-open')) {
        closeWindow();
    }
})