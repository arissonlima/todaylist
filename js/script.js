const inputAddTask = document.querySelector(".inputAddTask");
const btnAddTask = document.querySelector(".addTaskButton");
const btnDoneTask = document.querySelector(".doneTask");
const btnRemoveTask = document.querySelector(".btnRemoveTask");
const dayOfTheWeek = document.querySelector(".day-of-the-week");
const fullDate = document.querySelector(".full-date");
const task = document.querySelector(".task");
const congratulationsMsg = document.querySelector(".congratulations");

// Loads icons from the Lucide library
lucide.createIcons();

const week = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

const date = new Date();
const day = date.getDate();
const month = date.getMonth().toLocaleString("en-IN");
const year = date.getFullYear();

dayOfTheWeek.innerHTML = week[date.getDay()];
fullDate.toLocaleString().innerHTML = `${month} ${day}, ${year}`;

function addNewTask() {
  console.log(inputAddTask.value);
}

function deleteTask() {
  alert("Deletando...");
}

function doneTask() {
  alert("Finalizando tarefa...");
}

let tasksList = [];

tasksList.forEach((item) => {
  task.innerHTML = item;
  console.log(item);
});

if (tasksList.length === 0) {
  congratulationsMsg.classList.add("emptyTasksList");
  console.log("Tá vazia!");
}

btnAddTask.addEventListener("click", addNewTask);
btnDoneTask.addEventListener("click", doneTask);
btnRemoveTask.addEventListener("click", deleteTask);
