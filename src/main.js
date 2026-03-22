import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more-button');

let page = 1;
let currentQuery = '';

hideLoadMoreButton();

form.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSearch(event) {
  event.preventDefault();

  const query = event.currentTarget.elements['search-text'].value.trim();

  if (!query) return;

  currentQuery = query;
  page = 1;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, page);

    if (!data.hits || data.hits.length === 0) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        messageColor: '#fff',
        backgroundColor: '#ef4040',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);

    if (data.totalHits > 15) {
      showLoadMoreButton();
    }

    page += 1;
  } catch {
    iziToast.show({
      message: 'Something went wrong. Please try again later.',
      messageColor: '#fff',
      backgroundColor: '#ef4040',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

async function onLoadMore() {
  showLoader();
  hideLoadMoreButton();

  try {
    const data = await getImagesByQuery(currentQuery, page);

    createGallery(data.hits);

    const card = document.querySelector('.gallery-item');

    if (card) {
      const cardHeight = card.getBoundingClientRect().height;

      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }

    const totalLoaded = page * 15;

    if (totalLoaded >= data.totalHits) {
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        messageColor: '#fff',
        backgroundColor: '#ef4040',
        position: 'topRight',
      });
      hideLoadMoreButton();
    } else {
      showLoadMoreButton();
    }

    page += 1;
  } catch {
    iziToast.show({
      message: 'Something went wrong. Please try again later.',
      messageColor: '#fff',
      backgroundColor: '#ef4040',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}