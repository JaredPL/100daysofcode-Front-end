
let todo1 = 'Get groceries';
let todo2 = 'Wash a car';
let todo3 = 'Make dinner';



/*
element = document.createElement('button');
element.innerHTML = 'Click Me';
document.body.appendChild(element);
*/

function addTodo(todoTitle)
{
  let element = document.createElement('div');
  element.innerHTML = todoTitle;
  document.body.appendChild(element);
}

addTodo('new todo');

element = document.createElement('div');
element.innerHTML = todo2;
document.body.appendChild(element);

element = document.createElement('div');
element.innerHTML = todo3;
document.body.appendChild(element);
 