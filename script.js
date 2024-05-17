// document.addEventListener('DOMContentLoaded', () => {
//     const addBtn = document.getElementById('addBtn');
//     const addBox = document.getElementById('addBox');
//     const todoList = document.getElementById('todoList');
  
//     // Add a new todo item
//     addBox.addEventListener('keypress', function (e) {
//       if (e.key === 'Enter' && addBox.value.trim() !== '') {
//         const todoText = addBox.value.trim();
//         addTodoItem(todoText);
//         addBox.value = '';
//       }
//     });
  
//     function addTodoItem(text) {
//       const itemSpan = document.createElement('span');
//       itemSpan.className = 'item';
  
//       const deleteBtn = document.createElement('input');
//       deleteBtn.type = 'radio';
//       deleteBtn.className = 'deleteBtn';
//       deleteBtn.addEventListener('click', () => {
//         todoList.removeChild(itemSpan, hr);
//       });
  
//       const todoText = document.createElement('p');
//       todoText.textContent = text;
  
//       itemSpan.appendChild(deleteBtn);
//       itemSpan.appendChild(todoText);
  
//       todoList.appendChild(itemSpan);
  
//       const hr = document.createElement('hr');
//       todoList.appendChild(hr);
//     }
    
  
//     // Adding some initial todos
//     const initialTodos = [
//       "Jog around the park 3x",
//       "10 minutes meditation",
//       "Read for 1 hour",
//       "Pick up groceries",
//       "Complete Todo App on Frontend Mentor"
//     ];
  
//     initialTodos.forEach(todo => addTodoItem(todo));
//   });
  