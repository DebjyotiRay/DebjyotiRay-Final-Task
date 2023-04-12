// API URL
const API_URL = 'https://api.tvmaze.com';

// Get movies function
async function getMovies() {
  try {
    const response = await fetch(`${API_URL}/shows`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// Render movies function
function renderMovies(movies) {
  const moviesContainer = document.getElementById('movies-container');

  movies.forEach((movie) => {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
     
    
    
    
    const imgElement = document.createElement('img');
    imgElement.src = movie.image.medium;

    // iner.append(movieAnchor);
    const addbutton= document.createElement('button');
    addbutton.classList.add("watch");
    addbutton.innerHTML=`<a href="${movie.url}"><h2> Watch Now </h2></a>`
    const overlayElement = document.createElement('div');
    overlayElement.classList.add('overlay');

    const overlayTextElement = document.createElement('div');
    overlayTextElement.classList.add('overlay-text');
    // const movieAnchor = document.createElement("a");
    // movieAnchor.href = movie.url;
    // movieImage.src = movieInfo.image.medium; 
    // movieImage.alt = movieInfo.name;
    let info=movie.summary.substring(0,230)+"...";
    overlayTextElement.innerHTML = `
      <h1 style="color: #E9F8F9 ,font-family: verdana">${movie.name}</h1>
      <p>${info}</p>
      <p>Rating: ${movie.rating.average}</p>
      <p>Duration: ${movie.runtime} min</p>
    `;
    overlayElement.appendChild(addbutton);
    overlayElement.appendChild(overlayTextElement);
    
    movieElement.appendChild(imgElement);
    movieElement.appendChild(overlayElement);
    moviesContainer.appendChild(movieElement);
  });
}

// Search movies function
async function searchMovies(query) {
  try {
    const response = await fetch(`${API_URL}/search/shows?q=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// Event listener for search button
// const search_enter = document.getElementById("search");
// search_enter.addEventListener("keydown",(e)=> {
//     if (e.key === "Enter") {
//         const searchInput = document.getElementById('search-input');
//   const query = searchInput.value;
//         searchMovies(query);
//     }
// });

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', async () => {
  const searchInput = document.getElementById('search-input');
  const query = searchInput.value;
  const moviesContainer = document.getElementById('movies-container');
  moviesContainer.innerHTML = '';

  const data = await searchMovies(query);
  const movies = data.map((result) => result.show);
  renderMovies(movies);
}
);

// Main function
async function main() {
  const movies = await getMovies();
  renderMovies(movies);
}

main();




  
    
    
    
  
    
  




  

  
    
    
  
  

  





 
