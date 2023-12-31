import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
let instance = null;

const renderImage = (arr, container) => {
    const marcup = arr.map((item) => `<li class="gallery__item">
    <a class="gallery-link">
    <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"/>
    </a>
    </li>`).join('');

    container.insertAdjacentHTML('afterbegin', marcup)
}
renderImage(galleryItems, galleryList)

function openModal(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }
    instance = basicLightbox.create(`
    <div class="modal">
        <img src="${event.target.dataset.source}">
    </div>`, {
        onShow: (instance) => {
            window.addEventListener('keydown', closeModalOnEsc);
        },
        onClose: (instance) => {
            window.removeEventListener('keydown', closeModalOnEsc);
        }
    });

    instance.show();
}

function closeModalOnEsc(event) {
    if (event.code === 'Escape') {
        instance.close();
    }
    
}
galleryList.addEventListener('click', openModal);