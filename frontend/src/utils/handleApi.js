import axios from 'axios';

const baseURL = 'http://localhost:5000';

const getToDos = (setToDo) => {
    axios.get(baseURL)
        .then((response) => {
            console.log("Fetched Data:", response.data);
            setToDo(Array.isArray(response.data) ? response.data : []);
        })
        .catch((error) => {
            console.error("Error fetching todos:", error);
            setToDo([]); // Fallback to empty array
        });
};

const addToDo = (text,setText, setToDo) => { 
    console.log("Adding ToDo:", text);
    axios.post(`${baseURL}/create`, { text })
        .then((response) => {
            console.log("Added ToDo:", response.data);
            setText('');
            getToDos(setToDo);
        })
        .catch((error) => {
            console.error("Error adding todo:", error);
        });

};

const updateToDo = (toDoId, text, setText, setToDo, setIsUpdating) => {
    console.log("Updating ToDo:", text);

    axios.post(`${baseURL}/update`, { id: toDoId, text })  // Ensure `id` matches backend
        .then((response) => {
            console.log("Updated ToDo:", response.data);
            setText(''); 
            setIsUpdating(false);
            getToDos(setToDo);  // Fetch updated list
        })
        .catch((error) => {
            console.error("Error updating todo:", error);
        });
};

const deleteToDo = (toDoId, setToDo) => {

    axios.post(`${baseURL}/delete`, { id: toDoId})  // Ensure `id` matches backend
        .then((response) => {
            console.log("Deleted ToDo:", response.data);
            getToDos(setToDo);  // Fetch updated list
        })
        .catch((error) => {
            console.error("Error deleting todo:", error);
        });
};

export { getToDos, addToDo, updateToDo, deleteToDo };