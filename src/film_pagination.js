const BASE_URL = 'https://api.themoviedb.org/3/';
const ENDPOINT = 'trending/movie/day';
const API_KEY = 'a4690865d7bdab2d42080cd491b22b8d';
const list = document.querySelector('.js-list');
const loadMore = document.querySelector('.js-load');
let currentPage = 1;

loadMore.addEventListener('click', onLoad);

function onLoad() {
  currentPage += 1;
  getTrending(currentPage)
    .then((data) => {
      list.insertAdjacentHTML('beforeend', createMarkup(data.results));

      if (currentPage === data.total_pages) {
        loadMore.hidden = true;
      }
    })
    .catch((err) => console.log(err));
}

function getTrending(page = 1) {
  return fetch(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}&page=${page}`)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    })
    .catch((err) => console.log(err));
}

function createMarkup(arr) {
  return arr
    .map(({ poster_path, title }) => `<li>
    <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title}">
    <h2>${title}</h2>
  </li>`)
    .join('');
}

getTrending()
  .then((data) => {
    list.insertAdjacentHTML('beforeend', createMarkup(data.results));

    if (currentPage !== data.total_pages) {
      loadMore.hidden = false;
    }
  })
  .catch((err) => console.log(err));
