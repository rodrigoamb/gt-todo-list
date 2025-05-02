// guardar dados no localstorage

const tasks = ["Fazer compras", "Fazer musculação", "Estudar Javascript"];

const tasksJson = JSON.stringify(tasks);

localStorage.setItem("minhasTarefas", tasksJson);

//trazer dados do localstorage

const myJSON = localStorage.getItem("minhasTarefas");

const data = JSON.parse(myJSON);

console.log(data);
