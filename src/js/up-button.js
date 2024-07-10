import refs from './refs';

function toTheTop() {
    refs.headerSection.scrollIntoView({ behavior: 'smooth' });
    refs.upBtn.classList.add('hidden');
}
    
function checkScroll() {
    const scroll = window.scrollY;
            if (scroll >= 700) {
                refs.upBtn.classList.remove('hidden');

            } else {
                refs.upBtn.classList.add('hidden');
            }
}
        
window.addEventListener('scroll', checkScroll);
refs.upBtn.addEventListener('click', toTheTop);
