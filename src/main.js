// Описаний у документації
import iziToast from 'izitoast';
import searchHendler from './js/pixabay-api';
import renderImg from './js/render-functions';

iziToast.settings({
  position: 'topCenter',
  timeout: 3500,
  transitionIn: 'bounceInDown',
});

const formEl = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const userQuery = evt.currentTarget.elements.userQuery.value.trim();
  if (userQuery.length === 0) {
    iziToast.error({
      message: 'Please, enter your search query!',
    });
    formEl.reset();
    return;
  }
  isGalleryShow(false);
  isLoaderON(true);

  searchHendler(userQuery)
    .then(data => {
      if (data.length === 0)
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      renderImg(data);
      isGalleryShow(true);
    })
    .catch(err => {
      console.log(err);
      iziToast.error({
        message: 'Please, try again',
      });
    })
    .finally(() => {
      formEl.reset(), isLoaderON(false);
    });
}

function isLoaderON(bool) {
  bool
    ? loader.classList.remove('visually-hidden')
    : loader.classList.add('visually-hidden');
}
function isGalleryShow(bool) {
  bool
    ? gallery.classList.remove('visually-hidden')
    : gallery.classList.add('visually-hidden');
}