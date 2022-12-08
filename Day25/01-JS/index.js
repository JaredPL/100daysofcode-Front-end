

const name = 'John is cool';

console.log(name.charAt(name.length-1));

console.log(name.substring(0,4));

console.log(name.substring(name.indexOf("c"),name.indexOf("l")+1))

let l =name.charAt(name.length-1);

console.log(name.indexOf(l));

console.log(name.substring(7, name.indexOf(l)+1));

console.log(`${name} ${name.length}`);

console.log(name.substring(0,4).toUpperCase());   


//console.log(name.substring(4,));
