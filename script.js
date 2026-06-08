function getParam(name){
  const params=new URLSearchParams(window.location.search);
  return params.get(name);
}

/* INDEX */
function renderIndex(){
  const container=document.getElementById("movie-grid");
  movies.forEach(movie=>{
    const card=document.createElement("div");
    card.className="movie-card";
    card.onclick=()=>window.location.href=`list.html?id=${movie.id}`;

    const img=document.createElement("img");
    img.src=movie.image;

    const overlay=document.createElement("div");
    overlay.className="overlay";
    overlay.textContent=movie.title;

    card.appendChild(img);
    card.appendChild(overlay);
    container.appendChild(card);
  });
}

/* LIST */
function renderMovieDetails(){
  const id=getParam("id");
  const movie=movies.find(m=>m.id==id);
  if(!movie) return;

  document.getElementById("movie-title").textContent=movie.title;
  const iframe=document.getElementById("movie-video");
  iframe.src=movie.video;

  const catContainer=document.getElementById("categories");
  movie.categories.forEach(cat=>{
    const div=document.createElement("div");
    div.textContent=cat;
    div.onclick=()=>window.location.href=`kategory.html?cat=${encodeURIComponent(cat)}`;
    catContainer.appendChild(div);
  });

  const actContainer=document.getElementById("actors");
  movie.actors.forEach(act=>{
    const div=document.createElement("div");
    const img=document.createElement("img");
    img.src=act.image;
    const name=document.createElement("div");
    name.textContent=act.name;
    div.appendChild(img);
    div.appendChild(name);
    div.onclick=()=>window.location.href=`actors.html?name=${encodeURIComponent(act.name)}`;
    actContainer.appendChild(div);
  });
}

/* ACTORS */
function renderActorMovies(){
  const name=getParam("name");
  const container=document.getElementById("actor-movies");
  const actorMovies=movies.filter(m=>m.actors.some(a=>a.name===name));
  actorMovies.forEach(m=>{
    const card=document.createElement("div");
    card.className="movie-card";
    card.onclick=()=>window.location.href=`list.html?id=${m.id}`;
    const img=document.createElement("img");
    img.src=m.image;
    const overlay=document.createElement("div");
    overlay.className="overlay";
    overlay.textContent=m.title;
    card.appendChild(img);
    card.appendChild(overlay);
    container.appendChild(card);
  });
}

/* CATEGORY */
function renderCategoryMovies(){
  const cat=getParam("cat");
  const container=document.getElementById("category-movies");
  const catMovies=movies.filter(m=>m.categories.includes(cat));
  catMovies.forEach(m=>{
    const card=document.createElement("div");
    card.className="movie-card";
    card.onclick=()=>window.location.href=`list.html?id=${m.id}`;
    const img=document.createElement("img");
    img.src=m.image;
    const overlay=document.createElement("div");
    overlay.className="overlay";
    overlay.textContent=m.title;
    card.appendChild(img);
    card.appendChild(overlay);
    container.appendChild(card);
  });
}