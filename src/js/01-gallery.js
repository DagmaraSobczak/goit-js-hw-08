// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);
const gallery = document.querySelector('.gallery');

function createGalleryItem(item) {
  const galleryItem = document.createElement('div');
  galleryItem.classList.add('gallery__item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.href = item.original;

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.src = item.preview;
  galleryImage.dataset.source = item.original;
  galleryImage.alt = item.description;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
}

for (let i = 0; i < galleryItems.length; i++) {
  const galleryItem = createGalleryItem(galleryItems[i]);
  gallery.appendChild(galleryItem);
}

var lightbox = new SimpleLightbox('.gallery a', {
  captionSrc: 'alt',
  captionsData: 'alt',
  captionDelay: 250,
});
