const APILINK ='https://api.themoviedb.org/3/movie/550?api_key=YOUR_API_KEY';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=YOUR_API_KEY&query=';

returnMovie(APILINK);
const main = document.getElementById('section');
const form = document.getElementById('form');
const search = document.getElementById('query');
 
returnMovie(APILINK);
document.addEventListener("DOMContentLoaded", () => {
  returnMovie(APILINK);
});



function returnMovie(url) {
  fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      data.results.forEach((element) => {
        const div_card = document.createElement('div');
        div_card.setAttribute('class', 'card');

        const div_row = document.createElement('div');
        div_row.setAttribute('class', 'row');

        const div_column = document.createElement('div');
        div_column.setAttribute('class', 'column');

        const image = document.createElement('img');
        image.setAttribute('class', 'thumbnail');

        const title = document.createElement('h3');
        title.setAttribute('class', 'title');

        title.innerHTML = element.title;
        image.src = `${IMG_PATH}${element.poster_path}`;
        div_card.appendChild(image);
        div_card.appendChild(title);

        div_column.appendChild(div_card);
        div_row.appendChild(div_column);

        main.appendChild(div_row);
      });
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = '';

  const searchItem = search.value;

  if (searchItem) {
    returnMovie(SEARCHAPI + searchItem);
    search.value = '';
  }
});
