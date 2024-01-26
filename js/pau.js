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

// HTML Selection
const pSection = document.querySelector('.pau');                        // Create the section.pau_section


// HTML Creation
const pInput = document.createElement('input');                            // Create the input.pau_input
pInput.classList.add('pau_input');
pInput.setAttribute('type', 'text');
pInput.setAttribute('placeholder', 'Add a new task');
pSection.appendChild(pInput);

const pButton = document.createElement('button');                         // Create the button.pau_button
pButton.classList.add('pau_button');
pButton.innerText = 'Add';
pSection.appendChild(pButton);

const pUl = document.createElement('ul');                                 // Create the ul.pau_list
pUl.classList.add('pau_list');
pSection.appendChild(pUl);


// CSS Styling
document.body.style.padding = '0';                                      // CSS Styling for the body
document.body.style.margin = '0';
document.body.style.boxSizing = 'border-box';

pSection.style.display = 'flex';                                         // CSS Styling for the section.pau_section
pSection.style.flexDirection = 'column';
pSection.style.alignItems = 'center';
pSection.style.width = '100%';
pSection.style.background = 'linear-gradient(45deg, #ee7752 30%, #e73c7e 60%, #23a6d5 90%, #23d5ab 100%';
pSection.style.backgroundSize = '400% 400%';
pSection.style.padding = '2rem';
pSection.style.boxSizing = 'border-box';
pSection.style.height = '100vh';
pSection.style.margin = '0 auto 0';

pInput.style.width = '300px';                                           // CSS Styling for the input.pau_input
pInput.style.height = '30px';
pInput.style.marginBottom = '10px';
pInput.style.border = 'none';
pInput.style.borderRadius = '5px';
pInput.style.fontSize = '20px';
pInput.style.textAlign = 'center';

pButton.style.width = '300px';                                          // CSS Styling for the button.pau_button
pButton.style.height = '30px';
pButton.style.border = 'none';
pButton.style.borderRadius = '1rem';
pButton.style.marginBottom = '2rem';

pUl.style.listStyle = 'none';                                          // CSS Styling for the ul.pau_list
pUl.style.width = '100%';
pUl.style.display = 'flex';
pUl.style.flexDirection = 'column';
pUl.style.flexWrap = 'nowrap';

// Functions
const paCreateTodo = () => {                                          // Function to create a new todo
  if (!pInput.value) return false;                                    // Added if statement

  const pLi = document.createElement('li');                           // create the li.pau_list_item
  pLi.classList.add('pau_list_item');

  pLi.style.margin = '1rem auto 0';                                     // CSS Styling for the li
  pLi.style.border = '0.2rem solid white';
  pLi.style.color = 'white';
  pLi.style.padding = '0.4rem';
  pLi.style.borderRadius = '5px';
  pLi.style.width = '70%';
  pLi.style.borderCollapse = 'collapse';
  pLi.style.fontSize = '20px';
  pLi.style.textAlign = 'center';
  pLi.style.fontFamily = 'Roboto, sans-serif';
  pLi.style.display = 'flex';
  pLi.style.justifyContent = 'flex-end';
  pLi.style.gap = '0.2rem';

  const pP = document.createElement('p');                              // create paragraph
  pP.classList.add('pau_list_item_text');
  pP.style.flexGrow = '10';
  pP.style.textAlign = 'start';
  pP.style.paddingLeft = '0.5rem';

  const completedButton = document.createElement('button');           // create completed button
  completedButton.innerText = '😊';

  completedButton.addEventListener('click', () => {
    pLi.style.textDecoration = 'line-through';
    pLi.style.opacity = '0.5';
    pLi.style.transition = 'all 0.8s ease';
  });

  const deleteButton = document.createElement('button');              // create delete button
  deleteButton.innerText = '🥲';

  deleteButton.addEventListener('click', () => {
    pLi.style.opacity = '0';
    pLi.style.transition = 'all 0.8s ease';
    setTimeout(() => {
      pLi.remove();
    }, 800);
  });

  pP.innerText = pInput.value;
  pUl.append(pLi);
  pLi.append(pP, completedButton, deleteButton);

  pInput.value = '';

  return true;
};

const addFavicon = () => {                                            // Function to add favicon
  const pImg = new Image();
  pImg.src = 'https://www.google.com/favicon.ico';
  document.head.appendChild(pImg);
};

// Event Listeners

pButton.addEventListener('click', paCreateTodo);                   // Event Listener for the button.pau_button
pInput.addEventListener('keypress', event => {                     // Event Listener for the input.pau_input
  // event.preventDefault();
  if (event.key === 'Enter') {
    paCreateTodo();
  }
});
window.addEventListener('click', (addFavicon));                         // Event Listener for the window