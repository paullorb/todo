/* eslint-disable max-len */
/* eslint-disable eol-last */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-multiple-empty-lines */
// // Select DOM
// const todoInput = document.querySelector('.pa_input');
// const todoButton = document.querySelector('.pa_button');
// const todoList = document.querySelector('.pa_list');

// // Functions

// function saveLocalTodos(todo) {
//   let todos;
//   if (localStorage.getItem('todos') === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem('todos'));
//   }
//   todos.push(todo);
//   localStorage.setItem('todos', JSON.stringify(todos));
// }
// function removeLocalTodos(todo) {
//   let todos;
//   if (localStorage.getItem('todos') === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem('todos'));
//   }
//   const todoIndex = todo.children[0].innerText;
//   todos.splice(todos.indexOf(todoIndex), 1);
//   localStorage.setItem('todos', JSON.stringify(todos));
// }

// function addTodo(e) {
//   // Prevent natural behaviour
//   e.preventDefault();
//   // Create todo div
//   const todoDiv = document.createElement('div');
//   todoDiv.classList.add('todo');
//   // Create list
//   const newTodo = document.createElement('li');
//   newTodo.innerText = todoInput.value;
//   // Save to local - do this last
//   // Save to local
//   saveLocalTodos(todoInput.value);
//   //
//   newTodo.classList.add('todo-item');
//   todoDiv.appendChild(newTodo);
//   todoInput.value = '';
//   // Create Completed Button
//   const completedButton = document.createElement('button');
//   completedButton.innerHTML = '<i class="fas fa-check"></i>';
//   completedButton.classList.add('complete-btn');
//   todoDiv.appendChild(completedButton);
//   // Create trash button
//   const trashButton = document.createElement('button');
//   trashButton.innerHTML = '<i class="fas fa-trash"></i>';
//   trashButton.classList.add('trash-btn');
//   todoDiv.appendChild(trashButton);
//   // attach final Todo
//   todoList.appendChild(todoDiv);
// }

// function deleteTodo(e) {
//   const item = e.target;

//   if (item.classList[0] === 'trash-btn') {
//     // e.target.parentElement.remove();
//     const todo = item.parentElement;
//     todo.classList.add('pa_fall');
//     // at the end
//     removeLocalTodos(todo);
//     todo.addEventListener('transitionend', () => {
//       todo.remove();
//     });
//   }
//   if (item.classList[0] === 'complete-btn') {
//     const todo = item.parentElement;
//     todo.classList.toggle('pa_completed');
//     console.log(todo);
//   }
// }

// function getTodos() {
//   let todos;
//   if (localStorage.getItem('todos') === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem('todos'));
//   }
//   todos.forEach(todo => {
//     // Create todo div
//     const todoDiv = document.createElement('div');
//     todoDiv.classList.add('todo');
//     // Create list
//     const newTodo = document.createElement('li');
//     newTodo.innerText = todo;
//     newTodo.classList.add('todo-item');
//     todoDiv.appendChild(newTodo);
//     todoInput.value = '';
//     // Create Completed Button
//     const completedButton = document.createElement('button');
//     completedButton.innerHTML = '<i class="fas fa-check"></i>';
//     completedButton.classList.add('complete-btn');
//     todoDiv.appendChild(completedButton);
//     // Create trash button
//     const trashButton = document.createElement('button');
//     trashButton.innerHTML = '<i class="fas fa-trash"></i>';
//     trashButton.classList.add('trash-btn');
//     todoDiv.appendChild(trashButton);
//     // attach final Todo
//     todoList.appendChild(todoDiv);
//   });
// }

// // Event Listeners
// document.addEventListener('DOMContentLoaded', getTodos);
// todoButton.addEventListener('click', addTodo);
// todoList.addEventListener('click', deleteTodo);


// new Begin

// Select DOM

// HTML Creation
const section = document.createElement('section');                        // Create the section.pau_section
section.classList.add('pau_section');
document.body.appendChild(section);

const input = document.createElement('input');                            // Create the input.pau_input
input.classList.add('pau_input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Add a new task');
section.appendChild(input);

const button = document.createElement('button');                         // Create the button.pau_button
button.classList.add('pau_button');
button.innerText = 'Add';
section.appendChild(button);

const ul = document.createElement('ul');                                 // Create the ul.pau_list
ul.classList.add('pau_list');
section.appendChild(ul);

// CSS Styling

document.body.style.padding = '0';                                      // CSS Styling for the body
document.body.style.margin = '0';
document.body.style.boxSizing = 'border-box';

section.style.display = 'flex';                                         // CSS Styling for the section.pau_section
section.style.flexDirection = 'column';
section.style.alignItems = 'center';
section.style.width = '100%';
section.style.background = 'linear-gradient(45deg, #ee7752 30%, #e73c7e 60%, #23a6d5 90%, #23d5ab 100%';
section.style.backgroundSize = '400% 400%';
section.style.animation = 'Gradient 1s ease infinite';
section.style.padding = '2rem';
section.style.boxSizing = 'border-box';
section.style.height = '100vh';

input.style.width = '300px';                                           // CSS Styling for the input.pau_input
input.style.height = '30px';
input.style.marginBottom = '10px';
input.style.border = 'none';
input.style.borderRadius = '5px';
input.style.fontSize = '20px';
input.style.textAlign = 'center';

button.style.width = '300px';                                          // CSS Styling for the button.pau_button
button.style.height = '30px';
button.style.border = 'none';
button.style.borderRadius = '15px';

ul.style.listStyle = 'none';                                          // CSS Styling for the ul.pau_list
ul.style.width = '100%';
ul.style.display = 'flex';
ul.style.flexDirection = 'column';
ul.style.flexWrap = 'nowrap';

// Functions

const paCreateTodo = () => {                                          // Function to create a new todo
  if (!input.value) return false;                                     // Added if statement

  const li = document.createElement('li');                            // create the li.pau_list_item
  li.classList.add('pau_list_item');

  li.style.margin = '0.3rem auto';                                    // CSS Styling for the li
  li.style.border = '0.2rem solid white';
  li.style.color = 'white';
  li.style.padding = '0.4rem';
  li.style.borderRadius = '5px';
  li.style.width = '20%';
  li.style.borderCollapse = 'collapse';
  li.style.fontSize = '20px';
  li.style.textAlign = 'center';
  li.style.fontFamily = 'Roboto, sans-serif';
  li.style.display = 'flex';
  li.style.justifyContent = 'flex-end';
  li.style.gap = '0.2rem';

  const p = document.createElement('p');                              // create paragraph
  p.classList.add('pau_list_item_text');
  p.style.flexGrow = '10';
  p.style.textAlign = 'start';
  p.style.paddingLeft = '0.5rem';

  const completedButton = document.createElement('button');           // create completed button
  completedButton.innerText = '😊';

  completedButton.addEventListener('click', () => {
    li.style.textDecoration = 'line-through';
    li.style.opacity = '0.5';
    li.style.transition = 'all 0.8s ease';
  });

  const deleteButton = document.createElement('button');              // create delete button
  deleteButton.innerText = '🥲';

  deleteButton.addEventListener('click', () => {
    li.style.opacity = '0';
    li.style.transition = 'all 0.8s ease';
    setTimeout(() => {
      li.remove();
    }, 800);
  });

  p.innerText = input.value;
  ul.append(li);
  li.append(p, completedButton, deleteButton);

  input.value = '';

  return true; // Added return statement
};

// Event Listeners

button.addEventListener('click', paCreateTodo);                   // Event Listener for the button.pau_button
input.addEventListener('keypress', event => {
  // event.preventDefault();
  if (event.key === 'Enter') {
    paCreateTodo();
  }
});