import { fetchReviews } from './api-docs';
import { renderReviews } from './render-reviews';
import refs from './refs';

async function fetchAndRenderReviews() {
  const reviews = await fetchReviews();
  renderReviews(reviews, refs.reviewsList);
}

fetchAndRenderReviews();
