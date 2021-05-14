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
  for (let i=0; i <tasks.length; i++) {
    let task = task[i];
    html += `<li> `
    html += `<input type="checkbox">`
  }
}
