"use strict";
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 1; i < 2; i++){
  const a = prompt('Один из последних просмотренных фильмов?', ""),
        b = prompt('На сколько оцените его?', "");
        
  if (a != '' && b != '' && a != null && b != null && a.length < 50){
        personaMovieDB.movies[a] = b;
        console.log('все верно!');
  } else {
    console.log('error');
    i--;
  }     
}

if (personaMovieDB.count < 10){
  console.log('слабак хуев');
} else if (personaMovieDB.count >= 10 && personaMovieDB.count < 30){
  console.log('не самый лошара');
} else if ( personaMovieDB.count > 30) {
  console.log('трушный чел');
} 

console.log(personaMovieDB);
