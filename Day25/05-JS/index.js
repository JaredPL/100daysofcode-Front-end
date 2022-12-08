
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

for(let todo of todos)
{
    console.log(todo.text);
}

todos.forEach(function(todo)
{
    console.log(todo.text);
});

todos.map(function(todo)
{
    console.log(todo.text);
});

const todoText = todos.map(function(todo)
{
    return todo.text;
});

console.log(todoText);


