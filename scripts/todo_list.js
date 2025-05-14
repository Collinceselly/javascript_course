const todoList = []; // Initalizing an empty array

// Get the to do text from the input box and add it to the array
function addTodo() {
    const textelement = document.querySelector('.js_todo_text');
    todo_text = textelement.value;

    todoList.push(todo_text)

    textelement.value = '' // Resets back the input box an empty string thereby displaying the placeholder text

    displayTodo()
}

function displayTodo() {
    let todoListHTML = '';

    for (i=0; i<todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p>${todo}</p>`;
        todoListHTML += html

        document.querySelector('.js_todo_display').innerHTML = todoListHTML;
    }
}