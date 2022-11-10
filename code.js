const filteredList = watchList
    .filter((film) => film.imdbRating >= 8.0)
    .map((film) => ({ title: film['Title'], rating: film['imdbRating'] }));

console.log(filteredList);
