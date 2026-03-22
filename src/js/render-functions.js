import SimpleLightbox from "simplelightbox";
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm"


const gallery = document.querySelector('.gallery');


const litebox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});

export function createGallery(images) {
    const markup = images
        .map({
             webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
        }) => `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
            />
          </a>
          <div class="info">
            <p class="info-item"><b>Likes</b> ${likes}</p>
            <p class="info-item"><b>Views</b> ${views}</p>
            <p class="info-item"><b>Comments</b> ${comments}</p>
            <p class="info-item"><b>Downloads</b> ${downloads}</p>
          </div>
        </li>`
}