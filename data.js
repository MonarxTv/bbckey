// data.js

const movies = [
  {
    id: 4,
    title: "Bunny Colby interracial fuck with BBC Louie Smalls | Blacked",
    thumbnail: "https://x.uuu.cam/pics/blacked/bunny-colby-louie-smalls/lucky-doggystyle-classic/bunny-colby-louie-smalls-6.jpg",
    video: "https://cdn22.vids69.com/video/69/2/68125/68125.mp4",
    categories: ["Blacked", "Anal", "bbc"],
    actors: [
      { name: "Bunny Colby", image: "https://pbs.twimg.com/media/GGkYmY2aIAA9m1r.jpg" },
      { name: "Louie Smalls", image: "https://m.media-amazon.com/images/M/MV5BMzBjNzdhY2EtYzAxMi00NmZhLTgzOTEtODljYzgzMmQ0NTYwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" }
    ]
  },
  {id: 3,
    title: "Jennifer White, Damion Dayski – Wife Slips Our Hotel Room Key To Random BBC",
    thumbnail: "https://updatesz.com/wp-content/uploads/2023/08/114773_01_01.jpg",
    video: "https://v.cdnservice.cloud/npCRsxHwMn6O6gibH9Muhg==,1781470068/porno365/v6/8000/8540/8540_720p.mp4",
    categories: ["TouchMyWife","Anal", "bbc", "dp"],
    actors: [
      { name: "Jennifer White", image: "https://i.pinimg.com/736x/88/79/b6/8879b6668a501d8682bbe91b85d3feac.jpg" },
      { name: "Damion Dayski", image: "https://image.tmdb.org/t/p/w500/95A488ucisVACUwKTljeCJ0bEMH.jpg" }
    ]
  },
  {
    id: 2,
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
  {id: 1,
    title: "Jill Kassidy Pleasuring Two Muscled Black Guys In The Shower",
    thumbnail: "https://iv.okcdn.ru/getVideoPreview?id=8736630180547&idx=2&type=39&tkn=YsxzorhoZahKSMp_TTviDH_XgDI&fn=vid_w",
    video: "https://n.cdnservice.cloud/yuGYSOR5ld3r5k_ns97Pfw==,1781463852/porno365/n5/4000/4792/4792_720p.mp4?cd=attachment&rs=1m",
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
