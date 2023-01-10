


let todos = ['Get groceries', 'Wash a car', 'Make dinner']; 

render();

function addTodo()
{
  let textbox = document.getElementById('todo-title');
  let title = textbox.value;
  todos.push(title);

  render();
}



function render()
{
  todos.forEach(function (todoTitle){
    let element = document.createElement('div');
    element.innerHTML = todoTitle;
    document.body.appendChild(element);
  });
}



 