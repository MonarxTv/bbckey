// data.js

const movies = [
    {
    title: "Jennifer White: A Tight And Sticky Situation ",
    thumbnail: "https://transform.gammacdn.com/movies/161475/161475_01/previews/2/682/top_1_1920x1080/161475_01_01.jpg?format=webp?quality=30",
    video: "https://vkvd206.okcdn.ru/?expires=1776109756700&srcIp=85.209.19.186&pr=40&srcAg=CHROME&ms=45.136.22.142&type=5&sig=cGKgoyDEMgk&ct=0&urls=176.112.172.133&clientType=13&appId=512000384397&zs=43&id=11851405265610",
    categories: ["thesome", "bbc", "dp"],
    actors: [
      { name: "Jennifer White", image: "https://i.pinimg.com/736x/88/79/b6/8879b6668a501d8682bbe91b85d3feac.jpg" },
      { name: "bbc1", image: "https://image.tmdb.org/t/p/500/95A488ucisVACUwKTljeCJ0bEMH.jpg" },
      { name: "bbc2", image: "https://media.themoviedb.org/tp/w500/6N539DK0cVvmqBk8SuXaMDkrc78.jpg" }
    ]
  },
  {
    title: "Jennifer White, Damion Dayski – Wife Slips Our Hotel Room Key To Random BBC",
    thumbnail: "https://updatesz.com/wp-content/uploads/2023/08/114773_01_01.jpg",
    video: "https://vkvd434.okcdn.ru/?expires=1776107693291&srcIp=85.209.19.247&pr=40&srcAg=CHROME&ms=45.136.21.165&type=6&sig=Xglxbolsp0s&ct=0&urls=176.112.172.154&clientType=13&appId=512000384397&zs=43&id=5955885533791",
    categories: ["Anal", "bbc", "dp"],
    actors: [
      { name: "Jennifer White", image: "https://i.pinimg.com/736x/88/79/b6/8879b6668a501d8682bbe91b85d3feac.jpg" },
      { name: "Damion Dayski", image: "https://image.tmdb.org/t/p/w500/95A488ucisVACUwKTljeCJ0bEMH.jpg" }
    ]
  },
  {
    title: "MILF Teacher Jennifer White Takes Her Students",
    thumbnail: "https://cdn.babehub.com/content/2404009/00150-01_1800.jpg",
    video: "https://cdn22.vids69.com/video/69/2/68125/68125.mp4",
    categories: ["Anal", "bbc", "dp"],
    actors: [
      { name: "Jennifer White", image: "https://i.pinimg.com/736x/88/79/b6/8879b6668a501d8682bbe91b85d3feac.jpg" },
      { name: "Damion Dayski", image: "https://image.tmdb.org/t/p/w500/95A488ucisVACUwKTljeCJ0bEMH.jpg" },
      { name: "Isiah Maxwell", image: "https://media.themoviedb.org/t/p/w500/6N539DK0cVvmqBk8SuXaMDkrc78.jpg" }
    ]
  },
  {
    title: "Jill Kassidy Pleasuring Two Muscled Black Guys In The Shower",
    thumbnail: "https://iv.okcdn.ru/getVideoPreview?id=8736630180547&idx=2&type=39&tkn=YsxzorhoZahKSMp_TTviDH_XgDI&fn=vid_w",
    video: "https://www.eporner.com/embed/kce9s14T6cg/",
    categories: ["bbc", "dp"],
    actors: [
      { name: "Jason Luv", image: "https://image.tmdb.org/t/p/w500/xsvgAj8cGzbyREZWwN9xXvoW19b.jpg" },
      { name: "Jill Kassidy", image: "https://i.redd.it/jndg3ozbd79a1.jpg" },
      { name: "Prince Yahshua", image: "https://image.tmdb.org/t/p/original/5RzDwHJaUcoeIp8ceezwQWYbTSD.jpg" }
    ]
  }
];

// 🟦 Aktorlar ro'yxati
const actorsList = Array.from(new Set(movies.flatMap(m => m.actors.map(a => a.name))))
  .map(name => {
    const movie = movies.find(m => m.actors.some(a => a.name === name));
    const actor = movie.actors.find(a => a.name === name);
    return { name, image: actor.image };
  });

// 🟦 Kategoriyalar ro'yxati
const categoriesList = Array.from(new Set(movies.flatMap(m => m.categories)));
