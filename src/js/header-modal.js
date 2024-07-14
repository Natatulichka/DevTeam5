import refs from './refs';

// <!-- Modal-Window -->
refs.burgerEl.addEventListener('click', openWindow);

refs.closeModalEl.addEventListener('click', closeWindow);

refs.closeModEl.addEventListener('click', closeWindow);

function openWindow() {
  refs.popupEl.classList.add('is-open-mobile');
  if (!document.body.classList.contains('scroll-off-mobile')) {
    document.body.classList.add('scroll-off-mobile');
  }
}
function closeWindow() {
  refs.popupEl.classList.remove('is-open-mobile');
  if (document.body.classList.contains('scroll-off-mobile')) {
    document.body.classList.remove('scroll-off-mobile');
  }
}

refs.closeBtnEl.addEventListener('click', closeWindow);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && refs.popupEl.classList.contains('is-open-mobile')) {
    closeWindow();
  }
});
