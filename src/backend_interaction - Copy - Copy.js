

// const BASE_URL = 'https://the-one-api.dev/v2/';
// const END_POINT = 'character';
// const KEY = 'zIHALIchuqALDd0S9JuU';

// function getCharacter () {
//   const param = new URLSearchParams({
//     limit:30,
//     page:1,  
//   });

//   const option = {
//     method: 'GET',
//     headers:{
//       Authorization: `Bearer ${KEY}`
//     }
//   }

//   fetch(`${BASE_URL}${END_POINT}?${param}`,option).then(resp => console.log(resp) )
// }

// getCharacter()






// const search = document.querySelector(".js-search ");
// const list = document.querySelector('.js-list')
// search.addEventListener('submit', onSearch);

// function onSearch(evt){
//   evt.preventDefault()
//   const {query, days} = evt.currentTarget.elements
//   getWeather(query.value, days.value)
// .then(data => (list.innerHTML = createMarckup(data.forecast.forecastday)))
// .catch(err => console.log(err))
// }

// function getWeather(city, days){
//   // http://api.weatherapi.com/v1/forecast.json?Key=1f7bc7f9338e41ab8e3203315231606&q=Paris&days=5&lang=uk
//   const BASE_URL = 'http://api.weatherapi.com/v1';
//   const API_KEY = '1f7bc7f9338e41ab8e3203315231606&q';
//   return fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}&lang=uk`)
//   .then(resp => {
//     if(!resp.ok) 
//    {throw new Error(resp.statusText)
//   }
//   return resp.json();
//   })
// }

// function createMarckup(arr){
//   return arr.map(({date, day: {avgtemp_c, condition: {text, icon}}}) =>
//     `<li>
//     <img src="${icon}" alt="${text}">
//     <p>${text}</p>
//     <h2>${date}</h2>
//     <h3>${avgtemp_c} C</h3>
//   </li>`).join('')
// }




// const BASE_URL = 'https://api.themoviedb.org/3/';
// const ENDPOINT = 'trending/movie/day';
// const API_KEY = 'a4690865d7bdab2d42080cd491b22b8d';
// const list = document.querySelector('.js-list');
// const loadMore = document.querySelector('.js-load');
// let currentPage = 1;

// function onLoad(){
//   currentPage +=1;
//   getTrending(currentPage)
//   .then((data) => {
//     list.insertAdjacentHTML('beforeend', createMarckup(data.results));
    
//     if (data.page === data.total_pages) {
//       loadMore.hidden = true;
//     }
//   })
//   .catch((err) => console.log(err));
// };

// loadMore.addEventListener('click', onLoad);

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
// if(data.page !== data.total_pages){
//   loadMore.hidden = false;
// }
// })

// .catch(err => console.log(err));

// function createMarckup(arr){
//   return arr.map(({poster_path, title}) => `<li>
//   <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title}">
//   <h2>${title}</h2>
//   </li>`).join('')
// }; 


// чат джіпіті

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

