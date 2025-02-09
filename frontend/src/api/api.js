// makes HTTP request to backend with CruD operations

const API_URL = "http://192.168.56.1:5000/api/tasks"; // Backend URL makes HTTP requests to backend

// fetch all tasks
export const fetchTasks = async () => {
  try {
    const response = await fetch(API_URL); // GET request
    return await response.json(); // return response as JSON
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return []; // return empty array if error
  }
};

// create a new task
export const createTask = async (task) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST', // POST request
      headers: {
        'Content-Type': 'application/json' // set content type to JSON
      },
      body: JSON.stringify(task) // convert task to JSON string
    });
    return await response.json();
  } catch (error) {
    console.error("Error creating task:", error);
    return null; // return null if error
  }
};

// update a task 
export const updateTask = async (id, task) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT', // PUT request to update task
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    });
    return await response.json();
  } catch (error) {
    console.error("Error updating task:", error);
    return null;
  }
};

export const deleteTask = async (id) => {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE' // DELETE request to delete task
    });
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};