import SimpleLightbox from 'simplelightbox';
const simplelightboxOptions = {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.85,
  animationSpeed: 350,
  preloading: false,
  widthRatio: 0.9,
  heightRatio: 0.8,
  fadeSpeed: 400,
};

const renderImg = imgs => {
  document.querySelector('.gallery').innerHTML = imgs
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `   <li class="gallery-item">
            <a
              class="gallery-link"
              href=${largeImageURL}
            >
              <img
                class="gallery-image"
                src=${webformatURL}
                data-source=${largeImageURL}
                alt='${tags}'
              />
                  
              <ul class="description">
                <li class="descr-item">
                  <p class="descr-text">
                    Likes<span class="descr-span">${likes}</span>
                  </p>
                </li>
                <li class="descr-item">
                  <p class="descr-text">
                    Views<span class="descr-span">${views}</span>
                  </p>
                </li>
                <li class="descr-item">
                  <p class="descr-text">
                    Comments<span class="descr-span">${comments}</span>
                  </p>
                </li>
                <li class="descr-item">
                  <p class="descr-text">
                    Downloads<span class="descr-span">${downloads}</span>
                  </p>
                </li>
              </ul>
            </a>
          </li>`
    )
    .join('');

  new SimpleLightbox('.gallery .gallery-link', simplelightboxOptions);
};

export default renderImg;