import { fetchReviews } from './api-docs';
import { renderReviews } from './render-reviews';
import iziToast from 'izitoast';
import imageUrlError from '../img/sprite.svg#error';
import refs from './refs';
import { disableLoader, enableLoader } from './loader';

fetchAndRenderReviews();

async function fetchAndRenderReviews() {
  try {
    enableLoader();
    const reviews = await fetchReviews();
    disableLoader();
    btnsVisible();
    renderReviews(reviews, refs.reviewsList);
  } catch (error) {
    disableLoader();
    const markupError = `<div class="reviews-error">
    <h3>Not found</h3>
    </div>`;
    refs.reviewsList.insertAdjacentHTML('afterend', markupError);
    iziToast.error({
      title: 'Reviews not found!',
      titleSize: '16',
      titleColor: '#fafafa',
      messageSize: '16',
      messageColor: '#fafafa',
      backgroundColor: 'var(--primary-color)',
      theme: 'dark',
      position: 'center',
      closeOnEscape: true,
      closeOnClick: true,
      iconUrl: imageUrlError,
    });
  }
}

function btnsVisible() {
  refs.swiperBtns.classList.remove('hidden');
}
