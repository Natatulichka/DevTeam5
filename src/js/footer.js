import iziToast from 'izitoast';
import imageUrlError from '../img/footer/error.svg';
import refs from './refs';
import axios from 'axios';
import { loadFromLS, saveToLS } from './local-storage-functions';

refs.contactForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  // User request
  const email = refs.email.value;
  const comments = refs.comments.value;
  if (!email || !comments) {
    iziToast.error({
      title: 'Error!',
      titleSize: '16',
      titleColor: '#fafafa',
      message: 'Please fill in both fields',
      messageSize: '16',
      messageColor: '#fafafa',
      backgroundColor: 'var(--primary-color)',
      theme: 'dark',
      position: 'center',
      closeOnEscape: true,
      closeOnClick: true,
      iconUrl: imageUrlError,
    });
    return;
  }
  const dataLoad = {
    email: email,
    comment: comments,
  };

  // Save to Local Storage
  saveToLS('email', email);
  saveToLS('comment', comments);

  // Request on API server
  try {
    const response = await axios.post('requests', dataLoad, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataLoad),
    });
    const data = response.data;
    if (data.error) {
      iziToast.error({
        title: 'Error!',
        titleSize: '16',
        titleColor: '#fafafa',
        message: `${data.error}`,
        messageSize: '16',
        messageColor: '#fafafa',
        backgroundColor: 'var(--primary-color)',
        theme: 'dark',
        position: 'bottomCenter',
        closeOnEscape: true,
        closeOnClick: true,
        iconUrl: imageUrlError,
      });
    } else {
      //
      localStorage.removeItem(storageKey);
      //
      refs.contactForm.reset();
    }

    refs.modalTitleEl.textContent = data.title;
    refs.modalMessageEl.textContent = data.message;
    openModalWindow();
  } catch (error) {
    iziToast.error({
      title: 'Error!',
      titleSize: '16',
      titleColor: '#fafafa',
      message: `${error.message}`,
      messageSize: '16',
      messageColor: '#fafafa',
      backgroundColor: 'var(--primary-color)',
      theme: 'dark',
      position: 'bottomCenter',
      closeOnEscape: true,
      closeOnClick: true,
      iconUrl: imageUrlError,
    });
  }
});

// <!-- Modal-Window -->
function openModalWindow() {
  refs.backdropEl.classList.add('is-open');
}
function closeModalWindow() {
  refs.backdropEl.classList.remove('is-open');
}
refs.closeModalBtnEl.addEventListener('click', closeModalWindow);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && refs.backdropEl.classList.contains('is-open')) {
    closeModalWindow();
  }
});
document.addEventListener('click', e => {
  const click = e.composedPath().includes(refs.modalEl);
  if (!click) {
    closeModalWindow();
  }
});

//
const storageKey = 'feedback-form-state';
const savedFormData = loadFromLS(storageKey);
const formData = {
  email: '',
  comments: '',
};

if (savedFormData) {
  formData.email = savedFormData.email;
  formData.comments = savedFormData.comments;
}

refs.email.value = formData.email;
refs.comments.value = formData.comments;

refs.contactForm.addEventListener('input', e => {
  formData[e.target.name] = e.target.value.trim();
  saveToLS(storageKey, formData);
});
//
