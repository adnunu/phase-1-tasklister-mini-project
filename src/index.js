// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get the form element
  const form = document.getElementById('create-task-form');
  
  // Add submit event listener to the form
  form.addEventListener('submit', function(event) {
    // Prevent default form submission behavior
    event.preventDefault();
    
    // Get the task description from the input field
    const taskDescription = document.getElementById('new-task-description').value;
    
    // Call the buildToDo function with the task description
    buildToDo(taskDescription);
    
    // Clear the form input
    event.target.reset();
  });
});

// Function to build and display a todo item
function buildToDo(task) {
  // Create a new list item element
  const li = document.createElement('li');
  
  // Set the text content to the task description
  li.textContent = task;
  
  // Get the task list (ul with id 'tasks')
  const taskList = document.getElementById('tasks');
  
  // Append the new list item to the task list
  taskList.appendChild(li);
}
