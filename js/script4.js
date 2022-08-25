"use strict";
/*  
const jepa = {
    name: 'test',
    width: 90,
    colors: {
        border: 'black',
        bg: 'green'
    }
};

console.log(Object.keys(jepa).length);

const {border, bg} = jepa.colors; 
console.log(border); //выводим значение ключа как значение переменной */

/* let counter = 0;
for (let key in jepa) {
    if (typeof  (jepa[key]) === "object") {
        for (let i in jepa[key]){
            console.log(`Свойство ${i} имеет значение ${jepa[key][i]}`);
            counter++; 
        } 
    }else {
        console.log(`Свойство ${key} имеет значение ${jepa[key]}`);
        counter++;
    }
}
console.log(counter); */


function Accumulator (chislo) {
    this.value = chislo;
    
    this.read = function() {
        this.value += +prompt('Сколько нужно добавить?', 0);
      };
    
} 


let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);