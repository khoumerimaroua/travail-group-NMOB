const apiKey = "123d53de18f4c00990570e96b5be9ff1";
const searchButton = document.getElementById("searchButton");
const movieTitleInput = document.getElementById("movieTitle");
const movieList = document.getElementById("movieList");
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr-FR&page=1`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    movieList.innerHTML = "";

    for (const result of data.results.slice(5, 19)) {
      const card = document.createElement("div");
      card.classList.add("card");

      const img = document.createElement("img");
      img.src = `https://image.tmdb.org/t/p/w185${result.poster_path}`;
      img.alt = result.title;
      card.appendChild(img);

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
      card.appendChild(cardBody);

      const releaseDate = new Date(result.release_date);
      const year = releaseDate.getFullYear();
      const title = document.createElement("h5");
      title.classList.add("card-title");
      title.innerHTML = `${result.title} <span class="release-date">(${year})</span>`;

      cardBody.appendChild(title);

      movieList.appendChild(card);
    }
  });

searchButton.addEventListener("click", () => {
  const movieTitle = movieTitleInput.value;
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieTitle}&language=fr-FR`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      movieList.innerHTML = "";
      if (data.results.length > 0) {
        for (const result of data.results) {
          const li = document.createElement("li");
          const img = document.createElement("img");
          const p = document.createElement("p");

          img.src = `https://image.tmdb.org/t/p/w185${result.poster_path}`;
          img.alt = result.title;


          p.textContent = result.overview;
          const overviewSentences = result.overview.split('. ');
          p.textContent = overviewSentences.slice(0, 1).join('. ') + '...';



          const releaseDate = new Date(result.release_date);
          const year = releaseDate.getFullYear();
          li.textContent = `${result.title} (${year})`;

          li.appendChild(img);
          li.appendChild(p);
          movieList.appendChild(li);
        }
      } else {
        const li = document.createElement("li");
        li.textContent = "Aucun film trouvé pour cette recherche.";
        movieList.appendChild(li);
      }
    });
});