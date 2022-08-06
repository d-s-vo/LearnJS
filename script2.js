"use strict";

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector(".btn-block");
const list = document.createElement('ul'),
      info = document.createElement('p');

info.textContent = "Я заебался уже сегодня тыкать в ебучий код чтобы кнопки заработали";     

document.body.appendChild(info); 
document.body.appendChild(list);     

wrapper.addEventListener('click', (e) => {
  console.log('fuckYou');

  e.preventDefault();
  
  if(e.target && e.target.tagName == "BUTTON") {
    for (let i = 0; i < 1; ++i){
          const listItem = document.createElement('li');
          const listContent = prompt('What content do you want  the list item to have?');
          listItem.textContent = listContent;
           if (listContent != '' && listContent != null){
              list.appendChild(listItem);
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