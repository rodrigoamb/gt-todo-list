const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

let todos = JSON.parse(localStorage.getItem("todos")) || [];

saveToLocalStorage();

function renderTodos() {
  todoList.innerHTML = "";
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

function addTodo(event) {
  event.preventDefault();

  const newTodo = todoInput.value.trim();

  if (newTodo === "") {
    return;
  }

  todos.push(newTodo);
  saveToLocalStorage();
  renderTodos();
  todoInput.value = "";
}

renderTodos();

todoForm.addEventListener("submit", addTodo);
