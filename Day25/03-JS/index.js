
const person = 
{
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: 
    {
        street: '50 main street',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);

console.log(person.hobbies[1]);

console.log(person.adress.city);

const { firstName, lastName, address} = person;

console.log(firstName);

person.email = 'person@gmail.com';