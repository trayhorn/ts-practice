import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";


const galleryEl = document.querySelector('.gallery');

function markUp(items) {
  return items.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
  })
  .join('')
}

galleryEl.insertAdjacentHTML('beforeend', markUp(galleryItems));

galleryEl.addEventListener('click', e => {
  e.preventDefault();
})
