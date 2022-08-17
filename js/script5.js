"use strict";

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector(".btn-block");
const list = document.createElement('ul'),
      info = document.createElement('p');
const tabPic = document.querySelectorAll('.imageButton'),
      tabWord = document.querySelectorAll('.ulPicture'),
      tabParent = document.querySelector('.conteiner');

info.textContent = "Я заебался уже сегодня тыкать в ебучий код чтобы кнопки заработали";     


const brtn = document.createElement('button');
brtn.classList.add('button1');
brtn.textContent = 'choose';
wrapper.prepend(info);
wrapper.append(brtn);

/* делегирование функций с родителя на все кнопуи + динамечаски созданная кнопка brtn */
wrapper.addEventListener('click', (e) => {
  console.log('fuckYou');

  e.preventDefault();
  
  if(e.target && e.target.tagName == "BUTTON") {
    for (let i = 0; i < 1; ++i){
          const listItem = document.createElement('li');
          const listContent = prompt('What content do you want  the list item to have?');
          listItem.textContent = listContent;
           if (listContent != '' && listContent != null){
              wrapper.appendChild(listItem);
           }else{
             i--;
           }
          listItem.onclick = function (e) {
            e.stopPropagation();
            const listContent = prompt('Enter new content for your list item');
            this.textContent = listContent;
           };
         }
        }  
    

});

/* включение табов на картинки и слова */

function hideTabContent () {
  tabPic.forEach (pic => {
   pic.classList.add('hide');
   pic.classList.remove('show');
  });
  tabWord.forEach (word => {
    word.classList.remove('ulPicture_item_active');
  });
}

function showTabContent (i = 0) {
  tabPic[i].classList.add('show');
  tabPic[i].classList.remove('hide');
  tabWord[i].classList.add('ulPicture_item_active');
} 

hideTabContent();
showTabContent();

tabParent.addEventListener ('click', (e) => {
 const target = e.target;
 if (target && target.classList.contains('ulPicture')){
   tabWord.forEach((item, i) => {
     if(target == item) {
      hideTabContent();
      showTabContent(i);ан
     }
   });
 }
 
});

/* анимация с использованием setInterval и setTimeout */

const animationBtn = document.querySelector('.anButton');
let timerId,
    elem;

function firstAnimation() {
  let positionObj = 0;
  const elem = document.querySelector(".anObj");

  const timerId = setInterval(farme, 10),
        tumerId = setInterval(farme, 10);

  function farme() {
    const elemTop = elem.style.top,
      elemLeft = elem.style.left;
    const elemOffset = elem.getBoundingClientRect().width / 2;  

    console.log({
      elemTop,
      elemLeft,
      positionObj
    });

    if (elemTop === "355px" || elemLeft === "680px") {
      clearInterval(timerId);
    } else {
      positionObj++;
      elem.style.top = positionObj + "px";
      elem.style.left = positionObj / 4 + "%";
    }
  }
}

animationBtn.addEventListener ('click', firstAnimation);


/* таймер обратного отсчета */

const deadline = '2022-09-01';

function getTimeRemaining (endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor (t / (1000 * 60 * 60 * 24)),
        hours = Math.floor ((t / (1000 * 60 * 60)) % 24 ),
        minutes = Math.floor ((t / (1000 * 60)) % 60),
        seconds = Math.floor ((t / 1000) % 60);
  
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds 
  };      
}

function setClock (selector, endtime) {
  const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);
  updateClock();

  function updateClock () {
  
    const t = getTimeRemaining (endtime);

    function getZero (num) {
      if (num >= 0 && num < 10){
        return`0${num}`;
      }else{
        return(num);
      }
    }
    days.innerHTML = getZero(t.days);
    hours.innerHTML = getZero(t.hours);
    minutes.innerHTML = getZero(t.minutes);
    seconds.innerHTML = getZero(t.seconds);

    if (t.total <= 0){
      clearInterval(timeInterval);
    }
  }
}

setClock('.timer', deadline);

/* измерение размеров */

const field = document.querySelector('.anField');
console.log(field.offsetWidth);
console.log(field.offsetHeight);/* узнал ширину и высоту поля */

const hdr = document.querySelector('header');
console.log(hdr.offsetWidth);
console.log(hdr.offsetHeight);

console.log(5 % 3);












/* btns.addEventListener ('click', (event) => {
  event.preventDefault();

 if(event.target && event.target.tagName == "BUTTON") {
  console.log('hello');

    for (let i = 0; i < 1; ++i){
    const listItem = document.createElement('li');
    const listContent = prompt('What content do you want  the list item to have?');
    listItem.textContent = listContent;
    if (listContent != '' && listContent != null){
        list.appendChild(listItem);
        console.log = ('its good'); и этот тоже
    }else{
      console.log = ('error'); нужно было удалить консоль логи
      i--;
    }
    listItem.onclick = function (e) {
      e.stopPropagation();
      const listContent = prompt('Enter new content for your list item');
      this.textContent = listContent;
     };
   } 
 }

}); */

/* html.onclick = function() {
  const listItem = document.createElement('li');
  let listContent = prompt('What content do you want the list item to have?');
  listItem.textContent = listContent;
  for (let i = 0; i < 3; i++) {
    if (listContent != '' && listContent != null){
      list.appendChild(listItem);
      console.log = ('vse ok');
    }else{
      console.log = ('nepedelau');
      i--;
    }
  }
  
    listItem.onclick = function(e) {
    e.stopPropagation();
    const listContent = prompt('Enter new content for your list item');
    this.textContent = listContent;
  };
}; */

/* html.onclick = function() {
  const listItem = document.createElement('li');
  const listContent = prompt('What content do you want the list item to have?');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  /* listItem.onclick = function(e) {
    e.stopPropagation();
    for (let i = 0; i < 1; i++) {
    let listContent = prompt('Enter new content for your list item');
    this.textContent = listContent;
    if (listContent != '' && listContent != null)
        console.log = ('krasava');
      }else{
        console.log = ('lox');
        i--;
    }
  };
  }; */
