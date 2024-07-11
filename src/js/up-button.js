import refs from './refs';

// function toTheTop() {
//     refs.headerSection.scrollIntoView({ behavior: 'smooth' });
//     refs.upBtn.classList.add('is-hidden');
// }

function checkScroll() {
  const scroll = window.scrollY;
  if (scroll >= 700) {
    refs.upBtn.classList.remove('is-hidden');
  } else {
    refs.upBtn.classList.add('is-hidden');
  }
}

window.addEventListener('scroll', checkScroll);
// refs.upBtn.addEventListener('click', toTheTop);
