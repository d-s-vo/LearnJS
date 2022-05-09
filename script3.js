"use strict";


let numberOfFilms;

function start () {
   numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
   }
}
start();

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


function checkWatchedMovies () {
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
}
checkWatchedMovies ();


function checkMovieLevel () {
    if (personaMovieDB.count < 10){
        console.log('слабак хуев');
      } else if (personaMovieDB.count >= 10 && personaMovieDB.count < 30){
        console.log('не самый лошара');
      } else if ( personaMovieDB.count > 30) {
        console.log('трушный чел');
      } 
}
checkMovieLevel ();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personaMovieDB);
    } 
}
showMyDB(personaMovieDB.private);

/* function writeYourGenres () {
    for (let i = 1; i <= 3; i++){
        const genre = prompt('Ваш любимый жанр под номером ${i}');
        personaMovieDB.genre [i - 1] = genre;
    }
}
writeYourGenres();  */

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
    personaMovieDB.genres [i - 1] = prompt('Ваш любимый жанр под номером ${i}');
    }
}
writeYourGenres();