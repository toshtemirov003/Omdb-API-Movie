let elList = document.querySelector(".list");
let elInput = document.querySelector(".input");

const renderMovie = (array, node) => {
  node.innerHTML = "";
  let arrSearch = array.Search;
  for (movie of arrSearch) {
    let newItem = document.createElement("li");
    let newTitle = document.createElement("h3");
    let newPost = document.createElement("img");
    let newYear = document.createElement("p");

    newTitle.textContent = movie.Title;
    newPost.src = movie.Poster;
    newYear.textContent = `Year: ${movie.Year}`;

    newItem.setAttribute("class", "list-item");
    newPost.setAttribute("class", "movie-img");

    newItem.appendChild(newPost);
    newItem.appendChild(newTitle);
    newItem.appendChild(newYear);
    node.appendChild(newItem);
  }
};

elInput.addEventListener("change", function () {
  let elInpVal = elInput.value;
  async function getPosts(res) {
    const response = await fetch(`http://www.omdbapi.com/?apikey=d50f1560&s=${res}`);
    const data = await response.json();
    renderMovie(data, elList);
  }
  getPosts(elInpVal);

  elInput.value = "";
});
