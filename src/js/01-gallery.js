import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// * Створює і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
const galleryList = document.querySelector('ul.gallery');

const makeGalleryItemMarkup = ({
  preview,
  original,
  description,
} = galleryItems) => {
  return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>
    `;
};

const GallaryMarkup = galleryItems.map(makeGalleryItemMarkup).join('');

galleryList.insertAdjacentHTML('beforeend', GallaryMarkup);

// * Застосовує SimpleLightbox
new SimpleLightbox('ul.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
