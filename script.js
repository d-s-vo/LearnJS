const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('Один из последних просмотренных фильмов?', ""),
      b = prompt('На сколько оцените его?', "");
      c = prompt("Whos of actor you like mostly?", '');
      d = prompt('How would you rate him?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personaMovieDB);
