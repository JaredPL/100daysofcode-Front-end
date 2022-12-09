/*
//constructor
function Person(firstName, lastName, dob)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}
*/

let dateX = new Date('5-22-2005');

console.log(dateX.getMonth());  //January is 0 February is 1 etc.

console.log(dateX.getDay()); //returns day of the week Monday is 0 Tuesday is 1 etc.

console.log(dateX.getDate()); //return day of the month

console.log("----------------------------------------");

class Person
{
    constructor(firstName, lastName, dob)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear()
    {
        return this.dob.getFullYear();
    }

    getFullName()
    {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person2.getBirthYear());
console.log(person1.getFullName());
console.log(person1);





