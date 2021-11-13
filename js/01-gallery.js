import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainerRef = document.querySelector(".gallery");

const newElements = galleryItems.map(({ preview, original, description }) => `<a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a>`).join('');

galleryContainerRef.innerHTML = newElements;

let modal;

const onOpenModal = event => {
    event.preventDefault();

    const originalHref = event.target.dataset.source;

    modal = basicLightbox.create(`<img class="gallery__image" src="${originalHref}"/>`);
   
    modal.show();

    galleryContainerRef.addEventListener("keydown", onCloseModalByEsc);
}

const onCloseModalByEsc = event => {
    if (event.code === "Escape") {
        modal.close();
         galleryContainerRef.removeEventListener("keydown", onCloseModalByEsc);
    }
}

galleryContainerRef.addEventListener("click", onOpenModal);














