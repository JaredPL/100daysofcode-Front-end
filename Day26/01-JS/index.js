
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];
/*
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
*/

const todoCompleted = todos.filter(function(todo)
{
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});

console.log(todoCompleted);


