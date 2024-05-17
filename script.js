document.addEventListener('DOMContentLoaded', () => {
    const addBox = document.getElementById('addBox');
    const todoList = document.querySelector('.lower');
  
    // Function to add a new todo item
    addBox.addEventListener('keypress', function (e) {
      if (e.key === 'Enter' && addBox.value.trim() !== '') {
        const todoText = addBox.value.trim();
        addTodoItem(todoText);
        addBox.value = '';
      }
    });
  
    function addTodoItem(text) {
      const itemSpan = document.createElement('span');
      itemSpan.className = 'item';
  
      const todoText = document.createElement('p');
      todoText.textContent = text;
  
      const deleteBtn = document.createElement('p');
      deleteBtn.id = 'deleteBtn';
      deleteBtn.textContent = 'delete';
      deleteBtn.style.cursor = 'pointer';
      deleteBtn.addEventListener('click', () => {
        todoList.removeChild(itemSpan);
      });
  
      const editBtn = document.createElement('p');
      editBtn.id = 'editBtn';
      editBtn.textContent = 'edit';
      editBtn.style.cursor = 'pointer';
      // You can add edit functionality later if needed.
  
      itemSpan.appendChild(todoText);
      itemSpan.appendChild(deleteBtn);
      itemSpan.appendChild(editBtn);
  
      todoList.appendChild(itemSpan);
    }
  
    // Adding event listeners to initial delete buttons
    document.querySelectorAll('#deleteBtn').forEach(button => {
      button.addEventListener('click', function() {
        const item = this.parentElement;
        todoList.removeChild(item);
      });
    });
  });
  