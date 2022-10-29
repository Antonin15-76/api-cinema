let data = {};

let movie = document.getElementById("name").value;
let url = ""
    if (movie === "") {

      let page = 1

        url = "https://api.themoviedb.org/3/movie/popular?api_key=372c241947026db9c19f79f6b77e0640&page=1"
       returnMovies(url) 
    } 
    
function returnMovies(urlValue, bool = false, page) { 
  let movie = document.getElementById("name").value;
  let url = ""
  if (movie === "" && bool) {
    url = "https://api.themoviedb.org/3/movie/popular?api_key=372c241947026db9c19f79f6b77e0640&page=" + page
} else {
  url = "https://api.themoviedb.org/3/search/movie?api_key=372c241947026db9c19f79f6b77e0640&query=" + movie.toString() + "&page=" + page
}

    fetch(urlValue || url, {
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

    console.log(data)
    let str = '';

    const elementOptionRemove = document.getElementById('select');
          if (elementOptionRemove) elementOptionRemove.remove();

          const centerSelect = document.createElement("div");
          centerSelect.setAttribute("id", "centerSelect");
          centerSelect.className= "center"
    
          document.getElementById("container").appendChild(centerSelect)

          const select = document.createElement("select");
          select.setAttribute("id", "selectId");
          select.setAttribute("onchange", "selectClick()");
    
          document.getElementById("centerSelect").appendChild(select)

    for (let i = 1; i <= data.total_pages; i++) {

      const option = document.createElement("option");
      option.setAttribute("id", "page-option" + str + i);
      if (str + i === page) option.setAttribute("selected", "selected")
      option.setAttribute("value", str + i);
      option.appendChild(document.createTextNode(str + i));

      document.getElementById("selectId").appendChild(option)
    }

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
      if (x.poster_path) img.setAttribute("src", 'https://image.tmdb.org/t/p/w500/' + x.poster_path);

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

let page = 1

function selectClick(page = 1) {
  // console.log(page)
  let movie = ""
  const selectValue = document.getElementById("selectId").value
  console.log(selectValue)
  if (movie === "") {
    returnMovies(undefined, true, selectValue)
  } else {
    returnMovies(undefined, false, selectValue)
  }
    console.log(selectValue)
    console.log(page)
  //  return selectClick(page = selectValue) 
  console.log(page)
  console.log("ici")
}