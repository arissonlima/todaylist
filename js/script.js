const inputAddTask = document.querySelector(".inputAddTask");
const btnAddTask = document.querySelector(".addTaskButton");
const btnDoneTask = document.querySelector(".doneTask");
const btnRemoveTask = document.querySelector(".btnRemoveTask");
const dayOfTheWeek = document.querySelector(".day-of-the-week");
const fullDate = document.querySelector(".full-date");
const tasks = document.querySelector(".tasks");
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

let tasksList = [];

function isEmpty() {
  if (tasksList.length === 0) {
    congratulationsMsg.classList.add("emptyTasksList");
  }
}

function checkEmptyInput() {
  if (inputAddTask.value.length === 0 && inputAddTask.value === "") {
    btnAddTask.setAttribute("disabled", "");
    btnAddTask.classList.add("inputEmpty");
  } else {
    btnAddTask.removeAttribute("disabled", "");
    btnAddTask.classList.remove("inputEmpty");
  }
}

function addNewTask() {
  tasksList.push({
    task: inputAddTask.value,
    done: false,
  });
  inputAddTask.value = "";
  congratulationsMsg.classList.remove("emptyTasksList");
  showTasks();
  checkEmptyInput();
}

function deleteTask(index) {
  tasksList.splice(index, 1);
  showTasks();
  isEmpty();
}

function doneTask(index) {
  const bar = document.querySelector(".bar");
  tasksList[index].done = !tasksList[index].done;
  showTasks();
}

function showTasks() {
  let newLi = "";
  tasksList.forEach((item, index) => {
    newLi =
      newLi +
      `
      <li class="task ${item.done && "done"}">
      <div class="bar ${item.done ? "red" : "green"}"></div>
      <span>${item.task}</span>
      <div class="actions">
        <img src="${
          item.done ? "./assets/red-circle.png" : "./assets/green-circle.png"
        }"
          alt="Green Circle"
          class="doneTask"
          onclick="doneTask(${index})"
        />
          <img onclick="deleteTask()" src="./assets/icon-delete.png" class="icon-trash"></img>
      </div>
      </li>
    `;
  });

  tasks.innerHTML = newLi;
}

isEmpty();
checkEmptyInput();

btnAddTask.addEventListener("click", addNewTask);
inputAddTask.addEventListener("keyup", checkEmptyInput);
