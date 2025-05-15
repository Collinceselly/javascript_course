const todoList = []; // Initalizing an empty array

// Get the to do text from the input box and add it to the array
function addTodo() {
    const textelement = document.querySelector('.js_todo_text'); // Fetching the todo text value
    const todo_text = textelement.value;

    const dateInputElement = document.querySelector('.js_todo_date'); // fetching the todo date
    const due_date = dateInputElement.value;

    todoList.push({ // Adding the fetched elements together into a list in object format
        name : todo_text, 
        dueDate:due_date
    })

    textelement.value = '' // Resets back the input box an empty string thereby displaying the placeholder text

    displayTodo()
}

function displayTodo() {
    let todoListHTML = '';

    for (let i=0; i<todoList.length; i++) {
        const todoObj = todoList[i];
        const name = todoObj.name; // fetching the todo from the object
        const dueDate = todoObj.due_date; // fetching the date from the object
        // const { name, dueDate } = todoObj;

        // displaying the todo and duedate on the page and adding a delete functionality
        const html = `
            <p>
                ${name} ${dueDate} 
                <button onclick="
                    todoList.splice(${i}, 1);
                    displayTodo();
                ">Delete</button>
            </p>`;
        todoListHTML += html

        document.querySelector('.js_todo_display').innerHTML = todoListHTML; // rendering the fetched text and date on the paragraph template as innerHTML
    }
    
}