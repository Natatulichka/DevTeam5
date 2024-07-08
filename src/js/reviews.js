import { fetchReviews } from './api-docs';
import { renderReviews } from './render-reviews';
import refs from './refs';

// const reviews = await fetchReviews();

// renderReviews(reviews, refs.reviewsList);

// fetchReviews().then(reviews => {
//   renderReviews(reviews, refs.reviewsList);
// });

async function fetchAndRenderReviews() {
  const reviews = await fetchReviews();
  renderReviews(reviews, refs.reviewsList);
}

fetchAndRenderReviews();
