

const search = document.querySelector(".js-search ");
const list = document.querySelector('.js-list')
search.addEventListener('submit', onSearch);

function onSearch(evt){
  evt.preventDefault()
  const {query, days} = evt.currentTarget.elements
  getWeather(query.value, days.value)
.then(data => (list.innerHTML = createMarckup(data.forecast.forecastday)))
.catch(err => console.log(err))
}

function getWeather(city, days){
  // http://api.weatherapi.com/v1/forecast.json?Key=1f7bc7f9338e41ab8e3203315231606&q=Paris&days=5&lang=uk
  const BASE_URL = 'http://api.weatherapi.com/v1';
  const API_KEY = '1f7bc7f9338e41ab8e3203315231606&q';
  return fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}&lang=uk`)
  .then(resp => {
    if(!resp.ok) 
   {throw new Error(resp.statusText)
  }
  return resp.json();
  })
}

function createMarckup(arr){
  return arr.map(({date, day: {avgtemp_c, condition: {text, icon}}}) =>
    `<li>
    <img src="${icon}" alt="${text}">
    <p>${text}</p>
    <h2>${date}</h2>
    <h3>${avgtemp_c} C</h3>
  </li>`).join('')
}

