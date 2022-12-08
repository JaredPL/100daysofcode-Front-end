

//const s = 'Hello World';

//console.log(s.split(''));

const numbers = new Array(1,2,3,4,5);

const fruits = ['apples', 'oranges', 'pears']

console.log(numbers);

fruits[0] = 'grapes';

fruits.push('mango'); //creates fruits[3] = 'mango'

fruits.unshift('strawberries'); //push stawberries to the beggining of the array

fruits.pop(); //deletes last element from the array

console.log(Array.isArray(fruits));

console.log("Index of pears: " + fruits.indexOf('pears'));

console.log(fruits);

