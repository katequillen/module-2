/*
Process 1
1. cuando arranque la pagina, debo pintar el listado de tareas
2. Escuchar un evento sobre las tareas pintadas
Process 2
1. Una vez que la usuaria ha hecho click,
  a. recoger en cual elemento ha hecho click
  b. modificar los datos (estado de la tarea)
  c. volver a pintar mis tareas 
  d. escuchar evento otra vez
*/

const ulElement =document.querySelector(".js-list");
const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false
  }
];

function paintTasks() {
  let html ="";
  let className = "";
  let checked = "";
  for (let i=0; i <tasks.length; i++) {
    let task = task[i];
    if(task.completed === true){
        className = "crossout";
        checked = "checked";
    }
    else{
      className = "";
      checked = "";
    }

    html += `<li> `
    html += `<input class="js-checkbox" type="checkbox" value="${i}" ${checked}/>`;
    html += `${task.name} </li>`;
  }
  ulElement.innerHTML = html;
  listenClick();
}


function listenClick () {
  const checkboxElements =document.querySelectorAll(".js-checkbox");
  for(let i=0; i< checkboxElements.length; i++) {
    checkboxElements[i].addEventListener("change", handlerCheck);
  }
}

function handlerCheck(evt){
  console.log(evt.target.value);
  const clicked = evt.target.value;
  tasks[clicked] = !tasks[clicked].completed;
}

paintTasks();
