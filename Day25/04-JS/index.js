
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        iCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        iCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        iCompleted: false
    }
];

console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

