let data = {};

function returnMovies() {
    let movie = document.getElementById("name").value
    console.log(movie)
    fetch('https://api.themoviedb.org/3/search/movie?api_key=372c241947026db9c19f79f6b77e0640&query=' + movie.toString(), {
  method: 'GET', 
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
    
    const elementRemove = document.getElementById('container');
    if (elementRemove) elementRemove.remove();
    const content = document.createElement("div");
    content.className = 'container';
    content.setAttribute("id", "container");
    
    document.getElementById("content").appendChild(content);

    data.results.map(x => {

    const divContainer = document.createElement("div");
    divContainer.className = 'block';
    divContainer.setAttribute("id", "block" + x.id)

    document.getElementById('container').appendChild(divContainer);

    const divCenter = document.createElement("div");
    divCenter.className = "center";
    divCenter.setAttribute("id", "center" + x.id);

    document.getElementById('block' + x.id).appendChild(divCenter);

    const h3 = document.createElement("h3");
    h3.setAttribute("id", "titleMovie");
    h3.appendChild(document.createTextNode(x.title));

    document.getElementById('center' + x.id).appendChild(h3);

    const left1 = document.createElement("div");
    left1.className = "left";
    left1.setAttribute("id", "left1" + x.id);

    document.getElementById('block' + x.id).appendChild(left1);

    const img = document.createElement("img");
    img.className = "img";
    // img.setAttribute("id", "img" + x.id);
    img.setAttribute("src", 'https://image.tmdb.org/t/p/w500/' + x.poster_path);

    document.getElementById('left1' + x.id).appendChild(img);

    const left2 = document.createElement("div");
    left2.className = "left";
    left2.setAttribute("id", "left2" + x.id);

    document.getElementById('block' + x.id).appendChild(left2);

    const para = document.createElement("p");
    para.appendChild(document.createTextNode(x.overview));

    document.getElementById('left2' + x.id).appendChild(para);

    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}
