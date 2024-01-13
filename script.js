'use strict'
let userLength = prompt('Введіть довжину масиву:');
let myArray = [];

for(let i = 0; i < userLength; i++){
    let userElement = prompt('Введіть елементи масиву(кіл-ть елементів залежить від довжини вашого масиву):');
    myArray.push(userElement);
};
alert(`Ваш масив: ${myArray}`);

myArray.sort();
alert(`Відсортований масив за зростанням: ${myArray}`);

myArray.splice(1,3);
alert(`Масив після видалення з 2 по 4 елемент включно: ${myArray}`);