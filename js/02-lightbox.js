import { galleryItems } from './gallery-items.js';
// Change code below this line

const timeCaption = 250;
const galleryContainerRef = document.querySelector(".gallery");

const newElements = galleryItems.map(({ preview, original, description }) => `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a>`).join(' ');

galleryContainerRef.innerHTML = newElements;

const modal = new SimpleLightbox('.gallery a');

modal.defaultOptions.captionsData = "alt";
modal.defaultOptions.captionDelay = timeCaption;