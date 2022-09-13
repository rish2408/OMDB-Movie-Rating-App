let pages = [1];
let pagesRow = document.getElementById('pagesRow');
pages.forEach(function (el) {
    let col = document.createElement('div');
    pagesRow.append(col);
});
async function fetchPopularMovies(page=1) {
    const query = `https://api.themoviedb.org/3/movie/popular?api_key=9292d6d6c78665bdc9cf66bba9ab9048&language=en-US&page=${page}`;
    let response = await fetch (query);
    let data = await response.json();
    displayResults(data.results);
    updatePageNumber (page);
}

fetchPopularMovies();
let moviesDiv = document.getElementById('movies');



console.log(pages);

function displayResults (movies) {
    moviesDiv.innerHTML = null;
    movies.forEach(function (el) {
        let card = document.createElement('div');
        card.style.width = '16rem';
        card.setAttribute("id","movieDiv");

        let movieImage = document.createElement('img');
        movieImage.src = `https://image.tmdb.org/t/p/w500${el.poster_path}`;
        movieImage.style.borderRadius = "10px";
        movieImage.style.height = "250px";
        movieImage.style.width = "260px";

        let cardBody = document.createElement('div');

        let voteAvg = document.createElement('h3');
        voteAvg.innerText = `${el.vote_average*10}%`;
        voteAvg.style.marginBottom = "10px"

        let title = document.createElement('h2');
        title.innerText = el.title;
        title.style.color = "red";
        title.style.marginBottom = "10px"

        let date = document.createElement('p');
        date.innerText = el.release_date;

        cardBody.append(title,voteAvg,date);

        card.append(movieImage,cardBody);
        moviesDiv.append(card);
    })
}