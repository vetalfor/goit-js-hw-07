import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');
function createGalleryItem(item) {
    const listItem = document.createElement('li');
    listItem.classList.add('gallery__item');

    const link = document.createElement('a');
    link.href = item.original;

    const image = document.createElement('img');
    image.classList.add('gallery__image');
    image.src = item.preview;
    image.dataset.source = item.original;
    image.alt = item.description;

    link.appendChild(image);
    listItem.appendChild(link);

  return listItem;
}

const galleryElements = galleryItems.map(createGalleryItem);
galleryList.append(...galleryElements);

galleryList.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.nodeName === 'IMG') {
    const largeImageUrl = e.target.dataset.source;
    openModal(largeImageUrl);
  }
});