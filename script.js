const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

const data = ["tarefa1", "tarefa2", "tarefa3"];

function saveToLocalStorage() {
  localStorage.setItem("taks", JSON.stringify(data));
}

let todos = JSON.parse(localStorage.getItem("taks")) || [];

console.log(todos);

saveToLocalStorage();

function renderTodos() {
  todos.forEach((todo, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = todo;

    const actions = document.createElement("div");
    actions.className = "actions";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Editar";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Excluir";

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);

    todoList.appendChild(li);
  });
}
