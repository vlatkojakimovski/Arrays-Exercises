const movies = [
  { title: 'a', year: 2018, rating: 4.5},
  { title: 'b', year: 2018, rating: 4.7},
  { title: 'c', year: 2018, rating: 3},
  { title: 'd', year: 2017, rating: 4.5},
];

let result = movies
  .filter(el => el.year ===2018 && el.rating > 4)
  .reverse()
  .map(el => el.title);


console.log(result);
