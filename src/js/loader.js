import refs from './refs';

export function enableLoader() {
  refs.loader.classList.remove('hidden');
}
export function disableLoader() {
  refs.loader.classList.add('hidden');
}
