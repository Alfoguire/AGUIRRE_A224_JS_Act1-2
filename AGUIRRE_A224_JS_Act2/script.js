const txtToDoItem = document.getElementById("txtToDoItem");
const btnAddTask = document.getElementById("btnAddTask");
const lstTodos = document.getElementById("lstTodos");

let todos = [];

function display() {
    let todoItems = "";
    for (let i = 0; i < todos.length; i++) {
        console.log(`Task ${i + 1}: ${todos[i]}`);
        todoItems += `<li>${todos[i]}</li>`;
    }
    lstTodos.innerHTML = todoItems;
    console.log("Updated To-Do List:", todos);
}

btnAddTask.addEventListener("click", () => {
    const task = txtToDoItem.value.trim();
    console.log("Entered Task:", task);
    if (task !== "") {
        todos.push(task);
        console.log("Task Added. Current Tasks:", todos);
        txtToDoItem.value = "";
        display();
    } else {
        console.log("No task entered. Please provide a valid task.");
    }
});



// todos.push("Task 1")
// todos.push("Task 2")
// todos.push("Task 3")

// console.log(todos)
// console.log(todos.length)
// console.log(todos[0])       
// console.log(todos[todos.length-1])
// let index = 2
// console.log(todos[index])

// For Loop
// for (declaration; condition; iteration) {
//     loop body
// }
// While Loop
// while (condition) {
//     loop body
// }