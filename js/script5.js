"use strict";

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector(".btn-block");
const list = document.createElement('ul'),
      info = document.createElement('p');
const tabPic = document.querySelectorAll('.imageButton'),
      tabWord = document.querySelectorAll('.ulPicture'),
      tabParent = document.querySelector('.conteiner');

info.textContent = "Я заебался уже сегодня тыкать в ебучий код чтобы кнопки заработали";     

/* делегирование функций с родителя на все кнопуи + динамечаски созданная кнопка brtn */
const brtn = document.createElement('button');
brtn.classList.add('button1');
brtn.textContent = 'js';
wrapper.prepend(info);
wrapper.append(brtn);


wrapper.addEventListener('click', (e) => {
  console.log('');

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
      showTabContent(i);
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


/* текущее вермя и дата */

function getTimeRemaining (endtime) {
  const t = Date.parse(new Date()),
        days = new Date().getDate(),
        hours =  new Date().getHours(),
        minutes = new Date().getMinutes(),
        seconds = new Date().getSeconds();
  let month = new Date().getMonth();
        
  switch (month)
        {
          case 0: month="января"; break;
          case 1: month="февраля"; break;
          case 2: month="марта"; break;
          case 3: month="апреля"; break;
          case 4: month="мае"; break;
          case 5: month="июня"; break;
          case 6: month="июля"; break;
          case 7: month="августа"; break;
          case 8: month="сентября"; break;
          case 9: month="октября"; break;
          case 10: month="ноября"; break;
          case 11: month="декабря"; break;
        }      
  
  return {
    'total': t,
    'month': month,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds 
  };      
}

function setClock (selector, endtime) {
  const timer = document.querySelector(selector),
        date = timer.querySelector('.date'),
        time = timer.querySelector('.time'),
        recalcTime = setInterval(updateClock, 1000);
  updateClock();

    function updateClock () {
    const t = getTimeRemaining(endtime);
    function getZero (num) {
      if (num >= 0 && num < 10){return`0${num}`;
      }else{return(num);}
    }
    date.innerHTML = getZero(t.days) + t.month;
    time.innerHTML = `${getZero(t.hours)} : ${getZero(t.minutes)} : ${getZero(t.seconds)}`;
    }
}

setClock ('.timer-conteiner', 1000);



/* измерение размеров */

const field = document.querySelector('.anField');
console.log(field.offsetWidth);
console.log(field.offsetHeight);/* узнал ширину и высоту поля */

const hdr = document.querySelector('header');
console.log(hdr.offsetWidth);
console.log(hdr.offsetHeight);

console.log(5 % 3);








/*  таймер обратного отсчета в котором значения передаются в 4 разных спана
function getTimeRemaining (endtime) {
  const t = Date.parse(new Date()),
        days = new Date().getDate(),
        hours =  new Date().getHours(),
        minutes = new Date().getMinutes(),
        seconds = new Date().getSeconds();
  
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

    if (t.total <= 0){
      clearInterval(timeInterval);
    }

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

   
  }
}

setClock('.timer', 1000); */



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
