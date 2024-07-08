import { fetchReviews } from './api-docs';
import { renderReviews } from './render-reviews';
import refs from './refs';

const reviews = await fetchReviews();

renderReviews(reviews, refs.reviewsList);
