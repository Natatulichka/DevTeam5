export function renderReviews(reviewsArr, domElem) {
  const markup = reviewsArr
    .map(({ avatar_url, author, review }) => {
      return `
    <li class="review-card swiper-slide">
      <div class="author-info">
        <img class="review-card-image" src="${avatar_url}" alt="${author}">
        <h3 class="review-author-name">${author}</h3>
      </div>
      <p class="review-text">${review}</p>
    </li>
  `;
    })
    .join('');
  domElem.innerHTML = markup;
}
