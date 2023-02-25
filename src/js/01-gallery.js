import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');


const markUp = (items) => {
  return items.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`
  }).join('')
}

const handleClick = e => {
  e.preventDefault();
  if (e.target.className === 'gallery__image') {
    const modal = basicLightbox.create(`
      <img width="1400" height="900" src="${e.target.dataset.source}">
    `, {
      onShow: (instance) => {
        document.addEventListener('keydown', e => {
          if (e.code === 'Escape') {
            instance.close();
          }
        })
      },
    })
    modal.show();
  }
}

galleryEl.insertAdjacentHTML('beforeend', markUp(galleryItems));

galleryEl.addEventListener('click', handleClick);
