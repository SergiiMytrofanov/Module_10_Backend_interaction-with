
const BASE_URL = 'https://api.themoviedb.org/3/';
const ENDPOINT = 'trending/movie/day';
const API_KEY = 'a4690865d7bdab2d42080cd491b22b8d';
const list = document.querySelector('.js-list');

let page = 1;
let isLoading = false;

document.addEventListener('scroll', onScroll);

function onScroll() {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 200) {
    loadNextPage();
  }
}

function loadNextPage() {
  if (isLoading) {
    return;
  }

  isLoading = true;

  getTrending(page)
    .then((data) => {
      const markup = createMarkup(data.results);
      list.insertAdjacentHTML('beforeend', markup);
      page++;
      isLoading = false;
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

function getTrending(page) {
  return fetch(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}&page=${page}`)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    });
}

loadNextPage();










// // Старе

// const BASE_URL = 'https://api.themoviedb.org/3/';
// const ENDPOINT = 'trending/movie/day';
// const API_KEY = 'a4690865d7bdab2d42080cd491b22b8d';
// const list = document.querySelector('.js-list');


// let counter = 0;
// document.addEventListener('scroll', onScroll);


// function onScroll(){
//   counter+=1;
//   console.log(counter);
// }


// const target = document.querySelector('.js-guard');

// let options = {
//   root : null,
//   rootMargin: '200px',
//   threshold : 1.0,
// }

// let observer = new IntersectionObserver(onLoad, options); 

// function onLoad(evt) {
//   console.log(evt)
//   };

//   .catch(err => console.log(err));

// function createMarckup(arr){
//   return arr.map(({poster_path, title}) => `<li>
//   <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title}">
//   <h2>${title}</h2>
//   </li>`).join('')
// }; 

// function getTrending(page=1){
//   return fetch(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}&page=${page}`).then((resp) => {
//     if (!resp.ok){
//       throw new Error(resp.statusText);
//     }
//     return resp.json();
//   })
// }

// getTrending()
// .then((data) => {
//   list.insertAdjacentHTML('beforeend', createMarckup(data.results));
//   observer.observe(target);
// })

// .catch(err => console.log(err));

