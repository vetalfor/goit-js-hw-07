import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const renderImage = (arr, container) => {
    const marcup = arr.map((item) => `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img
    class="gallery__image"
    src="${item.preview}"
    alt="${item.description}" />
    </a>
    </li>`).join('');

    container.insertAdjacentHTML('afterbegin', marcup);
}
renderImage(galleryItems, galleryList);

const lightbox = new SimpleLightbox('.gallery__link', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
    
});