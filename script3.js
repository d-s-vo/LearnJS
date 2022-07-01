"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
      personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
        personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
      }
      },
    checkWatchedMovies: function() {
      for (let i = 1; i < 2; i++){
      const a = prompt('Один из последних просмотренных фильмов?', ""),
              b = prompt('На сколько оцените его?', "");
              
      if (a != '' && b != '' && a != null && b != null && a.length < 50){
              personalMovieDB.movies[a] = b;
              console.log('все верно!');
      } else {
      console.log('error');
      i--;
      }     
      }
      },
    checkMovieLevel:  function() {
      if (personalMovieDB.count < 10){
               console.log('слабак хуев');
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
               console.log('не самый лошара');
      } else if ( personalMovieDB.count > 30) {
               console.log('трушный чел');
      } 
      },
    writeYourGenres: function() {
      for (let i = 1; i <= 2; i++) {
        let genre = prompt(`Ваш любимый жанр под номером ${i}`);
        if (genre == '' || genre == null){
          console.log('не верно введены значения');
          i--;
        } else{
          personalMovieDB.genres [i - 1] = genre;
        }
        personalMovieDB.genres.forEach((item, i) => {
         console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
        }
        },
    showMyDB: function(hiden) { 
      if(!hiden){
         console.log(personalMovieDB.privat);
        } 
        },
    toggleVisibleMyDB: function(){
      if (personalMovieDB.privat){
           personalMovieDB.privat = false;
      } else {
           personalMovieDB.privat = true;
      }
      },  
      
};
  