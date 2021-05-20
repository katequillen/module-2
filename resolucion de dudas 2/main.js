"use strict";

//2.4.10

// function getBoxWidth(borderBox, width, padding, borderSize) {
//   if (borderBox === true) {
//     const totalWidth = width - padding- borderSize;
//     console.log(
//       `El ancho del contenido es: ${totalWidth}px y el ancho total de la caja es: ${width}px`
//     );
//   } else {
//     const totalWidth = width + padding + borderSize;
//     console.log(
//       `El ancho del contenido es: ${width}px y el ancho total de la caja es: ${totalWidth}px`
//   }
// }

// getBoxWidth(true, 100, 10, 3);
// getBoxWidth(false, 100, 10, 3);

//

const input = document.querySelector(".js-input");

function handleInput(ev) {
  console.log("Me hand escrito", ev.target);
  console.log(input.value);
}

input.addEventListener("keyup", handleInput);

//

const listElement = document.querySelector(".js-list");

function handleListItem(ev) {
  console.log("El targe es el elemento clickado", ev.target);
  console.log("El id del <li/> clickado es", ev.target.id);
  console.log("El current target es el elemento escuchado", ev.currentTarget);
}

listElement.addEventListener("click", handleListItem);
