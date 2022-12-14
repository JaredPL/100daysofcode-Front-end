

const todos = [{
  title: 'Get groceries',
  dueDate: '2021-10-04'
},{
  title: 'Wash a car',
  dueDate: '2021-02-03'
},{
  title: 'Make dinner',
  dueDate: '2021-03-04'
}];

render();

function addTodo()
{
  const textbox = document.getElementById('todo-title');
  const title = textbox.value;

  const datePicker = document.getElementById('date-picker');
  const dueDate = datePicker.value;
  
  todos.push({
    title: title,
    dueDate: dueDate
  });

  
  render();
}


function render()
{
  //reset our list
  document.getElementById('todo-list').innerHTML = "";

  todos.forEach(function (todo){
    const element = document.createElement('div');
    element.innerHTML = todo.title + ' ' + todo.dueDate;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.style = "margin-left: 16px";
    element.appendChild(deleteButton);

    const todoList = document.getElementById('todo-list');
    todoList.appendChild(element);
  });
}



 